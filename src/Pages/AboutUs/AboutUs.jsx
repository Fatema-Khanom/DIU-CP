// AboutUs.js

import { Helmet } from "react-helmet";
import dean_sir from "../../assets/Dean_Sir.jpg"
import jilani_sir from "../../assets/jilani_sir_canva.png"
import based_sir from "../../assets/ab_based_sir.jpg"

const AboutUs = () => {
  return (
        <div className="w-full mx-auto">
             <Helmet>
        <meta charSet="utf-8" />
        <title>DIU|CP Community|About Us</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
           <div className="">
                <div className="flex items-center justify-center">
                <img src="https://i.ibb.co/FVMPPYf/diu-Campus.jpg" className="cover h-screen  min-w-screen  mx-auto pt-24 text-center" alt="" />
                </div>

                <div className="px-20">
                <h1 className="text-4xl text-black py-10 font-bold">Discover Excellence at Dhaka International University (DIU)</h1>
                <p className="">Established on April 7, 1995, <a href="https://diu.ac/" className="text-blue-700 underline">Dhaka International University (DIU)</a> stands proudly as a leading and respected private university in Bangladesh. Founded by the esteemed Late Alhaj Professor Dr. A. B. M. Mafizul Islam Patwari, former Chairman of the Department of Law at the University of Dhaka, DIU is a non-profit institution committed to rigorous academic discipline.
                    DIU, a beacon of knowledge, was created by a renowned humanist and academic visionary. With a mission to broaden the horizons of knowledge, DIU embraces the universal adage, 'Knowledge is Power.' Our commitment to generating this power is evident through modern, pragmatic teaching methods, comprehensive training, research opportunities, and guidance. Join DIU to embark on a journey of academic excellence and empowerment.</p>
                </div>
                
                <div className="px-20">
                <h1 className="text-4xl text-black py-10 font-bold">Our Beloved Mentor's</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="">
                        <img src={dean_sir} className="h-84 w-96" alt="" />
                        <h1 className="text-xl font-bold text-black">Dr. A.T.M. Mahbubur Rahman</h1>
                        <p className="font-semibold">Head of Dept. of CSE</p>
                    </div>
                    <div className="">
                        <img src={jilani_sir} className="h-84 w-96 " alt="" />
                        <h1 className="text-xl font-bold text-black">Jilani Khandakar</h1>
                        <p className="font-semibold">Advisor - DIU CP Community</p>
                    </div>
                    <div className="">
                        <img src={based_sir} className="h-84 w-96" alt="" />
                        <h1 className="text-xl font-bold text-black">Prof. Abdul Based</h1>
                        <p className="font-semibold">Head of Research & Publication cell</p>
                    </div>
                </div>
                </div>

                <div className="px-20 py-20">
                <h1 className="text-4xl text-black py-10 font-bold">Our Goal 🥅</h1>
                <p className="">
                At DIU-CP, our primary goal is to create a vibrant and collaborative community for competitive programmers. We aspire to foster a community where enthusiasts can sharpen their skills, engage in challenging programming competitions, and exchange knowledge. Through our platform, we aim to inspire a passion for problem-solving, algorithmic thinking, and continuous learning among students of the Department of Computer Science and Engineering at Dhaka International University. Join us in our journey to cultivate a culture of excellence and camaraderie in the world of competitive programming!
                </p>
                </div>
            </div>
        </div>

  );
};

export default AboutUs;
