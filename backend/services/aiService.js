const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // טעינת המפתח מה-ENV
});

const generateSummary = async (content) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4', // או 'gpt-3.5-turbo' אם אין לך גישה ל-GPT-4
      messages: [
        { role: 'system', content: 'You are an AI that summarizes blog posts into 2-3 sentences.' },
        { role: 'user', content: `Summarize the following blog post:\n\n${content}` },
      ],
      max_tokens: 150, // מגבלה של טוקנים
    });

    return response.choices[0]?.message?.content || 'No summary generated.';
  } catch (error) {
    console.error('Error generating summary:', error);
    throw new Error('Failed to generate summary from OpenAI.');
  }
};

module.exports = { generateSummary };
