import React, { useState } from 'react';

const WinnerSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div className="">
        <h2 className= "text-center text-[#dee5e5] opacity-1 items-center relative font-bold mb-4 pt-16 text-6xl lg:text-9xl">
          WINNERS
        </h2>
       <div className="">
       <h2 className= "text-center text-blue-600 items-center -mt-16 pb-4 lg:-mt-24 text-3xl lg:text-4xl font-bold relative">
            Recent Contest Update
            <div className="h-1 w-24 bg-blue-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 "></div>
          </h2>
       <div className="text-center md:flex justify-center md:gap-20 items-center py-16 ">
      {/* Left side with winner banner image */}
      <div className="">
        <img
          src="https://i.ibb.co/FnPVMTS/411901541-1279099236235409-716376007913945986-n.jpg"  // Replace with the actual image source
          alt="Winner Banner"
          className="object-cover px-10 md:w-100 md:h-96 md:px-0 rounded text-center"
        />
      </div>

      {/* Right side with text and other design */}
      <div className={`md:w-1/2 px-8 h-[400px] overflow-y-auto borde border-gray-300 p-4 mb-4 ${isExpanded ? 'h-auto' : ''}`}>
      <h2 className="text-3xl font-bold mb-4">DIU CPC  Monthly Programming Contest - December 2023 Update.</h2>
      <p className="text-gray-700 mb-6 text-start">
        Let's celebrate the advance Happy New Year with this year's last programming contest, "DIU Monthly Programming Contest December 2023." The contest has been completed successfully, and we believe it was a highly competitive event.
      </p>

      <div className={`bg-base-300 text-start p-4 rounded ${isExpanded ? 'mb-0' : ''}`}>
        <p className="font-bold text-xl">Contest Details:</p>
        <p>Number of problems: <span className="font-semibold">7</span></p>
        <p>Problem setter: <span className="font-semibold">Md Mursalatul Islam Pallob</span></p>
        <p>Time: <span className="font-semibold">December 23, 2023, 8:00 pm - 10:00 pm</span></p>
        <p>Platform: <span className="font-semibold">Hackerrank</span></p>
        <p>Number of participants: <span className="font-semibold">43</span></p>
    </div>
    <p className="mt-6 text-start">Among the top 3 coders, the top-ranked participant solved 5 problems, while the other two solved 4 problems each. The final rankings are as follows:</p>
    <div className={`bg-base-300 text-start p-4 my-4 rounded ${isExpanded ? 'mb-0' : ''}`}>
         <p className="font-bold text-xl">Winners</p>
        <p>1st: <span className="font-semibold">Md Rafiul Islam (Batch: E-99)</span></p>
        <p>2nd: <span className="font-semibold">Md Sajjad Islam Swadhin (Batch: D-66)</span></p>
        <p>3rd: <span className="font-semibold">MD. Shihab Hassan Naim (Batch: D-78(B))</span></p>
        
    </div>
   
    </div>
    </div>
       </div>
    </div>
  );
};

export default WinnerSection;
