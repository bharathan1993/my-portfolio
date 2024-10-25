import React from 'react';
import { motion } from 'framer-motion';

const ConfirmationMessage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
        <p className="text-lg">I appreciate you contacting me.</p>
        <p className="text-lg mb-4">I'll get back to you shortly!</p>
      </div>
    </motion.div>
  );
};

export default ConfirmationMessage;
