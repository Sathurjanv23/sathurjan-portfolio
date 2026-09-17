import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageSquare, X } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{sender: 'ai' | 'user', text: string}[]>([
    { sender: 'ai', text: 'Hello! I am Sathurjan’s assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setChatMessages([...chatMessages, { sender: 'user', text: inputValue }]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        sender: 'ai', 
        text: 'Thanks for your message. One of our human experts will reach out to you shortly. Feel free to use the contact form for detailed inquiries.' 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/15551234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer animate-[pulse_2s_infinite]"
        aria-label="Contact on WhatsApp"
      >
        <SiWhatsapp className="w-7 h-7" />
      </a>

      {/* AI Chatbot Widget */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="mb-4 w-80 bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-primary p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="font-bold text-xs">AI</span>
                  </div>
                  <span className="font-bold">Sathurjan Assistant</span>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 p-1 rounded-md transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Area */}
              <div className="h-64 p-4 overflow-y-auto flex flex-col gap-3 bg-black/20">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'ai' 
                      ? 'bg-white/5 border border-white/5 text-foreground self-start rounded-tl-none' 
                      : 'bg-primary text-white self-end rounded-tr-none'
                  }`}>
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-background">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder="Type your message..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-cyan-400"
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${
            isChatOpen ? 'bg-white/10 text-white border border-white/20' : 'bg-primary text-white'
          }`}
          aria-label="Toggle AI Chat"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:border-primary transition-colors cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
