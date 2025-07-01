import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickQuestions = [
    "Tell me about the emotion detection project",
    "What technologies do you use?",
    "Show me your experience"
  ];

  const addMessage = (text: string, isBot: boolean = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addMessage(inputValue);
      setInputValue("");
      
      // TODO: Implement backend API call for chatbot response
      setTimeout(() => {
        addMessage("Thanks for your question! This chatbot will be connected to an AI service to provide detailed answers about the portfolio.", true);
      }, 1000);
    }
  };

  const handleQuickQuestion = (question: string) => {
    addMessage(question);
    
    // TODO: Implement specific responses for quick questions
    setTimeout(() => {
      let response = "Thanks for asking! This feature will be implemented with an AI chatbot to provide detailed information.";
      
      if (question.includes("emotion detection")) {
        response = "The emotion detection project uses Hugging Face transformers to analyze sentiment in real-time. It's deployed as a Streamlit app and can classify multiple emotions from text input.";
      } else if (question.includes("technologies")) {
        response = "I work with Python, Machine Learning, Power BI, Tableau, AWS, Azure, SQL, and Agile methodologies. Check out the skills section for the complete list!";
      } else if (question.includes("experience")) {
        response = "I've worked as a Business Analyst at Ackerman Solutions and Innover Digital, delivering 15+ dashboards and improving processes by 25-40%. Scroll to the experience section for details!";
      }
      
      addMessage(response, true);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
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
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-robot text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Portfolio Assistant</h4>
                  <p className="text-xs opacity-90">Ask me about my projects!</p>
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
                    className={`flex ${message.isBot ? 'items-start' : 'justify-end'}`}
                  >
                    {message.isBot && (
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="fas fa-robot text-white text-sm"></i>
                      </div>
                    )}
                    <div
                      className={`max-w-xs p-3 rounded-lg shadow-sm ${
                        message.isBot
                          ? 'bg-white text-slate-800'
                          : 'bg-blue-600 text-white'
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
                    {quickQuestions.map((question) => (
                      <Button
                        key={question}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickQuestion(question)}
                        className="text-xs px-3 py-1 h-auto border-blue-200 text-blue-600 hover:bg-blue-50"
                      >
                        {question.includes("emotion") ? "Emotion Detection" :
                         question.includes("technologies") ? "Technologies" : "Experience"}
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
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 h-auto"
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
        className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <motion.i
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`${isOpen ? 'fas fa-times' : 'fas fa-comment'} text-xl`}
        ></motion.i>
      </motion.button>
    </div>
  );
}
