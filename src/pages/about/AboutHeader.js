import React from 'react';

import about1 from 'assets/images/about-1.jpg';
import about2 from 'assets/images/about-2.jpg';
import about3 from 'assets/images/about-3.jpg';

const AboutHeader = () => {
    return (
        <header>
            <div className="relative z-20 w-5/6 sm:w-3/4 mx-auto transition-all duration-300">
                <h2 className="inline-block w-40 relative mt-24 mb-8 font-primary text-yellow text-7xl font-semibold">
                    <span className="absolute right-0 top-0">quien</span>&nbsp;
                    <span className="absolute right-5 top-14 animate-translate-word-1">voy</span>&nbsp;
                    <span className="absolute right-0 top-32 animate-translate-word-2">siendo</span>
                </h2>
            </div>
            <div className="flex w-full h-[56.1vh]">
                <div className="basis-1/3">
                    <img className="w-full h-full object-cover" src={about1} alt="" />
                </div>
                <div className="basis-1/3">
                    <img className="w-full h-full object-cover" src={about2} alt="" />
                </div>
                <div className="basis-1/3">
                    <img className="w-full h-full object-cover" src={about3} alt="" />
                </div>
            </div>
        </header>
    );
};

export default AboutHeader;