import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lamp, Maximize2, Minimize2, Minus, Trash, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const AIChatbox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

    function toggleExpand(): void {
        setIsExpanded(!isExpanded);
    }

    function handleMinimize(): void {
      if (isExpanded) {
        setIsExpanded(false);
      } else {
        setIsOpen(false);
      }
    }

    function handleClear(): void {
        setMessages([]);
        setInput('');
    }

    async function handleSend() {
      if (input.trim() === '') return;

      const newMessage = { role: 'user', content: input };
      setMessages([...messages, newMessage]);
      setInput('');
      setIsLoading(true);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: [...messages, newMessage] }),
        });

        if (!response.ok) {
          throw new Error('Failed to get response from API');
        }

        const data = await response.json();
        setMessages([...messages, newMessage, { role: 'assistant', content: data.message }]);
      } catch (error) {
        console.error('Error:', error);
        setMessages([...messages, newMessage, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
      } finally {
        setIsLoading(false);
      }
    }

    // ... (other functions like handleSend, toggleExpand, handleMinimize)

  return (
    <div className={`fixed ${isExpanded ? 'inset-0 flex items-center justify-center bg-black bg-opacity-50' : 'bottom-4 right-4'}`}>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-20 right-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer animate-pulse"
            onClick={() => setIsOpen(true)}
          >
            <div className="px-3 py-1.5 text-white font-medium text-xs rounded-full flex items-center space-x-1">
              <span>Try This</span>
              <Sparkles className="w-2.5 h-2.5 ml-0.5" />
            </div>
          </motion.div>
        </motion.div>
      )}
      {!isOpen ? (
        <Button onClick={() => setIsOpen(true)} className="p-0 bg-transparent hover:bg-transparent">
          <Image
            src="/genie-im.png"
            alt="Chat with Genie"
            width={90}
            height={90}
          />
        </Button>
      ) : (
        <Card className={`${isExpanded ? 'w-full max-w-5xl h-[80vh]' : 'w-[500px] h-[400px]'} flex flex-col shadow-lg`}>
          <CardHeader className="flex flex-row items-center justify-between p-2 bg-primary text-primary-foreground">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Lamp className="w-4 h-4" />
              <span>Bharathan&apos;s Genie</span>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={toggleExpand} className="text-primary-foreground hover:bg-primary/90">
                {isExpanded ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleMinimize} className="text-primary-foreground hover:bg-primary/90">
                <Minus className="w-3 h-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary p-3 rounded-lg">
                  Genie is thinking...
                </div>
              </div>
            )}
          </CardContent>
          <div className="p-4 bg-background">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Bharathan"
                /* placeholder="Ask Genie..." */
                className="flex-grow"
              />
              <Button type="submit" disabled={isLoading}>
                Send
              </Button>
              <Button type="button" variant="outline" onClick={handleClear}>
                <Trash className="w-4 h-4 mr-2" />
                Clear
              </Button>
            </form>
          </div>
        </Card>
      )}
    </div>
  );
};

export default AIChatbox;
