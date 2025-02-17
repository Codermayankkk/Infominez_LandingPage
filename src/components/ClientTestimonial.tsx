function ClientTestimonial() 
{
  return(
    <>
      <div className="h-fit w-full">
          <div className="h-96 relative">
               <p className="text-5xl font-thin pt-10 pl-20 text-black">Client Testimonial</p>
               <div className="h-70 w-4xl bg-white absolute ml-64 mt-28 rounded-md shadow-md shadow-gray-300">
               
               <div className="h-fit w-fit absolute ml-16 -mt-4 flex">
                   <img src="./src/images/person.png" className="h-60 w-50 rounded-md"/>
                   <a href="" target="_blank" className="h-3 w-12 absolute mt-64 ml-28"><img src="./src/images/twitter.png"/></a>
                   <a href="" target="_blank" className="h-3 w-12 absolute mt-64 ml-10"><img src="./src/images/linkedin.png"/></a>
                   <img src="./src/images/upperColon.png" className="h-7 w-9 mt-6 ml-4"/>
                  <div>
                  <div className="flex gap-12 absolute -mt-10 ml-96">
                      <button><img src="./src/images/leftArrow.png" className="h-10 w-10 ml-30"/></button>
                      <button><img src="./src/images/rightArrow.png" className="h-10 w-10 mr-96"/></button>
                  </div>
                    <p className="text-sm text-gray-500 mt-8 ml-3 pb-2 border-b border-sky-600">
                   Infominez has been an invaluable strategic technology partner for Paul Merchants,<br/> guiding us through the complex landscape of digital financial services. 
                   Their expertise <br/> in developing robust solutions for Prepaid Instruments, Pre-Paid Cards, BBPS, and UPI,<br/> along with a deep understanding of integration 
                   protocols and payment gateways, has <br/> been crucial to our success. Their strong grasp of the Indian fintech ecosystem has <br/> enabled them 
                   to deliver innovative and compliant solutions tailored to our needs.<br/> Moreover, Infominez's commitment to agile development methodologies 
                   and their <br/> ability to adapt swiftly to evolving regulatory requirements have been indispensable<br/> to our business. We highly value our partnership 
                   and look forward to continued <br/> collaboration.
                   </p>
                  </div>
               </div>
                   <p className="font-bold mt-58 ml-82 text-sm">SHAIBU&nbsp;CHERIAN</p>
                   <p className="ml-82 text-sm">
                    Whole&nbsp;Time&nbsp;Director&nbsp;at&nbsp;Paul&nbsp;Merchants&nbsp;Finance
                   </p>
              </div>
          </div>
          <div className="h-48 bg-gray-100"></div>
      </div> 
    </>
  )
}

export default ClientTestimonial
