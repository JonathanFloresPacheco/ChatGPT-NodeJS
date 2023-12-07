import dotenv from 'dotenv';
import chatGPT  from '../models/chatGPT';
import express from 'express';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/data', (req, res) => {
  const data = { message: 'This is sample data from your REST API with Chatgpt' };
  res.json(data);
});

app.post('/api/ask', async (req, res) => {
  try {
    const {model ,prompt } = req.body;
    const response = await chatGPT(model, prompt);
    res.json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});