
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles, User, ShoppingBag, Leaf, Globe, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Olá! Sou seu guia do Multideal 2026. Como posso ajudar você hoje? Lembre-se: sua compra é 100% protegida e garantimos a originalidade de todos os produtos com entrega em até 24h.',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulated AI Response logic
    setTimeout(() => {
      let aiContent = "Interessante! Posso procurar produtos com menor pegada de carbono para você. Você prefere entrega zero-emissão via Locker ou prioriza a origem local?";

      const lowInput = input.toLowerCase();
      if (lowInput.includes('tênis') || lowInput.includes('sapato')) {
        aiContent = "Encontrei ótimas opções de calçados sustentáveis! O 'Eco-Runner Pro' economiza 2.1kg de CO2 comparado a modelos tradicionais. Quer ver o certificado de origem?";
      } else if (lowInput.includes('camisa') || lowInput.includes('roupa')) {
        aiContent = "Nossas roupas de fibras recicladas são as mais populares hoje. A entrega 'Eco-Entrega' para seu CEP neutraliza 100% do impacto do transporte.";
      } else if (lowInput.includes('impacto') || lowInput.includes('score')) {
        aiContent = "Seu EcoScore atual é 82. Para chegar ao nível 'Platina', recomendo consolidar suas próximas 3 compras em um único envio via Locker.";
      } else if (lowInput.includes('lucro') || lowInput.includes('dinheiro') || lowInput.includes('kit') || lowInput.includes('negócio')) {
        aiContent = "Para lucrar rápido em 2026, recomendo o 'Kit Estamparia 5.0 Pro' (ID: 101). Ele tem um ROI de 3.2x e o payback acontece em apenas 42 vendas. Quer analisar o ROI detalhado dele?";
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiContent,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100]">
      {/* Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 20 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(52, 131, 250, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 md:w-16 md:h-16 bg-ml-blue text-white rounded-full shadow-3xl flex items-center justify-center relative group backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-white/10 rounded-full animate-ping opacity-20" />
            <Bot size={30} className="md:size-34" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-1 -right-1 bg-white p-1 rounded-full shadow-md"
            >
              <Sparkles size={14} className="text-ml-yellow fill-ml-yellow" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-0 right-0 md:relative bg-white md:rounded-2xl shadow-4xl w-full md:w-[380px] h-full md:h-[600px] flex flex-col border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-ml-blue p-5 flex items-center justify-between text-white relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center">
                  <Bot size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-[15px] tracking-tight">EcoAssistente 2.6</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-ml-green rounded-full animate-pulse shadow-[0_0_8px_white]" />
                    <span className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Sustentabilidade Ativa</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-black/10 p-2 rounded-lg transition-all active:scale-90"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-ml-background/30 custom-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse text-right' : ''}`}>
                    <div className={`p-3.5 rounded-2xl text-[14px] leading-relaxed shadow-sm ${msg.role === 'user'
                        ? 'bg-ml-blue text-white rounded-tr-none'
                        : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                      }`}>
                      {msg.content}
                      <p className={`text-[9px] mt-2 opacity-50 font-bold uppercase tracking-wider`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none flex gap-1.5 items-center shadow-sm">
                    <span className="w-1.5 h-1.5 bg-ml-blue/40 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-ml-blue/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-ml-blue/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* AI Context Hints */}
            <div className="px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar bg-white border-t border-gray-50">
              {[
                { label: 'Meu Impacto', icon: Leaf, color: 'text-ml-green' },
                { label: 'Entrega Verde', icon: Globe, color: 'text-ml-blue' },
                { label: 'Eco-Ofertas', icon: Sparkles, color: 'text-ml-yellow' }
              ].map(tag => (
                <button
                  key={tag.label}
                  onClick={() => setInput(tag.label)}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[11px] font-bold text-gray-500 hover:border-ml-blue hover:text-ml-blue transition-all"
                >
                  <tag.icon size={12} className={tag.color} />
                  {tag.label}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl pl-4 pr-1.5 py-1.5 focus-within:border-ml-blue focus-within:bg-white transition-all"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pergunte sobre sua pegada de carbono..."
                  className="flex-1 bg-transparent border-none outline-none text-[14px] text-gray-800 py-2"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-lg w-10 h-10 bg-ml-blue hover:bg-ml-blue-dark text-white flex-shrink-0 shadow-lg shadow-ml-blue/30 active:scale-95 transition-all"
                  disabled={!input.trim()}
                >
                  <Send size={18} />
                </Button>
              </form>
              <div className="flex items-center justify-center gap-2 mt-3 opacity-40">
                <ShieldCheck size={12} className="text-ml-green" />
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">
                  Protegido por EcoCloud AI
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAssistant;
