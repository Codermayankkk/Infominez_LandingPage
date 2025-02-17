function Ready() 
{
  return(
    <>
    <div className="h-fit">
        <div className="h-fit bg-gray-200 pt-10">
            <p className="text-4xl font-thin text-center">Ready To Get Started?</p>
            <p className="pt-3 font-light text-gray-400 text-center">
                Transforming businesses with data, AI/ML, and cloud solutions
            </p>
            <div className="grid grid-cols-2">
                <div className="w-fit ml-72 mt-10">
                    <label>Your Name<sup className="text-red-600 font-bold">*</sup></label><br/>
                    <input type="text" className="rounded-lg bg-white w-sm h-10 border border-gray-400 mt-2"/>
                </div>
                <div className="w-fit mt-10">
                    <label>Contact Email<sup className="text-red-600 font-bold">*</sup></label><br/>
                    <input type="text" className="rounded-lg bg-white w-sm h-10 border border-gray-400 mt-2"/>
                </div>
                <div className="w-fit ml-72 mt-4">
                    <label>Phone No.<sup className="text-red-600 font-bold">*</sup></label><br/>
                    <input type="text" className="rounded-lg bg-white w-sm h-10 border border-gray-400 mt-2"/>
                </div>
                <div className="w-fit mt-4">
                    <label>Message<sup className="text-red-600 font-bold">*</sup></label><br/>
                    <input type="text" className="rounded-lg bg-white w-sm h-10 border border-gray-400 mt-2"/>
                </div>
            </div>
            <div className="mt-10 mb-20 flex justify-center">
                    <button className="bg-green-400 rounded-lg pl-14 pr-14 pt-1 pb-1">
                       Submit
                    </button>
            </div>
            <div className="h-8"></div>
        </div>
        <div className="h-fit bg-black">

            <div className="h-48 w-full flex justify-center text-white gap-20 border-b-2">
                 <div className="flex ml-20 mt-20 pr-20 border-r-2 border-white">
                 <img src="./src/images/CallUs.png" className="h-12 mt-2"/>
                    <p className="mt-2 ml-3">
                        Call Us 7/24<br/>+91-987-987-0987
                    </p>
                 </div>
                 <div className="flex ml-20 mt-20 pr-30 border-r-2 border-white">
                 <img src="./src/images/MailUs.png" className="h-12 mt-2"/>
                    <p className="mt-2 ml-3">
                        Make a Quote<br/>hello@infominez.com
                    </p>
                 </div>  
                 <div className="flex ml-20 mt-20 pr-30">
                 <img src="./src/images/LocateUs.png" className="h-12 mt-2"/>
                    <p className="mt-2 ml-3">
                        Location<br/>One Neil Road Indore<br/>Pin-0988804
                    </p>
                 </div>         
            </div>
            <div className="h-80 w-full flex">
                    <div className="w-sm flex flex-wrap mt-10 ml-20">
                        <img src="./src/images/info_icon.png" className="h-12 w-12"/>
                        <img src="./src/images/infominez.png" className="ml-2 mt-2 h-9 w-40"/>
                        <p className="font-thin text-white -mt-20">
                        We are an angency specialising in web design & web <br/>
                        automation since 2013
                        </p>
                    </div>
                    <div className="w-30">
                            <div className="h-10 w-10 mt-10"><a href="" className="text-green-400 pl-20 font-bold">Explore</a><br/></div>
                            <div className="h-10 w-10 mt-2"><a href="" className="text-white pl-20">HOME</a><br/></div>
                            <div className="h-10 w-10"><a href="" className="text-white pl-20">ABOUT</a></div>
                            <div className="h-10 w-10"><a href="" className="text-white pl-20 pt-10">PORTFOLIO</a></div>
                            <div className="h-10 w-10"><a href="" className="text-white pl-20 pt-10">CASESTUDY</a></div>
                            <div className="h-10 w-10"><a href="" className="text-white pl-20 pt-10">BLOG</a></div>
                    </div>
                    <div className="w-40 ml-20">
                            <div className="h-10 w-10 mt-10"><a href="" className="text-green-400 pl-20 font-bold">Support</a><br/></div>
                            <div className="h-10 w-10"><a href="" className="text-white pl-20 pt-10">CONTACT&nbsp;US</a></div>
                            <div className="h-10 w-10"><a href="" className="text-white pl-20 pt-10">PRIVACY&nbsp;POLICY</a></div>
                    </div>
                    <div className="w-40 ml-20">
                            <div className="h-10 w-10 mt-10"><a href="" className="text-green-400 pl-20 font-bold">Social</a></div>
                            <div className="h-10 w-10 relative">
                                <a href="" className="text-white pl-20 pt-20">LINKEDIN</a>
                                <img src="./src/images/in.png" className="absolute -right-[20px] top-[2px] size-5"/>
                            </div>
                            <div className="h-10 w-10 relative">
                                <a href="" className="text-white pl-20 pt-10">FACEBOOK</a>
                                <img src="./src/images/f.png" className="absolute -right-[20px] top-[1px] size-5"/>
                            </div>
                            <div className="h-10 w-10 relative">
                                <a href="" className="text-white pl-20 pt-10">TWITTER</a>
                                <img src="./src/images/t.png" className="absolute -right-[20px] top-[2px] size-5"/>
                                </div>
                            <div className="h-10 w-10 relative">
                                <a href="" className="text-white pl-20 pt-10">INSTAGRAM</a>
                                <img src="./src/images/insta.png" className="absolute -right-[20px] top-[2px] size-5"/>
                            </div>
                    </div>
                    <div className="w-40">
                       <div className="h-10 w-10 mt-10"><a href="" className="text-green-400 pl-20 font-bold">Area&nbsp;We&nbsp;Serve</a></div>
                       <div className="h-12 w-64 ml-20 bg-zinc-900 rounded-md"><p className="text-white font-bold pt-3 pl-5">Select Area</p></div>

                       <div className="h-10 w-10 mt-5"><a href="" className="text-green-400 pl-20 font-bold">Our&nbsp;Service</a></div>
                       <div className="h-12 w-64 ml-20 bg-zinc-900 rounded-md"><p className="text-white font-bold pt-3 pl-5">Select Service</p></div>
                    </div>
            </div>
            <div className="bg-zinc-900 w-full h-20">
                  <p className="text-white text-center pt-8">©2025 INFOMINEZ All Rights Reserved.</p>
            </div>
        </div>
    </div> 
    </>
  )
}  
export default Ready;
