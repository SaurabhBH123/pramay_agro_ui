import React from 'react';
import { useSelector } from 'react-redux';

const Categoriesection = () => {
const data = useSelector((state)=>state.categories.singleCategory)

    return (
        
           <div className="mt-30">
                <h2 className="text-1xl font-bold text-[#f97316] mb-2">{data?.category}</h2>
                <h2 className="text-[14px] font-bold text-blue-500 mb-2">{data?.subHeading}</h2>
                <p className="text-[14px] text-black mb-4">{data?.description.para1}</p>
                <p className="text-[14px] text-black">{data?.description.para2}</p>
            </div>
        
    );
};

export default Categoriesection