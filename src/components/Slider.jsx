import React, { useEffect, useState } from 'react';
import bg from '../assets/Banner/bg.jpeg';
import bg1 from '../assets/Banner/bg1.jpeg';
import bg2 from '../assets/Banner/bg2.jpeg';

const images = [bg1,bg, bg2];

const boxData = [
    {
        imgSrc: 'https://kaybeebio.com/wp-content/uploads/2023/06/48-hours-icon-white.svg',
        number: '48',
        mainText: 'RESULT IN',
        subText: 'HOURS'
    },
    {
        imgSrc: 'https://kaybeebio.com/wp-content/uploads/2023/06/72-hours-icon-white.svg',
        number: '72',
        mainText: 'GROWTH IN',
        subText: 'HOURS'
    },
    {
        imgSrc: 'https://kaybeebio.com/wp-content/uploads/2023/06/patent-new-white.svg',
        number: '48',
        mainText: 'PATENT',
        subText: 'PRODUCTS'
    },
    {
        imgSrc: 'https://kaybeebio.com/wp-content/uploads/2023/06/granule-icon-white.svg',
        number: '48',
        mainText: 'GRANULES',
        subText: 'PRODUCTS'
    }
];

const Slider = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <section className="h-dvh w-dvw max-h-[46rem] relative mt-[50px] ">
                <div className="absolute inset-0 z-[1]">
                    <img
                        className="h-full w-full object-cover object-center "
                        src={images[visibleIndex]}
                        alt=""
                    />
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-center">
                    <div className="flex flex-row justify-between gap-8">
                        {boxData.map((box, index) => (
                            <div
                                key={index}
                                className={`bg-[#020617] flex flex-row justify-between items-center p-4 w-[16rem] max-w-md mx-auto border rounded text-2xl shadow-custom transition-all duration-1000 h-[7rem]  ${
                                    visibleIndex === index 
                                        ? 'opacity-100' 
                                        : 'opacity-50'
                                }`}
                            >
                                <img src={box.imgSrc} alt="box" className="h-[3rem]" />
                                <p className="font-black text-4xl text-center text-white font-mono">{box.number}</p>
                                <div>
                                    <p className="text-lg text-white text-center">{box.mainText}</p>
                                    <p className="text-center text-lg font-serif text-[#94a3b8]">{box.subText}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Slider;