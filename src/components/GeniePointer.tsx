import React from 'react';
import Image from 'next/image';

interface GeniePointerProps {
  onClick: () => void;
}

const GeniePointer: React.FC<GeniePointerProps> = ({ onClick }) => {
  return (
    <div 
      className="fixed bottom-16 right-16 animate-bounce cursor-pointer"
      onClick={onClick}
    >
      <Image
        src="/genie.png"
        alt="Chat with Genie"
        width={80}
        height={80}
      />
    </div>
  );
};

export default GeniePointer;
