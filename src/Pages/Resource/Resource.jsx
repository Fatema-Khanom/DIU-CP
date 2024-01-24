import React from 'react';
import { Helmet } from 'react-helmet';
import DsaResource from './DsaResource/DsaResource';

const Resource = () => {
    const jsonDataUrl = 'https://mursalatul.github.io/code-park/DOC_DATA.json';
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>DIU|CP Community|Resource</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="max-w-screen-lg mx-auto py-12 lg:py-20">
                    <h2 className="text-center dark:text-[#292a2a] text-[#f2f5f5] opacity-1 items-center relative font-bold mb-4 pt-16 text-6xl lg:text-9xl">
                    RESOURCE
                    </h2>
                <div className="">
                    <h2 className="text-center text-black items-center -mt-16 pb-4 lg:-mt-24 text-2xl lg:text-4xl font-bold relative">
                    Our Algorithm Resource Hub!
                        <div className="h-1 w-40 bg-black absolute bottom-0 left-1/2 transform -translate-x-1/2 "></div>
                    </h2>

                    <DsaResource jsonDataUrl={jsonDataUrl} className=""/>
                    <div className="mt-16 px-12 lg:px-0 p-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg text-white">
            <h2 className="text-4xl font-bold mb-6">🚀 Previous Monthly Problems</h2>
            <p className="text-lg mb-8">Dive into the challenges from our past monthly contests and boost your problem-solving skills.</p>

            <div className="text-center">
                <a
                    href="https://www.hackerrank.com/diu-competitive-programming-community-problems-board"
                    className="bg-white text-purple-600 py-3 px-6 rounded-full inline-block hover:bg-purple-600 hover:text-white transition duration-300"
                >
                    Explore Now
                </a>
            </div>
        </div>


                </div>
            </div>
            
        </div>
    );
};

export default Resource;