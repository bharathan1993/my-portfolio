import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GeniePointerProps {
  onClick: () => void;
}

const GeniePointer: React.FC<GeniePointerProps> = ({ onClick }) => {
  return (
    <motion.div 
      className="fixed bottom-5 right-5 cursor-pointer"
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/genie-im.png"
          alt="Chat with Genie"
          width={60}
          height={60}
        />
      </motion.div>
    </motion.div>
  );
};

export default GeniePointer;
