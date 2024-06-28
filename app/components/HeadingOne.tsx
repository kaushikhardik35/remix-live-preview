// ./components/HeadingOne.tsx

import React from 'react';

interface HeadingOneProps {
  children: React.ReactNode;
}

const HeadingOne: React.FC<HeadingOneProps> = ({ children }) => {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">{children}</h1>
  );
};

export default HeadingOne;
