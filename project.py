from flask import Flask, request, jsonify
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_openai import OpenAI
from googletrans import Translator
from dotenv import load_dotenv
import os
load_dotenv()
app = Flask(__name__)
llm = OpenAI(temperature=0.7, openai_api_key=os.getenv("OPENAI_API_KEY"))
prompt = PromptTemplate(
    input_variables=["education", "interests"],
    template="""
    You are a career counselor for rural Indian women. Based on the following:
    - Education: {education}
    - Interests: {interests}
    Suggest:
    1. Three realistic career paths
    2. Three free online courses (with platform names)
    3. Three job opportunities or ideas
    Respond in very simple English first.
    """
)
translator = Translator()
chain = LLMChain(llm=llm, prompt=prompt)
@app.route("/career-advice", methods=["POST"])
def career_advice():
    data = request.get_json()
    education = data.get("education")
    interests = data.get("interests")
    lang = data.get("lang", "en")
    if not education or not interests:
        return jsonify({"error": "Missing required fields."}), 400
    result_en = chain.run({"education": education, "interests": interests})
    if lang != "en":
        translated = translator.translate(result_en, dest=lang).text
    else:
        translated = result_en
    return jsonify({"response": translated})
if __name__ == "__main__":
    app.run(debug=True)
