import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const handleDownload = () =>{
  window.open("https://drive.google.com/u/1/uc?id=1QOaoykmwPiSfsqjQeQU7DPNvwAeoMAQw&export=download","_parent");
};
const Banner = () => {
  return (
    <div>
      <div className=" min-h-screen flex flex-col justify-center border-t-4 border-orange-400 ">
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
          <div>
            <img
              src="/public/Img1.png"
              className="max-w-sm lg:max-w-xl rounded-lg   mt-10 lg:mt-0 shadow-none"
            />
          </div>
          <div className="mt-10 lg:mt-0 text-center lg:text-left">
            <h1 className="text-8xl text-slate-700 font-extrabold">Hello!</h1>
            <p className="py-6 px-6 lg:px-0 text-lg">
              I am{" "}
              <span className="text-3xl font-mono font-bold">Robiul Islam</span>
              . I am a MERN STACK web developer based on Bangladesh. Welcome to
              my portfolio!
            </p>
            <button onClick={handleDownload} className="btn mx-auto lg:mx-0 bg-orange-400 flex justify-center items-center text-lg">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
