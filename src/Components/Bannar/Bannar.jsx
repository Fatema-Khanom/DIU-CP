
import { TypeAnimation } from 'react-type-animation';
import { Parallax } from 'react-parallax';

const Bannar = () => {
  return (
    /* Banner Container */
    <div className="-mt-0 md:h-full" id="banner">
      {/* Parallax Component */}
      <Parallax
        bgImage="https://i.ibb.co/6s0y9tK/monitor-1307227-1920.jpg"
        // Background Image URL
        bgImageAlt="the menu"
        strength={300}
      >
        {/* Relative Positioned Container */}
        <div className="relative h-screen flex items-center justify-center">
          {/* Overlay Background */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text Content */}
          <div className="text-white text-center z-10 opacity-90">
            {/* Main Heading */}
            <h1 className="text-4xl font-semibold mb-4 text-white"></h1>

            {/* TypeAnimation Component */}
            <TypeAnimation
              sequence={[
                "Hello!",                               // First animation
                1000,                                   // Pause duration
                'Welcome to DIU CP Community',  // Second animation
                1000,                                   // Pause duration
              ]}
              wrapper="span"
              speed={150}
              style={{
                fontSize: '4em',
                display: 'inline-block',
                fontWeight: 'bold',
                padding: '44px',
              }}
              repeat={Infinity}  // Infinite loop
            />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Bannar;
