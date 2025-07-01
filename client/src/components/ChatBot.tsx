import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatbotICON from "../resources/chatbot-logo.png";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to help you learn more about Mallikarjun's projects and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);

  const quickQuestions = [
    "Tell me about the emotion detection project",
    "What technologies do you use?",
    "Show me your experience",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) setShowWelcome(false);
  }, [isOpen]);

  const addMessage = (text: string, isBot = false) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text, isBot, timestamp: new Date() },
    ]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    addMessage(inputValue);
    setInputValue("");
    setTimeout(() => {
      addMessage(
        "Thanks for your question! This chatbot will be connected to an AI service to provide detailed answers about the portfolio.",
        true
      );
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    addMessage(question);
    setTimeout(() => {
      let response =
        "Thanks for asking! This feature will be implemented with an AI chatbot to provide detailed information.";
      if (question.includes("emotion detection")) {
        response =
          "The emotion detection project uses Hugging Face transformers to analyze sentiment in real-time. It's deployed as a Streamlit app and can classify multiple emotions from text input.";
      } else if (question.includes("technologies")) {
        response =
          "I work with Python, Machine Learning, Power BI, Tableau, AWS, Azure, SQL, and Agile methodologies. Check out the skills section for the complete list!";
      } else if (question.includes("experience")) {
        response =
          "I've worked as a Business Analyst at Ackerman Solutions and Innover Digital, delivering 15+ dashboards and improving processes by 25-40%. Scroll to the experience section for details!";
      }
      addMessage(response, true);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-80 h-96 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-slate-700 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                {/* avatar container */}
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full overflow-hidden mr-3">
                  <img
                    src={ChatbotICON}
                    alt="Chatbot Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Portfolio Assistant</h4>
                  <p className="text-xs opacity-90">
                    Ask me about my projects!
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 p-0"
              >
                <i className="fas fa-times text-sm"></i>
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 h-64">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      message.isBot ? "items-start" : "justify-end"
                    }`}
                  >
                    {message.isBot && (
                      <div className="w-10 h-10 bg-slate-700 rounded-full overflow-hidden mr-3 mt-1 flex-shrink-0">
                        <img
                          src={ChatbotICON}
                          alt="Chatbot Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-xs p-3 rounded-lg shadow-sm ${
                        message.isBot
                          ? "bg-white text-slate-800"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Quick Action Buttons */}
                {messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="flex flex-wrap gap-2 ml-11"
                  >
                    {quickQuestions.map((q) => (
                      <Button
                        key={q}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickQuestion(q)}
                        className="text-xs px-3 py-1 h-auto border-blue-200 text-blue-600 hover:bg-blue-50"
                      >
                        {q.includes("emotion")
                          ? "Emotion Detection"
                          : q.includes("technologies")
                          ? "Technologies"
                          : "Experience"}
                      </Button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 h-auto"
                >
                  <i className="fas fa-paper-plane text-sm"></i>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-slate-700 hover:bg-slate-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden"
      >
        {isOpen ? (
          <motion.i
            animate={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="fas fa-times text-xl"
          />
        ) : (
          <motion.img
            src={ChatbotICON}
            alt="Chatbot Logo"
            className="absolute inset-0 w-full h-full object-contain rounded-full"
            animate={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>

      <AnimatePresence>
        {showWelcome && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-20 bottom-0 mb-3 bg-slate-700 text-white px-3 py-2 rounded-full shadow-lg flex items-center gap-2"
          >
            <i className="fas fa-comment-dots" />
            <span className="text-sm">Hi! Need help?</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
