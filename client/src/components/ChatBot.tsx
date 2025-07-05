// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import ChatbotICON from "../resources/chatbot-logo.png";

// interface Message {
//   id: string;
//   text: string;
//   isBot: boolean;
//   timestamp: Date;
// }

// export default function ChatBot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: "1",
//       text: "Hi! I'm Mallikarjun's bot. Ask me about his background or projects!",
//       isBot: true,
//       timestamp: new Date(),
//     },
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const [showWelcome, setShowWelcome] = useState(true);
//   const messagesEndRef = useRef<HTMLDivElement>(null);


//   const generateResponse = (msg: string): string => {
//     const q = msg.toLowerCase();
//     if (q.includes("phone") || q.includes("contact")) {
//       return "You can reach Mallikarjun at (945) 209-2606.";
//     }
//     if (q.includes("email")) {
//       return "Mallikarjun's email is Mallikarjun.Gudum@gmail.com.";
//     }
//     if (q.includes("linkedin")) {
//       return "Connect on LinkedIn at www.linkedin.com/in/mallikarjungn/.";
//     }
//     if (q.includes("location")) {
//       return "Mallikarjun is based in Dallas, TX and willing to relocate anywhere in the US.";
//     }
//     if (q.includes("visa") || q.includes("authorization")) {
//       return "He holds an F-1 VISA with OPT valid through June 2028 and may need sponsorship after.";
//     }
//     if (q.includes("skill")) {
//       return "Key skills include Python, R, SQL, Power BI, Tableau, Spark, AWS, Azure and ML libraries such as scikit-learn and PyTorch.";
//     }
//     if (q.includes("experience")) {
//       return "Mallikarjun worked as a Research Analyst at UT Dallas and as an Associate Analyst at Innover Digital.";
//     }
//     if (q.includes("education")) {
//       return "He earned an MS in Business Analytics & AI from UT Dallas and a BS in Electronics & Communications Engineering from REVA University.";
//     }
//     if (q.includes("certification")) {
//       return "Certifications include AWS Certified Developer – Associate and Microsoft Certified: Azure Fundamentals.";
//     }
//     if (q.includes("project")) {
//       return "Projects span airline pricing optimization, emotion detection in tweets, SDG energy access forecasting, and A/B testing of e‑shop clickstream data.";
//     }
//     if (q.includes("interest") || q.includes("hobby")) {
//       return "Interests include applying analytics in aviation, visiting all US national parks, and professional sports.";
//     }
//     return "I don’t have that detail on hand—please fill out this form and I’ll get back to you once I confirm.";
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => setShowWelcome(false), 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (isOpen) setShowWelcome(false);
//   }, [isOpen]);

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
//     }
//   }, [messages, isOpen]);

//   const addMessage = (text: string, isBot = false) => {
//     setMessages((prev) => [
//       ...prev,
//       { id: Date.now().toString(), text, isBot, timestamp: new Date() },
//     ]);
//   };

//   const sendMessage = (text: string) => {
//     addMessage(text);
//     const response = generateResponse(text);
//     addMessage(response, true);
//   };

//   const handleSendMessage = () => {
//     if (!inputValue.trim()) return;
//     const text = inputValue;
//     setInputValue("");
//     sendMessage(text);
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") handleSendMessage();
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {/* Chat Window */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.9 }}
//             transition={{ duration: 0.3 }}
//             className="absolute bottom-20 right-0 w-96 h-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col"
//           >
//             {/* Header */}
//             <div className="bg-slate-700 text-white p-4 flex justify-between items-center">
//               <div className="flex items-center">
//                 {/* avatar container */}
//                 <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full overflow-hidden mr-3">
//                   <img
//                     src={ChatbotICON}
//                     alt="Chatbot Logo"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Portfolio Assistant</h4>
//                   <p className="text-xs opacity-90">
//                     Ask me about my projects!
//                   </p>
//                 </div>
//               </div>
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => setIsOpen(false)}
//                 className="text-white hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 p-0"
//               >
//                 <i className="fas fa-times text-sm"></i>
//               </Button>
//             </div>

//             {/* Messages */}
//             <div
//               ref={messagesEndRef}
//               className="flex-1 p-4 overflow-y-auto bg-gray-50"
//             >
//               <div className="space-y-4">
//                 {messages.map((message) => (
//                   <motion.div
//                     key={message.id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className={`flex ${
//                       message.isBot ? "items-start" : "justify-end"
//                     }`}
//                   >
//                     {message.isBot && (
//                       <div className="w-10 h-10 bg-slate-700 rounded-full overflow-hidden mr-3 mt-1 flex-shrink-0">
//                         <img
//                           src={ChatbotICON}
//                           alt="Chatbot Logo"
//                           className="w-full h-full object-contain"
//                         />
//                       </div>
//                     )}
//                     <div
//                       className={`max-w-xs p-3 rounded-lg shadow-sm ${
//                         message.isBot
//                           ? "bg-white text-slate-800"
//                           : "bg-blue-600 text-white"
//                       }`}
//                     >
//                       <p className="text-sm">{message.text}</p>
//                     </div>
//                   </motion.div>
//                 ))}

//               </div>
//             </div>

//             {/* Input */}
//             <div className="p-4 border-t border-gray-200 bg-white">
//               <div className="flex space-x-2">
//                 <Input
//                   value={inputValue}
//                   onChange={(e) => setInputValue(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Ask me anything..."
//                   className="flex-1 text-sm h-12"
//                 />
//                 <Button
//                   onClick={handleSendMessage}
//                   disabled={!inputValue.trim()}
//                   className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 h-auto"
//                 >
//                   <i className="fas fa-paper-plane text-sm"></i>
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Toggle Button */}
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="relative w-16 h-16 bg-slate-700 hover:bg-slate-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden"
//       >
//         {isOpen ? (
//           <motion.i
//             animate={{ rotate: 180 }}
//             transition={{ duration: 0.3 }}
//             className="fas fa-times text-xl"
//           />
//         ) : (
//           <motion.img
//             src={ChatbotICON}
//             alt="Chatbot Logo"
//             className="absolute inset-0 w-full h-full object-contain rounded-full"
//             animate={{ rotate: 0 }}
//             transition={{ duration: 0.3 }}
//           />
//         )}
//       </motion.button>

//       <AnimatePresence>
//         {showWelcome && !isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 10 }}
//             className="absolute right-20 bottom-0 mb-3 bg-slate-700 text-white px-3 py-2 rounded-lg shadow-lg"
//           >
//             <span className="text-sm">
//               Hi, welcome
//               <br />
//               How can I help you?
//             </span>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
