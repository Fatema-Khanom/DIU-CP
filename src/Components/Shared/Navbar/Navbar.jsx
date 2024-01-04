import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navOptions = <>
    
            <li>
                <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-blue-700 font-semibold text-[18px]" : "text-[18px] text-black hover:text-blue-600"}
                    >Home</NavLink>
            </li>
            <li>
                <NavLink
                to="/aboutus"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-gray-400 font-semibold text-[18px]" : "text-[17px] text-black hover:text-blue-600"}
                    >About Us</NavLink>
            </li>
            <li>
                <NavLink
                to="/event"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-gray-400 font-semibold text-[18px]" : "text-[17px]  text-black hover:text-blue-600"}
                    >Event</NavLink>
            </li>
            <li>
                <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-gray-400 font-semibold text-[18px]" : "text-[17px]  text-black hover:text-blue-600"}
                    >Blog</NavLink>
            </li>
            <li>
                <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-blue-700 font-semibold text-[18px]" : "text-[17px]  text-black hover:text-blue-600"}
                    >Contact</NavLink>
            </li>
    
     </>

    return (
        <div className=" fixed top-0 left-0 fixed top-0 left-0 w-full text-white lg:px-1  z-10 ">
            <div className="navbar bg-base-300 drop-shadow px-20 py- lg:rounded-full">
  <div className="lg:navbar-start">
    <div className="dropdown  lg:hidden flex items-center">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5 font-bold text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-36">
        {navOptions}
      </ul>
    </div>
    
    <img src="https://i.ibb.co/LpZSfxK/photo-2024-01-02-20-14-01-removebg-preview.png"className="w-12 h-16 md:w-20 md:h-20" alt="" />
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  
</div>
        </div>



    );
};

export default Navbar;