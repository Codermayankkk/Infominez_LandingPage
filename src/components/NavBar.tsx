import { useEffect, useState } from "react";

function NavBar() :any
{
    const [navBg, setNavBg] = useState("bg-transparent");
    const [showService, setShowService] = useState(false);
    const [showIndustry, setShowIndustry] = useState(false);
    const [showResource, setShowResource] = useState(false);

    useEffect(() => 
    {
      const handleScroll = () => 
      {
        if (window.scrollY > 50) 
        {
          setNavBg("bg-blue-950 bg-opacity-90 shadow-md transition-all duration-300");
        } 
        else 
        {
          setNavBg("bg-transparent");
        }
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);  

  return(
    <>
      <div className={`flex h-18 fixed top-0 left-0 w-full z-50 backdrop-blur-lg ${navBg}`}>
          <div className="mt-3 ml-24">
            <img src="./src/images/info_icon.png" />
          </div>
          <div className="mt-5 ml-3">
            <img src="../images/infominez.png" />
          </div>

          <div className="text-white mt-6 ml-36 font-bold underline underline-offset-4 decoration-green-500">
            <a href="">Home</a>
          </div>
          {/* Services */}
          <div className="text-white mt-6 ml-6 font-light flex cursor-pointer h-fit" 
          onMouseEnter={() => setShowService(true)}
          onMouseLeave={() => setShowService(false)}>
            <p>Services</p>
            <img src="./src/images/downArrow.png" className="h-2 w-2.5 relative left-2 top-2"/>
            {/* Drop-Down for Services */}
            {showService && (<div className="h-24 w-22 bg-blue-950 fixed top-18 right-[820px]">
              <p className="text-white pt-2 text-center">Service-1</p>
              <p className="text-white pt-1 text-center">Service-2</p>
              <p className="text-white pt-1 text-center">Service-3</p>
            </div>)} 
          </div>
          {/* Industries */}
          <div className="text-white mt-6 ml-6 font-light flex cursor-pointer" 
          onMouseEnter={() => setShowIndustry(true)}
          onMouseLeave={() => setShowIndustry(false)}>
            <p>Industries</p>
            <img src="./src/images/downArrow.png" className="h-2 w-2.5 relative left-2 top-2" />
            {/* Drop-Down for Industries */}
            {showIndustry && (
              <div className="h-24 w-22 bg-blue-950 fixed top-18 right-[720px]">
                <p className="text-white pt-2 text-center">Industry-1</p>
                <p className="text-white pt-1 text-center">Industry-2</p>
                <p className="text-white pt-1 text-center">Industry-3</p>
              </div>
            )}
          </div>
          {/* Resources */}
          <div className="text-white mt-6 ml-6 font-light cursor-pointer flex" 
          onMouseEnter={() => setShowResource(true)}
          onMouseLeave={() => setShowResource(false)}>
            <p>Resources</p>
            <img src="./src/images/downArrow.png" className="h-2 w-2.5 relative left-2 top-2"/>
            {/* Drop-Down for Resources */}
            {showResource && (<div className="h-24 w-22 bg-blue-950 fixed top-18 right-[620px]">
              <p className="text-white pt-2 text-center">Resource-1</p>
              <p className="text-white pt-1 text-center">Resource-2</p>
              <p className="text-white pt-1 text-center">Resource-3</p>
            </div>)}
          </div>
          <div className="text-white mt-6 ml-6 font-light hover:font-bold h-fit">
            <a href="">Career</a>
          </div>
          <div className="text-white mt-6 ml-6 font-light hover:font-bold h-fit">
            <a href="">About&nbsp;us</a>
          </div>
          <div className="text-white mt-6 ml-6 font-light hover:font-bold h-fit">
            <a href="">Contact&nbsp;us</a>
          </div>

          <div className="mt-5 ml-34 text-white h-fit backdrop-blur-md rounded-4xl border-2
           border-green-500 hover:bg-green-500 hover:text-white">
            <button className="text-xs pt-2 pb-2 pl-7 pr-5 font-extrabold">
              Get Started
            </button>
          </div>
        </div>
    </>
  )
}

export default NavBar