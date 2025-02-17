function AboutUs() 
{
  return (
    <>
     <div className="h-screen bg-gray-200">
        <div className="h-40 w-full flex justify-center">
            <p className="text-5xl font-thin pt-10">About Us</p>
        </div> 

        <div className="flex h-64">
             <div className="h-96 w-3xl">
                <img src="./src/images/work.png"/>
             </div>
             <div className="z-30 h-90 w-4xl bg-white flex flex-wrap items-center -ml-18 mt-14">
                   <p className="pl-20 pr-8 pt-10">
                       At Infominez, we are the driving force behind transforming technology<br/>
                       impactful business outcomes. Our team of visionary technologists<br/>
                       specializes in AI and ML innovations, along with expertise in fintech, data<br/>
                       analytics, and cloud services, to deliver solutions that redefine industry<br/>
                       standards. With a deep understanding of AI-driven strategies and a<br/>
                       commitment to customer success, we create transformative results that<br/>
                       align with our clients' unique goals. By combining technical expertise with<br/>
                       creative problem-solving, we enable businesses to unlock the power of<br/>
                       data, innovate with confidence, and thrive in today's AI-driven world.<br/>   
                   </p>
                   <div className="h-28 pt-8 pl-20">
                       <button className="bg-green-400 font-medium rounded-lg pt-2 pb-2 pl-10 pr-10">Know More</button>
                   </div>
             </div>
        </div>
     </div> 
    </>
  )
}

export default AboutUs
