
import React from 'react';

const Usage = ({ usage }) => {
  return (
    <di>
        <div className="mb-8">
        <p className="text-1xl font-semibold mb-4 text-gray-800">Application Method and Time</p>
        <p className="text-gray-700 mb-2"><strong>Method:</strong> {usage.applicationMethodAndTime.method}</p>
        <p className="text-gray-700 mb-2"><strong>Time:</strong> {usage.applicationMethodAndTime.time}</p>
        <p className="text-gray-700"><strong>Compatibility:</strong> {usage.applicationMethodAndTime.compatibility}</p>
      </div>
      <div className="mb-8">
      <p className="text-1xl font-semibold mb-4 text-gray-800">Mode of Action</p>
        <p className="text-gray-700">{usage.modeOfAction}</p>
      </div>
      <div>
      <p className="text-1xl font-semibold mb-4 text-gray-800">Application Doses</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {usage.applicationDoses.map((dose, index) => (
            <li key={index}>{dose}</li>
          ))}
        </ul>
      </div>
      <p className="text-1xl font-semibold mb-4 text-gray-800">Recommended Crops</p>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crops</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.keys(usage.recommendedCrops).map((category) => (
              <tr key={category}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {category.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {usage.recommendedCrops[category]?.length > 0 
                    ? usage.recommendedCrops[category].join(', ') 
                    : 'No crops listed'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </di>
  );
};

export default Usage;
