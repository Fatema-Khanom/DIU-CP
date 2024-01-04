// AboutUs.js

import { Helmet } from "react-helmet";


const AboutUs = () => {
  return (
        <div className="">
             <Helmet>
        <meta charSet="utf-8" />
        <title>DIU|CP Community|About Us</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
            <div className="py-20">
            <h2 className= "text-center text-[#dee5e5] opacity-1 items-center relative font-bold mb-4 pt-16 text-6xl lg:text-9xl">
          About Us
        </h2>
        <div className="">
        <h2 className= "text-center text-blue-600 items-center -mt-16 pb-4 lg:-mt-24 text-3xl lg:text-4xl font-bold relative">
            About Us
            <div className="h-1 w-24 bg-blue-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 "></div>
          </h2>
        </div>
            </div>
        </div>

  );
};

export default AboutUs;
