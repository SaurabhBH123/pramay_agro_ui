import React from 'react';

const TopCategory = () => {
    return (
        <div>
            <p className='text-center font-sans font-bold mt-10'>TOP CATEGORIES</p>
            <div className="p-10 flex flex-wrap items-center justify-center">

                <div className="flex-shrink-0 m-2 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                        <img className="relative w-40 h-36 w-36" src="https://i.ibb.co/S7GStTH/moon.png" alt="" />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Moon</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">moon</span>
                            <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">₹36.00</span>
                        </div>
                    </div>
                </div>

                {/* <img src='https://i.ibb.co/cvvCrnx/Ashwa.png'/> */}
                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                        <img className="relative w-40 h-36 w-36" src="https://i.ibb.co/hZjQxZ1/Radient.png" alt="" />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Radient</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Radient</span>
                            <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">₹45.00</span>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                        <img className="relative w-40 h-36 w-36" src="https://i.ibb.co/80Ysptp/feeder.png" alt="" />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">feeder</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">feeder</span>
                            <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">₹68.50</span>
                        </div>
                    </div>
                    
                </div>
                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                        <img className="relative w-40 h-36 w-36" src="https://i.ibb.co/vV29y6p/humi-maxx.png" alt="" />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">humi-maxx</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">humi-maxx</span>
                            <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">₹68.50</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default TopCategory;
