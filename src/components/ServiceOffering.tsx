function ServiceOffering():any
{ 
  return(
    <>
    <div className="bg-white h-screen">
       <div className="h-48 w-full flex items-center justify-center">
         <div className="font-thin text-4xl">
            Service Offering
         </div>
       </div>

       <div className="flex flex-wrap justify-center items-baseline w-full h-64 gap-5">
           <div className="flex flex-wrap items-center h-48 w-xl border border-gray-300 rounded-lg shadow-xl">
               <div className="pl-10 pt-8">
                   <img src="./src/images/productEngine.png" className="h-16 w-16"/>
               </div>
               <div className="pl-10">
                   <p className="font-bold">Product Engineering</p>
                   <p className="font-light text-gray-400">Our Product Engineering Services provide end-</p>
                   <p className="font-light text-gray-400">to-end solutions to transform your ideas into</p>
                   <p className="font-light text-gray-400">successful, market-ready products.</p>
               </div>
               <div className="pl-36 pb-1">
                   <button className="bg-green-400 rounded-lg pl-10 pr-10 pt-2 pb-2 text-xs">Transform Your Idea</button>
               </div>
           </div>
           <div className="flex flex-wrap items-center h-48 w-xl border border-gray-300 rounded-lg shadow-xl">
               <div className="pl-10 pt-8">
                   <img src="./src/images/dataEng.png" className="h-16 w-16"/>
               </div>
               <div className="pl-10">
                   <p className="font-bold">Data Engineering</p>
                   <p className="font-light text-gray-400">Transform data into insights: clear governance</p>
                   <p className="font-light text-gray-400">and powerful analytics unlock your data's</p>
                   <p className="font-light text-gray-400">potential.</p>
               </div>
               <div className="pl-36 pb-1">
                   <button className="border border-green-400 rounded-lg pl-10 pr-10 pt-2 pb-2 text-xs">Start Your Data Journey</button>
               </div>
           </div>
           <div className="flex flex-wrap items-center h-48 w-xl border border-gray-300 rounded-lg shadow-xl">
               <div className="pl-10 pt-8">
                   <img src="./src/images/AIML.png" className="h-16 w-16"/>
               </div>
               <div className="pl-10">
                   <p className="font-bold">AI ML Services</p>
                   <p className="font-light text-gray-400">Leverage the power of AI and ML to transform data into</p>
                   <p className="font-light text-gray-400">actionable insights, automate processes, and drive</p>
                   <p className="font-light text-gray-400">smarter business decisions for sustainable growth.</p>
               </div>
               <div className="pl-36 pb-1">
                   <button className="border border-green-400 rounded-lg pl-10 pr-10 pt-2 pb-2 text-xs">Transform with AI</button>
               </div>
           </div>
           <div className="flex flex-wrap items-center h-48 w-xl border border-gray-300 rounded-lg shadow-xl">
               <div className="pl-10 pt-8">
                   <img src="./src/images/cloudEngine.png" className="h-16 w-16"/>
               </div>
               <div className="pl-10">
                   <p className="font-bold">Cloud Engineering</p>
                   <p className="font-light text-gray-400">Scale and transform your business with pace</p>
                   <p className="font-light text-gray-400">and agility using our cloud engineering</p>
                   <p className="font-light text-gray-400">services.</p>
               </div>
               <div className="pl-36 pb-1">
                   <button className="border border-green-400 rounded-lg pl-10 pr-10 pt-2 pb-2 text-xs">Unlock Your Cloud Potential</button>
               </div>
           </div>
       </div>
    </div>  
    </>
  )
}

export default ServiceOffering
