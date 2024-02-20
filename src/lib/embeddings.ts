import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "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",
});

export async function getEmbeddings(text: string) {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: text.replace(/\n/g, " "),
    });
    return response.data[0].embedding as number[];
  } catch (error) {
    console.log("error calling openai embeddings api", error);
    throw error;
  }
}
