import logo from "../assets/images/logo.png";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="h-20 w-[85%] mx-auto flex justify-between items-center">
      <img className="h-15 " src={logo} alt="image logo" />
      <div className="flex w-[16%] tracking-wider justify-between text-md">
        <h1>Venues</h1>
        <h1>Vendors</h1>
        <h1>Blog</h1>
      </div>
      <div className="flex gap-3 items-center">
        <BiSearch className="text-gray-500 text-lg ml-3 absolute" />
        <input
          className="focus:outline-none py-2 px-10 rounded-3xl w-[20rem] border-2 border-gray-300 text-gray-900"
          type="text"
          placeholder="Search Venues or Vendors"
        />
        <button className=" bg-[#faaa00] py-2 px-6 tracking-wide rounded-md text-white">
          Login
        </button>
      </div>
    </div>
  );
};
export default Navbar;
