import React, { useState } from 'react';
import Description from './Description';
import UspBenifits from './UspBenifits';
import Usage from './Usage';
import FAQ from './Faq';

const TopTab = ({data}) => {
  const [activeTab, setActiveTab] = useState('DESCRIPTION');

  const renderContent = () => {
    switch (activeTab) {
      case 'DESCRIPTION':
        return <Description description={data?.description}/>;
      case 'USP/BENEFITS':
        return <UspBenifits usp={data?.usp}/>
      case 'USAGE':
        return <Usage usage={data.usage}/>
      case 'FAQS':
        return <FAQ faq={data.faq}/>
      default:
        return null;
    }
  };
if(!data){
  return null;
}

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-10 border-b-2 mb-4">
        <button 
          className={`text-[15px] pb-2 ${activeTab === 'DESCRIPTION' ? 'border-b-2 border-blue-500' : ''}`} 
          onClick={() => setActiveTab('DESCRIPTION')}
        >
          DESCRIPTION
        </button>
        <button 
          className={`text-[15px] pb-2 ${activeTab === 'USP/BENEFITS' ? 'border-b-2 border-blue-500' : ''}`} 
          onClick={() => setActiveTab('USP/BENEFITS')}
        >
          USP/BENEFITS
        </button>
        <button 
          className={`text-[15px] pb-2 ${activeTab === 'USAGE' ? 'border-b-2 border-blue-500' : ''}`} 
          onClick={() => setActiveTab('USAGE')}
        >
          USAGE
        </button>
        <button 
          className={`text-[15px] pb-2 ${activeTab === 'FAQS' ? 'border-b-2 border-blue-500' : ''}`} 
          onClick={() => setActiveTab('FAQS')}
        >
          FAQS
        </button>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
}

export default TopTab;
