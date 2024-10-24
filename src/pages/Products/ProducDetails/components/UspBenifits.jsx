import React from 'react';

const UspBenifits = ({ usp }) => {
console.log("uspDta",usp)
  return (
    <div >
      <p className="text-1xl font-semibold mb-4 text-gray-800">{usp?.title}</p>
      <ol className="list-decimal pl-5 space-y-2">
        {usp.benefits.map((benefit, index) => (
          <li key={index} className="text-gray-700">{benefit}</li>
        ))}
      </ol>
      <p className="mt-4 text-gray-600">{usp?.productPackagingAndAvailability}</p>
    </div>
  );
};

export default UspBenifits;
