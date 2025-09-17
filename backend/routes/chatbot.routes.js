import express from 'express';
import OpenAI from 'openai';

const router = express.Router();

router.post('/message', async (req, res) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const { messages } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error('AI Error:', err.message);
    res.status(500).json({ error: 'AI failed to respond' });
  }
});

export default router;
