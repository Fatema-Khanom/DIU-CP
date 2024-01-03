
import { TypeAnimation } from 'react-type-animation';
// import { MdKeyboardArrowDown } from "react-icons/md";
//import { FaChevronDown } from 'react-icons/fa';
import { Parallax } from 'react-parallax';

const Bannar = () => {
  return (
   <div className="-mt-0 md:h-full" id="banner">
     <Parallax
      bgImage="https://i.ibb.co/6s0y9tK/monitor-1307227-1920.jpg"
      bgImageAlt="the menu"
      strength={800}
      
    >
      <div className="relative h-screen flex items-center justify-center" >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-white text-center z-10 opacity-90">
          <h1 className="text-4xl font-semibold mb-4 text-white"></h1>
          <TypeAnimation
            sequence={[
              "Hello!",
              1000,
              'Welcome to DIU Competitive Programming World!',
              1000,
            ]}
            wrapper="span"
            speed={150}
            style={{
              fontSize: '4em',
              display: 'inline-block',
              fontWeight: 'bold',
              padding: '44px',
              
            }}
            repeat={Infinity}
          />

         

        </div>
      </div>
    </Parallax>
   </div>
  );
};

export default Bannar;