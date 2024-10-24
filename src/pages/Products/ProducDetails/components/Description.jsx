import React from 'react';

const Description = ({ description }) => {
  const { heading, paragraphs } = description;
  
  return (
    <div className="">
      <p className="text-1xl font-semibold mb-4 text-gray-800">{heading}</p>
      {paragraphs?.map((paragraph, index) => (
        <p key={index} className="text-gray-600 mb-3">{paragraph}</p>
      ))}
    </div>
  );
};

export default Description;
