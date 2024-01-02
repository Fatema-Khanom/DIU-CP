import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navOptions = <>
    
            <li>
                <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-blue-400 font-semibold text-[18px]" : "text-[18px] text-white"}
                    >Home</NavLink>
            </li>
            <li>
                <NavLink
                to="/aboutus"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-gray-400 font-semibold text-[18px]" : "text-[17px] text-white"}
                    >About Us</NavLink>
            </li>
            <li>
                <NavLink
                to="/event"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-gray-400 font-semibold text-[18px]" : "text-[17px] text-white"}
                    >Event</NavLink>
            </li>
            <li>
                <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-gray-400 font-semibold text-[18px]" : "text-[17px] text-white"}
                    >Blog</NavLink>
            </li>
            <li>
                <NavLink
                to="/contactus"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-gray-400 font-semibold text-[18px]" : "text-[17px] text-white"}
                    >Contact</NavLink>
            </li>
    
     </>

    return (
        <div className=" fixed top-0 left-0 fixed top-0 left-0 w-full text-white px-1 z-10p-4 z-10">
            <div className="navbar bg-[#333] drop-shadow px-20 py-6 rounded-full">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <p className="text-xl font-bold">DIU Competitive Programming</p>
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