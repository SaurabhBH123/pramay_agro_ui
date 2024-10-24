import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Aboutus = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
        <div className='mt-28'>
            {/* <div className='ml-9'>
                <Link to="/">Home | </Link>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                        <span key={name} className='text-[#f97316]'>
                            {!isLast ? (
                                <Link to={routeTo}>{name}</Link>
                            ) : (
                                <span>{name}</span>
                            )}
                            {!isLast && ' / '}
                        </span>
                    );
                })}
            </div> */}
            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-[#ea580c] font-bold md:text-4xl">PRAMAY AGRO PRIVATE LIMITED</h2>
                            <p className="mt-6 text-gray-600 text-center">
                                Pramay Agro Pvt Ltd Bio-Organics offers a wide range of ECOCERT-approved,
                                NOP-NPOP certified, and patented pest management solutions
                                which include Bio-insecticides, Bio-Fungicides, Bio-Acaricides, Adjuvants, and CIBRC certified Neem Based Products.
                                And each product category has come out with solutions that were unparalleled.
                            </p>
                            <p className="mt-4 text-gray-600 text-center">
                                Kay Bee Organics aims to become a force to reckon within organic farming.
                                We want to reduce the cost of production for farmers as
                                we try to sustain biodiversity and healthy living through our products.
                                All of it while replacing harmful synthetic chemical pesticides with organic ones, globally.
                                Every day our research and development teams work towards
                                crafting botanical-based pesticides from plant alkaloids so that we can meet
                                the export standards and at the same time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
