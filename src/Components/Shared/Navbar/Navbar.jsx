import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const navOptions = <>
    
            <li>
                <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-gray-400 font-semibold" : ""}
                    >Home</NavLink>
            </li>
            <li>
                <NavLink
                to="/aboutus"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-gray-400 font-semibold" : ""}
                    >About Us</NavLink>
            </li>
            <li>
                <NavLink
                to="/event"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-gray-400 font-semibold" : ""}
                    >Event</NavLink>
            </li>
            <li>
                <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-gray-400 font-semibold" : ""}
                    >Blog</NavLink>
            </li>
            <li>
                <NavLink
                to="/contactus"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-gray-400 font-semibold" : ""}
                    >Contact</NavLink>
            </li>
    
     </>
    return (
        <div className="">
            <div className="navbar bg-base-300 px-20 py-10">
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