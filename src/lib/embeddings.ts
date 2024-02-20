import { OpenAIApi, Configuration } from "openai-edge";

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

export async function getEmbeddings(text: string) {
  try {
    const response = await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: text.replace(/\n/g, " "),
    });
    console.log(response, " EMBEDDING resp")
    const result = await response.json();
    return result.data[0].embedding as number[];
  } catch (error) {
    console.log("error calling openai embeddings api", error);
    throw error;
  }
}