import InputCol from "./InputCol";
import main from "../assets/images/main.png";
import bg from "../assets/images/bg.png";

const Hero = () => {
  return (
    <div className="h-[500px] bg-[#173535] grid grid-cols-2">
      <div className="text-white flex flex-col lg:ml-20  justify-center ">
        <p className="xl:text-6xl lg:text-5xl md:text-3xl text-4xl font-serif ">
          Plan your love journey with us right by your side
        </p>
        <div className="flex py-6 w-full">
          <InputCol text="Category" placeholder="Venues" />
          <InputCol text="City" placeholder="Gujarat" />
        </div>
        <button
          type="button"
          className="focus:outline-none text-[#173535] bg-white font-medium rounded-sm text-md px-6 py-2 ml-auto mr-9 "
        >
          View results
        </button>
      </div>
      <div className=" bg-gradient-to-r from-[#064646] to-[#091a1a94] w-4/5 ml-auto hidden lg:block ">
        <div className="relative ">
          <img
            src={bg}
            alt="background image"
            className="absolute right-0 top-40"
          />
          <img
            src={main}
            alt="main image"
            className="absolute top-[4.6rem] -left-24 hidden xl:block  "
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
