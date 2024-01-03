import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-[#333]">
            <div className="lg:flex justify-between py-6 px-20">
                <div className="text-white">Competitive Programming Community</div>
                <div className="grid grid-flow-col gap-4 text-white">
                    <Link to={"/aboutus"}><a href=""className="hover:text-blue-600 hover:underline">About Us</a></Link>
                    <Link to={"/contact"}><a href=""className="hover:text-blue-600 hover:underline">Contact</a></Link>
                    <Link to={"/aboutus"}><a href=""className="hover:text-blue-600 hover:underline">Blog</a></Link>
                    <Link to={"/aboutus"}><a href=""className="hover:text-blue-600 hover:underline">Event</a></Link>
                    
                   
                </div>
            </div>
            <hr className="text-black"></hr>
            <footer className=" footer footer-center p-4 bg-[#333] py-12 text-white font-semibold ">
            <aside>
                <p>Copyright © 2024 - All right reserved by DIU CP</p>
            </aside>
            </footer> 

        </div>
    );
};

export default Footer;