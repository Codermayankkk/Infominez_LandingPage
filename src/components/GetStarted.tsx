import "../css/getStarted.css";
import NavBar from "./NavBar";

function GetStarted(): any 
{
  return (
    <>
        <NavBar/>
      <div className="blueBack min-h-screen w-full md:w-full relative pt-24 ">
        {/* Navbar */}
        {/* Content Section */}
        <div>
          <p className="text-white ml-24 mt-40 font-thin min-w-[500px]:text-4xl md:text-5xl">
            Transform Your Business with Intelligent
          </p>
          <p className="text-white ml-24 mt-2 font-thin sm:text-4xl md:text-5xl lg:text-6xl 
           2xl:text-center">
            AI & ML Solutions
          </p>
        </div>
        <div>
          <p className="text-white ml-24 mt-6 font-thin sm:text-xl md:text-2xl 2xl:text-center">
            Drive Innovation and Growth with AI-Powered Solutions
          </p>
        </div>
        <div
          className="mt-11 ml-24 text-white h-16 flex rounded-4xl border-2 2xl:mx-auto
           border-green-500 w-fit backdrop-blur-md hover:bg-green-500 hover:text-black ">
          <button className="text-[14px] pt-2 pb-2 pl-5 pr-5 font-extrabold ">
            Transform our Business with AI & ML
          </button>
          <img src="./src/images/arrow.png" className="h-10 w-18 pt-5 pr-4" />
        </div>
      </div>
    </>
  );
}

export default GetStarted;
