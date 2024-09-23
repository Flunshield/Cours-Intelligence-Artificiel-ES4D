import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Configure l'API avec ta clé
const genAI = new GoogleGenerativeAI("AIzaSyAY_MXTPpBFXMMp4tJ0MA_uR5B76FvqrAw"); // CLEF API GEMINI
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

interface Message {
  text: string;
  sender: "user" | "bot";
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  // Fonction pour envoyer un message et obtenir la réponse de l'API
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Appel à l'API de Gemini avec entrée textuelle uniquement
    const botResponse = await fetchGeminiResponse(input);

    const botMessage: Message = { text: botResponse, sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);

    setInput(""); // Réinitialiser l'entrée utilisateur
  };

  const fetchGeminiResponse = async (prompt: string): Promise<string> => {
    try {
      // Appel à l'API de génération de texte
      const result = await model.generateContent(prompt);
      return result.response.text(); // Renvoie la réponse du modèle
    } catch (error) {
      console.error("Erreur lors de la génération de texte :", error);
      return "Désolé, je n'ai pas pu générer de réponse.";
    }
  };

  return (
    <div className="flex flex-col max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg mb-2 ${
              msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {msg.text}
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
  );
};

export default ChatBox;
