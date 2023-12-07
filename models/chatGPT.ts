import dotenv from 'dotenv';
import OpenAI from 'openai';
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

async function waitAndRetry(retryAfter: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
}

async function chatGPT(model: string, prompt: string): Promise<any> {
  try {
    const chatCompletion:any = await openai.chat.completions.create({
        model: model,
        messages: [
          { role: 'user', content: prompt },
        ],
      }
    );

    console.log(chatCompletion);
    return chatCompletion;
  } catch (error: any) {
    console.error(error);
    return 'Error al generar el texto :'+ error;
  }
}


export default chatGPT;
