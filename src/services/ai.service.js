const { GoogleGenAI } = require("@google/genai") 
const ai = new GoogleGenAI({
    apiKey:GEMINI_API_KEY
});


async function generateCaption(base64ImageFile){
    const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Caption this image." },
];

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: contents,
  config:{
    systemInstruction:` 
    You are caption builder 
    Generate captions one at a time use hashtags and emojis
    only one caotion at a time

    `
  }
});
return response.text
}

module.exports = generateCaption