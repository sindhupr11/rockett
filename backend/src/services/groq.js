const axios = require("axios");

exports.getReply = async (message, language, difficulty) => {
  const prompt = `Reply to "${message}" as a ${language} tutor. the person may ask a question in english or he may reply in ${language}. reply so that the user with a difficulty level: ${difficulty} in ${language} can understand.`;
  return await makeGroqRequest(prompt);
};

exports.translateToKnownLanguage = async (message, knownLanguage) => {
  const prompt = `Translate "${message}" to ${knownLanguage}`;
  return await makeGroqRequest(prompt);
};

exports.getReplySuggestion = async (targetLanguage) => {
  const prompt = `Suggest a good reply in ${targetLanguage}`;
  return await makeGroqRequest(prompt);
};

async function makeGroqRequest(prompt) {
  try {
    const response = await axios.post(
      `https://api.groq.com/openai/v1/chat/completions`,
      {
        model: "llama3-groq-70b-8192-tool-use-preview",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: { Authorization: `Bearer ${process.env.GROQ_API_KEY}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error interacting with Groq API:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Error interacting with Groq API");
  }
}
