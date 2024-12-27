const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateSummary = async (content) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', 
      messages: [
        { role: 'system', content: 'Summarize the following blog post in 1-2 sentences.' },
        { role: 'user', content: content },
      ],
      max_tokens: 150,
    });

    const summary = response.choices[0]?.message?.content.trim();
    return summary || 'No summary generated.';
  } catch (error) {
    console.error('Error generating summary from OpenAI:', error.message);
    throw new Error('Failed to generate summary. Please try again.');
  }
};

module.exports = { generateSummary };
