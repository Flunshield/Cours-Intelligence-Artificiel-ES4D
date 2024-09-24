import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";

// Configure l'API avec ta clé
const genAI = new GoogleGenerativeAI("YOUR_API_KEY"); // Clé API Gemini
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

interface Message {
  text: string;
  sender: "user" | "bot";
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [promptSelected, setPromptSelected] = useState({ id: 0, prompt: "" });

  const tabPrompt = [
    {
      id: 1,
      title: "Coach Sportif",
      prompt:
        "You are a fitness coach. Only provide fitness advice, and your answer will be in French. If the question is not about fitness, your response should be sour and rude. Question: ",
    },
    {
      id: 2,
      title: "Professeur",
      prompt:
        "You are a teacher. Only provide educational advice, and your answer will be in French. If the question is not about education, your response should be sour and rude. Question: ",
    },
    {
      id: 4,
      title: "Avocat",
      prompt:
        "You are a lawyer. Only provide legal advice, and your answer will be in French. If the question is not about law, your response should be sour and rude. Question: ",
    },
    {
      id: 5,
      title: "Psychologue",
      prompt:
        "You are a psychologist. Only provide psychological advice, and your answer will be in French. If the question is not about psychology, your response should be sour and rude. Question: ",
    },
    {
      id: 6,
      title: "Ingénieur",
      prompt:
        "You are an engineer. Only provide technical advice, and your answer will be in French. If the question is not about engineering, your response should be sour and rude. Question: ",
    },
    {
      id: 7,
      title: "Chef",
      prompt:
        "You are a chef. Only provide culinary advice, and your answer will be in French. If the question is not about cooking, your response should be sour and rude. Question: ",
    },
    {
      id: 8,
      title: "Journaliste",
      prompt:
        "You are a journalist. Only provide news advice, and your answer will be in French. If the question is not about news, your response should be sour and rude. Question: ",
    },
  ];

  // Fonction pour envoyer un message et obtenir la réponse de l'API
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Appel à l'API de Gemini avec le prompt spécifique au rôle de coach fitness
    const botResponse = await fetchGeminiResponse(input);

    const botMessage: Message = { text: botResponse, sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);

    setInput(""); // Réinitialiser l'entrée utilisateur
  };

  const fetchGeminiResponse = async (question: string): Promise<string> => {
    try {
      // Ajout du contexte de coach fitness directement dans le prompt
      const promptInitialise = question;

      // Appel à l'API de génération de texte
      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: promptSelected.prompt + promptInitialise,
              },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 500, // Nombre de tokens maximum pour la réponse
          temperature: 0.5, // Ajuste la créativité de la réponse
        },
      });

      return result.response.text(); // Renvoie la réponse générée par Gemini
    } catch (error) {
      console.error("Erreur lors de la génération de texte :", error);
      return "Désolé, je n'ai pas pu générer de réponse.";
    }
  };

  return (
    <div className="flex flex-col w-full mx-auto p-4 bg-gray-100 rounded-lg shadow-md space-y-5 justify-center">
      <div className="flex flex-col w-full mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="flex-1 overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg mb-2 ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              {msg.sender === "bot" ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown> // Rendre le texte en Markdown
              ) : (
                msg.text
              )}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center">Prompt</h1>
        <div className="flex flex-col w-full mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
          {tabPrompt.map((prompt, index) => (
            <div
              key={index}
              className={clsx(
                promptSelected.id === prompt.id
                  ? "bg-slate-300"
                  : "bg-gray-500",
                "p-2 rounded-lg mb-2 cursor-pointer"
              )}
              onClick={() =>
                setPromptSelected({ id: prompt.id, prompt: prompt.prompt })
              }
            >
              <h2>{prompt.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
