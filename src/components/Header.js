import {  useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btn, setBtn] = useState("Login");
  // const {loggedInUser} = useContext(UserContext)

  const [isOpen, setIsOpen] = useState(false);

//Subscribing to the store using a selector
const cartItems = useSelector((store) => store.cart.items);


  return (
    <nav className="flex justify-between items-center flex-wrap p-6 bg-pink-50 shadow-md mb-2">
    {/* <div className="flex justify-between bg-pink-50 shadow-md mb-2"> */}
      {/* <div className="logo-container"> */}
      <div className="flex items-center flex-shrink-1 text-white mr-6 lg:mr-96">
        {/* <img alt="logo-immg" className="w-36" src={LOGO_URL} /> */}
        <img src={LOGO_URL} className="w-100 h-10 mr-2" alt="Logo" />
      </div>
      {/* from here hamburger */}
      <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-gray-600 hover:text-gray-900"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     {/* tille hhere */}
      {/* <div className="flex items-center"> */}
      <div
       className={`w-full block flex-grow lg:flex  lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
        {/* <ul className="flex p-4 m-4 font-medium"> */}
        <ul className="text-md font-bold lg:flex-grow">
          <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">Online Status : {useOnlineStatus() ? "✅" : "🔴"}</li>
          {/* <li className="px-4"> */}
          <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            {" "}
            <Link to="/">Home </Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
             <Link to="/cart">🛒({cartItems.length})</Link></li>
         
          {/* <li className="px-4">{loggedInUser}</li> */}
        </ul>
        <div> <button
            className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white"
            onClick={() =>
              btn === "Login" ? setBtn("Logout") : setBtn("Login")
            }
          >
            {btn}
          </button></div>
      </div>
    </nav>
  );
};
export default Header;
