import React from 'react';

const FAQ = ({ faq }) => {
  return (
    <div className="mb-8">
      <p className="text-1xl font-semibold mb-4 text-gray-800">FAQ</p>
      {faq?.map((item) => (
        <div key={item._id} className="mb-6">
          <p className="text-1xl font-semibold mb-4 text-gray-800">{item?.question}</p>
          <p className="text-gray-700">{item?.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
