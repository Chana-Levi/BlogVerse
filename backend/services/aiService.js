const { OpenAI } = require('openai');
require('dotenv').config();

// יצירת אובייקט OpenAI עם המפתח מה-ENV
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// פונקציה ליצירת תקציר
const generateSummary = async (content) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // ניתן להחליף ב-'gpt-4' אם יש לך גישה
      messages: [
        { role: 'system', content: 'Summarize the following blog post in 1-2 sentences.' },
        { role: 'user', content: content },
      ],
      max_tokens: 150, // הגבלת כמות הטוקנים לתקציר
    });

    // החזרת התקציר מהתשובה
    const summary = response.choices[0]?.message?.content.trim();
    return summary || 'No summary generated.';
  } catch (error) {
    console.error('Error generating summary from OpenAI:', error.message);
    throw new Error('Failed to generate summary. Please try again.');
  }
};

module.exports = { generateSummary };
