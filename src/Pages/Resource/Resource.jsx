import React from 'react';
import { Helmet } from 'react-helmet';
import DsaResource from './DsaResource/DsaResource';

const Resource = () => {
    const jsonDataUrl = 'https://mursalatul.github.io/code-park/ADMIN/MAINTAIN/DOC_DATA.json';
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


                </div>
            </div>
            
        </div>
    );
};

export default Resource;