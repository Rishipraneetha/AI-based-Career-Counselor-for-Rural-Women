# AI-based-Career-Counselor-for-Rural-Women

🌟 Overview

This is a multilingual AI-powered career guidance web app built especially for rural and semi-urban women in India. It helps users explore personalized career paths, learn relevant skills through free online courses, and discover job opportunities — all through a simple chat-based interface.

The goal is to bridge the gap between curiosity and confidence by offering practical, easy-to-understand advice in English, Hindi, or Telugu.

🧠 Features

Personalized career suggestions based on education and interests

Free course recommendations (with platform names)

Job or side-income ideas

Multilingual support (English, Hindi, Telugu)

Clean and user-friendly interface

🛠️ Built With

React.js – For creating a clean and responsive frontend UI

Tailwind CSS – For simple and modern styling

Flask – Backend framework to serve the chatbot API

LangChain + OpenAI API – To generate career guidance using conversational AI

Google Translate API – For translating output to local languages

Axios – For handling requests between frontend and backend

Dotenv – To securely manage API keys

🚀 How to Run

Backend (Flask)

Clone the repo

Install requirements:

pip install flask langchain langchain-openai langchain-community openai googletrans==4.0.0-rc1 python-dotenv

Create a .env file:

OPENAI_API_KEY=your_key_here

Run the app:

python app.py

Frontend (React)

Navigate to the frontend directory:

npx create-react-app career-counselor-frontend
cd career-counselor-frontend

Install dependencies:

npm install axios

Add Tailwind CSS (optional but recommended):

npm install -D tailwindcss
npx tailwindcss init

Start the app:

npm start

🎥 Demo Video Script (Optional)

"Hi, I built an AI-based career counselor app especially for rural women in India. With just a few inputs — like education and interests — the chatbot suggests career options, free courses, and job ideas. Best of all, it supports Telugu, Hindi, and English so it feels natural and accessible. I hope this tool helps more women take the first step toward a brighter future."

🙋‍♀️ Made for: Meesho’s Scripted By Her Challenge

This project is my small contribution to empowering women through tech — by making guidance simpler, smarter, and more inclusive.

📫 Contact

For questions or collaborations, feel free to connect with me!

