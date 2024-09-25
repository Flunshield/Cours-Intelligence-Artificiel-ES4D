import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";

// Configure l'API avec ta clé
const genAI = new GoogleGenerativeAI("AIzaSyBU5WHvV6I7KxJyyWYoKWLs930-YqatyNA"); // Clé API Gemini
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

interface Message {
  text: string;
  sender: "user" | "bot";
}

interface Prompt {
  id: number;
  title: string;
  prompt: string;
}

const initialPrompts: Prompt[] = [
  {
    id: 0,
    title: "Coach Sportif",
    prompt:
      "You are a fitness coach. Only provide fitness advice, and your answer will be in French. If the question is not about fitness, your response should be sour and rude. Question: ",
  },
  {
    id: 1,
    title: "Professeur",
    prompt:
      "You are a teacher. Only provide educational advice, and your answer will be in French. If the question is not about education, your response should be sour and rude. Question: ",
  },
  {
    id: 2,
    title: "Avocat",
    prompt:
      "You are a lawyer. Only provide legal advice, and your answer will be in French. If the question is not about law, your response should be sour and rude. Question: ",
  },
  {
    id: 3,
    title: "Psychologue",
    prompt:
      "You are a psychologist. Only provide psychological advice, and your answer will be in French. If the question is not about psychology, your response should be sour and rude. Question: ",
  },
  {
    id: 4,
    title: "Ingénieur",
    prompt:
      "You are an engineer. Only provide technical advice, and your answer will be in French. If the question is not about engineering, your response should be sour and rude. Question: ",
  },
  {
    id: 5,
    title: "Chef",
    prompt:
      "You are a chef. Only provide culinary advice, and your answer will be in French. If the question is not about cooking, your response should be sour and rude. Question: ",
  },
  {
    id: 6,
    title: "Journaliste",
    prompt:
      "You are a journalist. Only provide news advice, and your answer will be in French. If the question is not about news, your response should be sour and rude. Question: ",
  },
];

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [promptSelected, setPromptSelected] = useState<Prompt | null>(null);
  const [tabPrompt, setTabPrompt] = useState<Prompt[]>(initialPrompts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPromptTitle, setNewPromptTitle] = useState("");
  const [newPromptText, setNewPromptText] = useState("");

  useEffect(() => {
    const storedPrompts = localStorage.getItem("customPrompts");
    if (storedPrompts) {
      setTabPrompt((prev) => [...prev, ...JSON.parse(storedPrompts)]);
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const botResponse = await fetchGeminiResponse(input);
    const botMessage: Message = { text: botResponse, sender: "bot" };
    setMessages((prev) => [...prev, botMessage]);

    setInput("");
  };

  const fetchGeminiResponse = async (question: string): Promise<string> => {
    try {
      console.log(promptSelected)
      const promptToSend = promptSelected ? promptSelected.prompt : "";
      console.log(promptToSend + question)
      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [{ text: promptToSend + question }],
          },
        ],
        generationConfig: { maxOutputTokens: 500, temperature: 0.5 },
      });

      return result.response.text() || "Désolé, je n'ai pas pu générer de réponse.";
    } catch (error) {
      console.error("Erreur lors de la génération de texte :", error);
      return "Erreur : impossible de générer une réponse.";
    }
  };

  // Ajouter un prompt personnalisé et l'enregistrer dans le localStorage
  function addNewPrompt() {
    const newPrompt: Prompt = {
      id: new Date().getTime(),
      title: newPromptTitle,
      prompt: newPromptText,
    };
    const updatedPrompts = [...tabPrompt, newPrompt];
    setTabPrompt(updatedPrompts);
    localStorage.setItem("customPrompts", JSON.stringify(updatedPrompts.filter(p => p.id > initialPrompts.length)));
    setNewPromptTitle("");
    setNewPromptText("");
    setIsModalOpen(false);
  };

  // Supprimer un prompt
  const deletePrompt = (id: number) => {
    const updatedPrompts = tabPrompt.filter(prompt => prompt.id !== id);
    setTabPrompt(updatedPrompts);
    localStorage.setItem("customPrompts", JSON.stringify(updatedPrompts.filter(p => p.id > initialPrompts.length)));
  };

  return (
    <div className="flex flex-col w-full mx-auto p-4 bg-gray-100 rounded-lg shadow-md space-y-5 justify-center">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={clsx(
              "p-2 rounded-lg mb-2",
              msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"
            )}
          >
            {msg.sender === "bot" ? (
              <ReactMarkdown>{msg.text}</ReactMarkdown>
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

      <div>
        <h1 className="text-2xl font-bold text-center">Prompt</h1>
        <div className="flex flex-col w-full overflow-scroll h-96 mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
          {tabPrompt.map((prompt) => (
            <div
              key={prompt.id}
              className={clsx(
                promptSelected?.id === prompt.id ? "bg-slate-300" : "bg-gray-500",
                "p-2 rounded-lg mb-2 cursor-pointer flex flex-row justify-between"
              )}
              onClick={() => setPromptSelected(prompt)}
            >
              <h2>{prompt.title}</h2>
              {prompt.id > initialPrompts.length && (
                <button
                  onClick={() => deletePrompt(prompt.id)}
                  className="ml-4 p-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Supprimer
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Ajouter un nouveau prompt
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Ajouter un prompt</h2>
            <input
              type="text"
              value={newPromptTitle}
              onChange={(e) => setNewPromptTitle(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              placeholder="Titre du prompt"
            />
            <textarea
              value={newPromptText}
              onChange={(e) => setNewPromptText(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              placeholder="Contenu du prompt"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Annuler
              </button>
              <button
                onClick={addNewPrompt}
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
