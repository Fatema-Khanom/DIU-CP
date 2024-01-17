

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    /* Footer Container */
    <div className="dark:bg-black bg-[#FFB000]">
      {/* Top Section */}
      <div className="lg:flex justify-between py-6 px-20">
        {/* Branding */}
        <div className="text-whit">© DIU CP Community</div>

        {/* Navigation Links */}
        <div className="grid grid-flow-col gap-4 text-whit">
          <Link to={"/aboutus"}>
            {/* About Us Link */}
            <a href="" className="hover:text-blue-600 hover:underline">About Us</a>
          </Link>
          <Link to={"/contact"}>
            {/* Contact Link */}
            <a href="" className="hover:text-blue-600 hover:underline">Contact</a>
          </Link>
          <Link to={"/aboutus"}>
            {/* Blog Link */}
            <a href="" className="hover:text-blue-600 hover:underline">Blog</a>
          </Link>
          <Link to={"/aboutus"}>
            {/* Event Link */}
            <a href="" className="hover:text-blue-600 hover:underline">Event</a>
          </Link>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="text-black"></hr>

      {/* Footer Content */}
      <footer className="footer footer-center p-4 dark:bg-black bg-[#FFB000] py-12 text-whit font-semibold ">
        <aside>
          {/* Copyright Information */}
          <p>Copyright © 2024 - All right reserved by DIU CP Community</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
