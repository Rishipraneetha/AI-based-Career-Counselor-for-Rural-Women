import React, { useState } from 'react';
import axios from 'axios';
export default function CareerCounselor() {
  const [education, setEducation] = useState('');
  const [interests, setInterests] = useState('');
  const [lang, setLang] = useState('en');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    setResponse('');
    try {
      const res = await axios.post('http://localhost:5000/career-advice', {
        education,
        interests,
        lang
});
      setResponse(res.data.response);
    } catch (err) {
      setResponse('Error fetching response.');
    } finally {
      setLoading(false);
    }
};
return (
<div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 flex flex-col items-center
justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Career Counselor for Rural Women</h1>
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <label className="block mb-2">Education</label>
        <input
          type="text"
          className="w-full border p-2 rounded mb-4"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <label className="block mb-2">Interests</label>
        <input
          type="text"
          className="w-full border p-2 rounded mb-4"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
        <label className="block mb-2">Preferred Language</label>
        <select
          className="w-full border p-2 rounded mb-4"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="te">Telugu</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full"
        >
          {loading ? 'Generating...' : 'Get Career Advice'}
        </button>
        {response && (
<div className="mt-6 bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
{response}
          </div>
)} </div>
</div> );
}
