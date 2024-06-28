// ./components/BlockComponent.tsx

import React from 'react';

interface BlockComponentProps {
  node: {
    _key: string;
    _type: string;
    children: any[]; // Adjust the type as per your actual data structure
    // Include other necessary fields based on your schema
  };
}

const BlockComponent: React.FC<BlockComponentProps> = ({ node }) => {
  const renderChildren = () => {
    // Map over children array and render each child
    return node.children.map((child, index) => {
      // Depending on the type of child, you can render different elements
      // For example, if child is of type 'block', render it as a paragraph
      if (child._type === 'block') {
        return (
          <p key={child._key} className="text-lg">
            {child.children.map((innerChild, innerIndex) => (
              <span key={innerIndex}>{innerChild.text}</span>
            ))}
          </p>
        );
      }

      // Add more conditional rendering for other types as needed
      return null;
    });
  };

  return (
    <div className="my-4">
      {renderChildren()}
    </div>
  );
};

export default BlockComponent;
