
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos <= currentScrollPos || currentScrollPos <0);
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  // JSX for navigation options
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-blue-700 font-semibold text-[18px]" : "text-[18px] text-black hover:text-blue-600"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutus"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-gray-400 font-semibold text-[18px]" : "text-[17px] text-black hover:text-blue-600"}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/event"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-gray-400 font-semibold text-[18px]" : "text-[17px]  text-black hover:text-blue-600"}
        >
          Event
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-gray-400 font-semibold text-[18px]" : "text-[17px]  text-black hover:text-blue-600"}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-blue-700 font-semibold text-[18px]" : "text-[17px]  text-black hover:text-blue-600"}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/resourse"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-blue-700 font-semibold text-[18px]" : "text-[17px]  text-black hover:text-blue-600"}
        >
          Resourse
        </NavLink>
      </li>
    </>
  );

  return (
    /* Navbar Container */
    <div  className={`fixed top-0 left-0 w-full text-white z-10 transition-transform duration-300 ${visible ? '-translate-y-full' : ''}`}>
      {/* Navbar Content */}
      <div className="navbar bg-base-300 drop-shadow lg:px-20 ">
        {/* Navbar Start */}
        <div className="flex justify-between  lg:navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown justify-between  lg:hidden flex items-center">
            {/* Dropdown Button */}
            <div tabIndex={0} role="button" className="btn btn-ghost text-right lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5 rounded-full text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            {/* Dropdown Menu */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box  w-52 mt-36">
              {navOptions}
            </ul>
          </div >
          {/* Logo */}
          <img src="https://i.ibb.co/LpZSfxK/photo-2024-01-02-20-14-01-removebg-preview.png" className=" w-12 h-16 md:w-20 md:h-20" alt="" />
        </div>

        {/* Navbar End (Hidden on Mobile) */}
        <div className="navbar-end hidden lg:flex">
          {/* Horizontal Menu */}
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        
      </div>
      
    </div>
  );
};

export default Navbar;




// import { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [theme,setTheme] =useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
//   useEffect(()=>{
//     localStorage.setItem("theme", theme);
//     const localTheme = localStorage.getItem("theme");
//     document.querySelector("html").setAttribute("data-theme", localTheme)
//   },[theme]);
//   const handleToggle=(e)=>{
//     if(e.target.checked){
//       setTheme("dark");
//     }
//     else{
//       setTheme("light");
//     }
//   }

// const [isDarkMode, setIsDarkMode] = useState(false);
// const handleToggle = () => {
//   setIsDarkMode((prevMode) => !prevMode);
// };

// useEffect(() => {
//   const theme = isDarkMode ? 'dark' : 'light';
//   document.querySelector('html').setAttribute('data-theme', theme);
// }, [isDarkMode]);

//   // JSX for navigation options
//   const navOptions = (
//     <>
//       <li>
//         <NavLink
//           to="/"
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "bg-blue-700 font-semibold text-[18px]" : "text-[18px] dark:text-gray-200  text-black hover:text-blue-600"}
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/aboutus"
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "bg-gray-400 font-semibold text-[18px] " : "text-[17px] dark:text-gray-200  text-black hover:text-blue-600 "}
//         >
//           About Us
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/event"
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "bg-gray-400 font-semibold text-[18px]" : "text-[17px] dark:text-gray-200  text-black hover:text-blue-600"}
//         >
//           Event
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/blog"
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "bg-gray-400 font-semibold text-[18px]" : "text-[17px] dark:text-gray-200  text-black hover:text-blue-600"}
//         >
//           Blog
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/contact"
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "bg-blue-700 font-semibold text-[18px]" : "text-[17px] dark:text-gray-200  text-black hover:text-blue-600"}
//         >
//           Contact
//         </NavLink>
//       </li>
//     </>
//   );
//   return (
//     <div className=" fixed  top-0 left-0 w-full text-white lg:px-1  z-10 drop-shadow-md">
//       <div className="navbar dark:bg-black bg-base-300 drop-shadow lg:px-20 lg:rounded-full">
//       <div className="flex justify-between    lg:navbar-start">
//           {/* Mobile Dropdown */}
//           <div className="dropdown justify-between pl-6  lg:hidden flex items-center">
//             {/* Dropdown Button */}
//             <div tabIndex={0} role="button" className="btn btn-ghost text-right lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className=" h-9 w-10 font-bold text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </div>
//             {/* Dropdown Menu */}
//             <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box  w-52 mt-36">
//               {navOptions}
//             </ul>
//           </div >
//           {/* Logo */}
//           <div className="">
//           <img src="https://i.ibb.co/LpZSfxK/photo-2024-01-02-20-14-01-removebg-preview.png" className=" w-12 h-16 md:w-20 md:h-20" alt="" />
//           </div>
//         </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//     {navOptions}
//     </ul>
//   </div>
//   <div className="navbar-end">
//   <label className="swap swap-rotate">
//             <input
//               type="checkbox"
//               onChange={handleToggle}
//               checked={isDarkMode}
//               className="theme-controller"
//             />
//             {/* sun icon */}
//             <svg className={`swap-on fill-current text-white w-10 h-10 ${isDarkMode ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//               {/* ... sun icon path data */}
//               <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
//             </svg>
//             {/* moon icon */}
//             <svg className={`swap-off fill-current w-10 h-10 text-black ${isDarkMode ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//               {/* ... moon icon path data */}
//               <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
//             </svg>
//           </label>
    
     
//   </div>
// </div>
//     </div>
//   );
// };

// export default Navbar;

// import { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // JSX for navigation options
//   const navOptions = (
//     <>
//       {/* ... your navigation options JSX */}
//     </>
//   );

//   const handleToggle = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   useEffect(() => {
//     const theme = isDarkMode ? 'dark' : 'light';
//     document.querySelector('html').setAttribute('data-theme', theme);
//   }, [isDarkMode]);

//   return (
//     <div className="fixed top-0 left-0 w-full text-white lg:px-1 z-10 drop-shadow-md">
//       <div className={`navbar ${isDarkMode ? 'dark:bg-black' : 'bg-base-300'} drop-shadow lg:px-20 lg:rounded-full`}>
//         <div className="flex justify-between lg:navbar-start">
//           {/* Mobile Dropdown */}
//           <div className="dropdown justify-between pl-6 lg:hidden flex items-center">
//             <div tabIndex={0} role="button" className="btn btn-ghost text-right lg:hidden">
//               {/* ... dropdown button icon */}
//             </div>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-36">
//               {navOptions}
//             </ul>
//           </div>
//           {/* Logo */}
//           <div>
//             <img src="https://i.ibb.co/LpZSfxK/photo-2024-01-02-20-14-01-removebg-preview.png" className="w-12 h-16 md:w-20 md:h-20" alt="" />
//           </div>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             {navOptions}
//           </ul>
//         </div>
//         <div className="navbar-end">
//           <label className="swap swap-rotate">
//             <input
//               type="checkbox"
//               onChange={handleToggle}
//               checked={isDarkMode}
//               className="theme-controller"
//             />
//             {/* sun icon */}
//             <svg className={`swap-on fill-current text-white w-10 h-10 ${isDarkMode ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//               {/* ... sun icon path data */}
//             </svg>
//             {/* moon icon */}
//             <svg className={`swap-off fill-current w-10 h-10 text-black ${isDarkMode ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//               {/* ... moon icon path data */}
//             </svg>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

