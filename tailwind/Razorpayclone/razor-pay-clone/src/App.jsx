import React from 'react';
//images- import
import logo from "./assets/logo.svg";
import indiaflag from "./assets/india-flag.svg";
import heroillus from "./assets/hero-illustration.jpg";
import heroshape from "./assets/hero-shape.svg";
import fsdr from "./assets/feature-section1-dottedrows.png";
import paymentsuit from "./assets/payment-suite.png";
import paymentlinkicon from "./assets/payment-link-icon.svg";
import Paymentpages from "./assets/payment-pages-icon.svg";
import paymentbuttons from "./assets/payment-button.svg";
import Subscription from "./assets/subscriptions-icon.svg";
import route from "./assets/route-icon.svg";
import smartcollect from "./assets/smart-collect-icon.svg";
import flame1 from "./assets/x-flame-1.png";
import flame2 from "./assets/x-flame-2.png";
import razorpayx from "./assets/razorpayX.svg";
import buisnessbanking from "./assets/buisness-banking.png";
import currenticon from "./assets/current-icon.svg";
import fsectiondotted1 from "./assets/feature-section1-dottedrows.png";
import razorxicon from "./assets/razorpayXicon.svg";
import instantactivation from "./assets/instant-activation-icon.svg";
import comanies from "./assets/comanies.png";
import testimoniauncle from "./assets/testimonial.jpg";
import quotes from "./assets/quotes.svg";
import fakecompanylogo from "./assets/fake-company-logo.png";
import ctaimage from "./assets/ctaImg.svg";



import { FaCheck } from "react-icons/fa";
import { ChevronRight } from "feather-icons-react";


const App = () => {
  return (
    <div className='overflow-x-hidden relative w-full'>
          {/* Navbar */}
          <nav className='bg-deepBlue'>

             <div className='relative w-[1080px] mx-auto flex items-center justify-between'>

                 {/* logo */}
                <a href="/" className='cursor-pointer py-7 pr-7'>
                 <img src={logo}  width="125px"
                    height="30px"
                     />
                </a>

                <ul className='flex space-x-6' >

                   <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block'>
                    <a href="#">Payments</a>
                    <div className=' absolute bottom-0 w-full h-1 bg-LightBlue300 hidden group-hover:block transition-all duration-200'></div>
                   </li>
                   <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block'>
                    <a href="#">Banking</a>
                    <div className=' absolute bottom-0 w-full h-1 bg-LightBlue300 hidden group-hover:block transition-all duration-200'></div>
                   </li>
                   <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block'>
                    <a href="#">Corporate Card</a>
                   </li>
                   <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block'>
                    <a href="#">Payroll</a>
                   </li>
                   <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block'>
                    <a href="#">Resources</a>
                    <div className=' absolute bottom-0 w-full h-1 bg-LightBlue300 hidden group-hover:block transition-all duration-200'></div>
                   </li>
                   <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block'>
                    <a href="#">Support</a>
                    <div className=' absolute bottom-0 w-full h-1 bg-LightBlue300 hidden group-hover:block transition-all duration-200'></div>
                   </li>
                   <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hidden lg:block'>
                    <a href="#">Pricing</a>
                    <div className=' absolute bottom-0 w-full h-1 bg-LightBlue300 hidden group-hover:block transition-all duration-200'></div>
                   </li>
                  
                </ul>

                <div className='flex gap-x-6 '>
                  <img src={indiaflag}
                    width="28px"
                    height="20px"
                     className=' hidden lg:block'/>
                    <button className='py-3 px-5 font-mullish   text-white border-lightBlue border rounded-sm text-sm font-bold'>Log in</button>
                    <button className='py-3 px-4 font-mullish rounded-sm text-sm  bg-white text-LightBlue300 border transition-all duration-200 hover:text-blue-500 hidden lg:flex'>Sign up</button>

                </div>

             </div>

          </nav>
          
          {/* hero section */}
          <section className=' relative bg-deepBlue'>


            <div className='flex w-10/12 max-w-[1080px] flex-row justify-between items-center mx-auto' width="10/12">
              {/* leftpart */}
               <div className=' space-y-8' >
                 <h1 className='font-mullish font-bold text-[40px]leading-[1.2] text-white'>Power your finance ,grow your buisness</h1>
                 <div className='w-6 h-1 bg-greenLight'></div>
                 <p className='font-mullish text-[18px] leading-7 text-white opacity-70'> 
                   Accept payments from customers. Automate payouts to vendors &
                   employees. Never run out of working capital.
                 </p>
                 <button className='bg-lightBlue text-white py-3.5 px-[18px] rounded-md font-boldfont-mullish hover:bg-lightBlue500 transition-all duration-200'>
                  sign up</button>
               </div>
              {/* rightpart */}
              <img src={heroillus} alt="" className='w-full max-w-[680px]' 
              />
            </div>

            {/* shape part */}
            <div className=' w-[100%] absolute left-0 right-0'>
              <img src={heroshape} alt="" className='w-full' />
            </div>

          </section>

          {/* Feature section */}
         <section className=' relative mt-[190px] '>

           <img src={fsdr} alt="" loading='lazy' widht="233" height="167" 
            className=' absolute -top-32 left-40 inline-block -z-10 '/>
            <img src={fsdr} alt="" loading='lazy' widht="233" height="167" 
            className=' absolute top-12 right-0 inline-block rotate-180'/>
            
            <div className=' relative w-11/12 max-w-[1080px] mx-auto pt-4'>
                {/* heading */}
                <h2 className=' font-mullish text-center text-2xl leading-1.2 font-extrabold hidden md:block'> Accept Payements with Razorpay Payment suite</h2>
                <h2 className=' font-mullish text-center text-2xl leading-1.2 font-extrabold md:hidden'>Explore Razorpay Payment suite</h2>
                <div className=' w-6 h-1 bg-greenLight mx-auto mt-4 mb-6'></div>

                {/* content box */}
                <div className='w-full min-h-[520px] bg-white flex rounded-md relative p-10 py-12 border'>
                   {/* leftcontent */}
                  <div className='flex flex-col justify-between  w-full'>
                   <h3 className='font-mullish text-[28px]leading-10 font-bold max-w-[500px]'>Supercharge your buisness with the all powerful <span className='text-lightBlue'>Payment Gateway</span></h3>

                   <ul className=' space-y-2'>

                    <li className=' font-mullish flex items-center space-x-2'> 
                      <FaCheck className="text-green-500" size={24} />
                       <span>100+ Payment Methods</span>
                    </li>

                    <li className=' font-mullish flex items-center space-x-2'>
                       <FaCheck className="text-green-500" size={24} />
                       <span>Industry Leading Success Rate</span>
                    </li>

                    <li  className=' font-mullish flex items-center space-x-2'>
                       <FaCheck className="text-green-500" size={24} />
                       <span>Superior Checkout Experience</span>
                    </li>

                    <li className=' font-mullish flex items-center space-x-2'>
                       <FaCheck className="text-green-500" size={20} />
                       <span>Easy to Integrate</span>
                    </li>

                    <li className=' font-mullish flex items-center space-x-2'>
                       <FaCheck className="text-green-500" size={24} />
                       <span>Instant Settlements from day 1</span>
                    </li>

                    <li className=' font-mullish flex items-center space-x-2'>
                       <FaCheck className="text-green-500" size={24} />
                       <span>In-depth Reporting and Insights</span>
                    </li>

                   </ul>

                  {/* for button and hyperlink */}
                  <div className=' flex flex-col-reverse md:flex-row items-center space-x-4'>
                    <button
                    className=' bg-lightBlue w-full md:w-fit text-white py-3.5 px-[18px] rounded-md
                     font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200'>
                      Sign Up Now</button>
                    <div className='flex self-start md:self-center cursor-pointer group'>
                       <a href="#" 
                       className='font-mullish font-bold text-lightBlue500 group-hover:text-gray-50
                         transition-all duration-200'
                         >Know More</a>
                        <ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                    </div>

                  </div>

                </div>
                {/* Background-Image */}
                  <img src={paymentsuit} alt="" 
                  className=' max-w-[600px] absolute right-0 bottom-0 hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block'/>
              </div>
              <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                  {/* Box-1 */}
                  <div className='w-full min-h-[15rem] relative cursor-pointer'>
                     <img src={paymentlinkicon} alt="#" 
                     className='bg-lightBlue absolute right-3 top-3 w-12 rounded-full z-8
                        transition-all duration-200'/>
                     {/* box-shape */}
                     <svg

                           viewBox="0 0 349.32501220703125 225"
                           xmlns="http://www.w3.org/2000/svg"
                           preserveAspectRatio="none"
                           className='stroke-[#818597] h-full w-full absolute z-0 transition-all duration-200'
                           style={{ strokeOpacity: 0.3 }}        
                           >
                        <path
                           d="m 0 6
                           a 6 6 0 0 1 6 -6
                           h 250.32501220703125
                           a 16 16 0 0 1 11 5
                           1 77 77
                           a 16 16 0 0 1 5 11
                           v 126
                           a 6 6 0 0 1 -6 6
                           h -337.32501220703125
                           a 6 6 0 0 1 -6 -6
                           z"
                           fill="#fff"
                           ></path>
                     </svg>

                     {/* box-content */}
                     <div className='z-100 absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                        {/* text-part */}
                           <div>
                              <h3 className='font-mullish font-bold text-deepBlue leading-[1.2] text-[1.375rem]'> Payments Links </h3>
                              <p className='font-mullish text-grayText mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore deleniti maiores fugit.</p>
                           </div>

                           {/* Hyper-link */}
                           <div className='flex items-center cursor-pointer group'>
                              <a href="#"
                              className='font-mullish font-bold text-lightBlue group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                              <ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                           </div>

                     </div>
                  </div>
                  {/* box-2 */}
                     <div className='w-full min-h-[15rem] relative cursor-pointer'>
                     <img src={Paymentpages} alt="#" 
                     className='bg-lightBlue absolute right-3 top-3 w-12 rounded-full z-8
                        transition-all duration-200'/>
                     {/* box-shape */}
                     <svg

                           viewBox="0 0 349.32501220703125 225"
                           xmlns="http://www.w3.org/2000/svg"
                           preserveAspectRatio="none"
                           className='stroke-[#818597] h-full w-full absolute z-0 transition-all duration-200'
                           style={{ strokeOpacity: 0.3 }}        
                           >
                        <path
                           d="m 0 6
                           a 6 6 0 0 1 6 -6
                           h 250.32501220703125
                           a 16 16 0 0 1 11 5
                           1 77 77
                           a 16 16 0 0 1 5 11
                           v 126
                           a 6 6 0 0 1 -6 6
                           h -337.32501220703125
                           a 6 6 0 0 1 -6 -6
                           z"
                           fill="#fff"
                           ></path>
                     </svg>

                     {/* box-content */}
                     <div className='z-100 absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                        {/* text-part */}
                           <div>
                              <h3 className='font-mullish font-bold text-deepBlue leading-[1.2] text-[1.375rem]'>Payments Pages</h3>
                              <p className='font-mullish text-grayText mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore deleniti maiores fugit.</p>
                           </div>

                           {/* Hyper-link */}
                           <div className='flex items-center cursor-pointer group'>
                              <a href="#"
                              className='font-mullish font-bold text-lightBlue group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                              <ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                           </div>

                     </div>
                  </div>
                  {/* box-3 */}
                     <div className='w-full min-h-[15rem] relative cursor-pointer'>
                     <img src={paymentbuttons} alt="#" 
                     className='bg-lightBlue absolute right-3 top-3 w-12 rounded-full z-8
                        transition-all duration-200'/>
                     {/* box-shape */}
                     <svg

                           viewBox="0 0 349.32501220703125 225"
                           xmlns="http://www.w3.org/2000/svg"
                           preserveAspectRatio="none"
                           className='stroke-[#818597] h-full w-full absolute z-0 transition-all duration-200'
                           style={{ strokeOpacity: 0.3 }}        
                           >
                        <path
                           d="m 0 6
                           a 6 6 0 0 1 6 -6
                           h 250.32501220703125
                           a 16 16 0 0 1 11 5
                           1 77 77
                           a 16 16 0 0 1 5 11
                           v 126
                           a 6 6 0 0 1 -6 6
                           h -337.32501220703125
                           a 6 6 0 0 1 -6 -6
                           z"
                           fill="#fff"
                           ></path>
                     </svg>

                     {/* box-content */}
                     <div className='z-100 absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                        {/* text-part */}
                           <div>
                              <h3 className='font-mullish font-bold text-deepBlue leading-[1.2] text-[1.375rem]'>Payment Buttons</h3>
                              <p className='font-mullish text-grayText mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore deleniti maiores fugit.</p>
                           </div>

                           {/* Hyper-link */}
                           <div className='flex items-center cursor-pointer group'>
                              <a href="#"
                              className='font-mullish font-bold text-lightBlue group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                              <ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                           </div>

                     </div>
                  </div>
                  
                  {/* box-4 */}
                     <div className='w-full min-h-[15rem] relative cursor-pointer'>
                     <img src={Subscription} alt="#" 
                     className='bg-lightBlue absolute right-3 top-3 w-12 rounded-full z-8
                        transition-all duration-200'/>
                     {/* box-shape */}
                     <svg

                           viewBox="0 0 349.32501220703125 225"
                           xmlns="http://www.w3.org/2000/svg"
                           preserveAspectRatio="none"
                           className='stroke-[#818597] h-full w-full absolute z-0 transition-all duration-200'
                           style={{ strokeOpacity: 0.3 }}        
                           >
                        <path
                           d="m 0 6
                           a 6 6 0 0 1 6 -6
                           h 250.32501220703125
                           a 16 16 0 0 1 11 5
                           1 77 77
                           a 16 16 0 0 1 5 11
                           v 126
                           a 6 6 0 0 1 -6 6
                           h -337.32501220703125
                           a 6 6 0 0 1 -6 -6
                           z"
                           fill="#fff"
                           ></path>
                     </svg>

                     {/* box-content */}
                     <div className='z-100 absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                        {/* text-part */}
                           <div>
                              <h3 className='font-mullish font-bold text-deepBlue leading-[1.2] text-[1.375rem]'>Subscription</h3>
                              <p className='font-mullish text-grayText mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore deleniti maiores fugit.</p>
                           </div>

                           {/* Hyper-link */}
                           <div className='flex items-center cursor-pointer group'>
                              <a href="#"
                              className='font-mullish font-bold text-lightBlue group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                              <ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                           </div>

                     </div>
                  </div>
                     
                  {/* box-5 */}
                     <div className='w-full min-h-[15rem] relative cursor-pointer'>
                     <img src={route} alt="#" 
                     className='bg-lightBlue absolute right-3 top-3 w-12 rounded-full z-8
                        transition-all duration-200'/>
                     {/* box-shape */}
                     <svg

                           viewBox="0 0 349.32501220703125 225"
                           xmlns="http://www.w3.org/2000/svg"
                           preserveAspectRatio="none"
                           className='stroke-[#818597] h-full w-full absolute z-0 transition-all duration-200'
                           style={{ strokeOpacity: 0.3 }}        
                           >
                        <path
                           d="m 0 6
                           a 6 6 0 0 1 6 -6
                           h 250.32501220703125
                           a 16 16 0 0 1 11 5
                           1 77 77
                           a 16 16 0 0 1 5 11
                           v 126
                           a 6 6 0 0 1 -6 6
                           h -337.32501220703125
                           a 6 6 0 0 1 -6 -6
                           z"
                           fill="#fff"
                           ></path>
                     </svg>

                     {/* box-content */}
                     <div className='z-100 absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                        {/* text-part */}
                           <div>
                              <h3 className='font-mullish font-bold text-deepBlue leading-[1.2] text-[1.375rem]'>Route</h3>
                              <p className='font-mullish text-grayText mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore deleniti maiores fugit.</p>
                           </div>

                           {/* Hyper-link */}
                           <div className='flex items-center cursor-pointer group'>
                              <a href="#"
                              className='font-mullish font-bold text-lightBlue group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                              <ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                           </div>

                     </div>
                  </div>
                  
                  {/* box-6 */}
                     <div className='w-full min-h-[15rem] relative cursor-pointer'>
                     <img src={smartcollect} alt="#" 
                     className='bg-lightBlue absolute right-3 top-3 w-12 rounded-full z-8
                        transition-all duration-200'/>
                     {/* box-shape */}
                     <svg

                           viewBox="0 0 349.32501220703125 225"
                           xmlns="http://www.w3.org/2000/svg"
                           preserveAspectRatio="none"
                           className='stroke-[#818597] h-full w-full absolute z-0 transition-all duration-200'
                           style={{ strokeOpacity: 0.3 }}        
                           >
                        <path
                           d="m 0 6
                           a 6 6 0 0 1 6 -6
                           h 250.32501220703125
                           a 16 16 0 0 1 11 5
                           1 77 77
                           a 16 16 0 0 1 5 11
                           v 126
                           a 6 6 0 0 1 -6 6
                           h -337.32501220703125
                           a 6 6 0 0 1 -6 -6
                           z"
                           fill="#fff"
                           ></path>
                     </svg>

                     {/* box-content */}
                     <div className='z-100 absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                        {/* text-part */}
                           <div>
                              <h3 className='font-mullish font-bold text-deepBlue leading-[1.2] text-[1.375rem]'>Smart Collects</h3>
                              <p className='font-mullish text-grayText mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore deleniti maiores fugit.</p>
                           </div>

                           {/* Hyper-link */}
                           <div className='flex items-center cursor-pointer group'>
                              <a href="#"
                              className='font-mullish font-bold text-lightBlue group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                              <ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                           </div>

                     </div>
                  </div>
                  {/* Box-end */}
             </div>
       
         </div>
     
         </section>

         {/* feature-section-2 */}
         <section
          className='bg-[url(./assets/feature-section-2BG.svg)] bg-no-repeat bg-cover pt-[16rem] pb-[500px] mt-14'>
             <div
             className='w-10/12 max-w-[1080px] mx-auto relative pt-4'> 
                  
                  <h2 className='font-mullish text-center text-white text-2xl leading-[1.2] font-bold'>Explore Razorpay Buisness Banking</h2>
                  <div className='bg-greenLight w-6 h-1 mx-auto mt-4 mb-6'></div>


                  {/* main-feature-box */}
                  <div className='w-full min-h-[440px] flex flex-col relative'>
                       <img src={flame1} alt="" 
                        loading="lazy"
                        className=' absolute -top-[142px] -left-[140px] w-[200px]' />
                       <img src={flame2} alt="" 
                        loading="lazy"
                        className=' absolute top-[190px] -right-[180px] w-[180px] overflow-x-hidden'/>

                       {/* content box */}
                       <div className='w-full min-h-[520px] flex rounded-md relative p-10 py-12 border bg-#181C2E border-white'>
                   {/* leftcontent */}
                  <div className='flex flex-col justify-between  w-full'>
                   <h3 className='font-mullish text-[28px] leading-10 font-bold font- max-w-[500px] text-white'>Manage Your Companany finance with<img src={razorpayx}
                     loading="lazy" height="32px" width="168px" className=' inline' /> 
                     <span className='text-white'>Buisness Banking</span></h3>

                   <ul className=' space-y-2'>

                    <li className=' font-mullish flex items-center space-x-2 text-white' > 
                      <FaCheck className="text-green-500" size={24} />
                       <span>100+ Payment Methods</span>
                    </li>

                    <li className=' font-mullish flex items-center space-x-2 text-white'>
                       <FaCheck className="text-green-500" size={24} />
                       <span>Industry Leading Success Rate</span>
                    </li>

                    <li  className=' font-mullish flex items-center space-x-2 text-white'>
                       <FaCheck className="text-green-500" size={24} />
                       <span>Superior Checkout Experience</span>
                    </li>

                    <li className=' font-mullish flex items-center space-x-2 text-white'>
                       <FaCheck className="text-green-500" size={20} />
                       <span>Easy to Integrate</span>
                    </li>
                   
                   </ul>

                  {/* for button and hyperlink */}
                  <div className=' flex flex-col-reverse lg:flex-row space-x-4'>

                    <button
                        className=' bg-lightBlue w-full md:w-fit text-white py-3.5 px-[18px] rounded-md justify-start
                           font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200'>
                              Sign Up Now
                              {/* <div className=' bg-greenLight h-[60px] absolute z-10 w-12 skew-x-10'></div> */}
                     </button>
                    <div className='flex items-center cursor-pointer group'>
                       <a href="#" 
                       className='font-mullish font-bold text-lightBlue500 group-hover:text-gray-50
                         transition-all duration-200'
                         >Know More</a>
                        <ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                    </div>

                  </div>

                </div>
                {/* Background-Image */}
                  <img src={paymentsuit} alt="" 
                  className='hidden md:block md:max-w-[400px] lg:max-w-[600px] absolute right-0 bottom-0'/>
                       </div>

                       {/* card-box */}
                       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 my-14'>
                           {/* box1 */}
                              <div className='w-full min-h-[15rem] relative cursor-pointer'>
                                    <img src={currenticon} alt="#" 
                                    className='bg-lightBlue absolute right-3 top-3 w-12 rounded-full z-[80] transition-all duration-200'/>
                                    {/* box-shape */}
                                    <svg

                                          viewBox="0 0 349.32501220703125 225"
                                          xmlns="http://www.w3.org/2000/svg"
                                          preserveAspectRatio="none"
                                          className='stroke-[#767a8d] h-full w-full absolute z-6 featureCardSVG transition-all duration-200'
                                          style={{ strokeOpacity: 0.3 }}        
                                          >
                                       <path
                                          d="m 0 6
                                          a 6 6 0 0 1 6 -6
                                          h 250.32501220703125
                                          a 16 16 0 0 1 11 5
                                          1 77 77
                                          a 16 16 0 0 1 5 11
                                          v 126
                                          a 6 6 0 0 1 -6 6
                                          h -337.32501220703125
                                          a 6 6 0 0 1 -6 -6
                                          z"
                                          fill="#fff"
                                          ></path>
                                    </svg>

                                    {/* box-content */}
                                    <div className='z-100 absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                                       {/* text-part */}
                                          <div>
                                             <h3 className=' text-white font-mullish font-extrabold text-deepBlue leading-[1.2] text-[1.375rem]'>Current Account</h3>
                                             <p className='font-mullish text-grayText mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore deleniti maiores fugit.</p>
                                          </div>

                                          {/* Hyper-link */}
                                          <div className='flex items-center cursor-pointer group'>
                                             <a href="#"
                                             className='font-mullish font-bold text-lightBlue group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                                             <ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                                          </div>

                                    </div>
                               </div>
                             
                           {/* box2 */}
                              <div className='w-full min-h-[15rem] relative cursor-pointer'>
                                    <img src={currenticon} alt="#" 
                                    className='bg-lightBlue absolute right-3 top-3 w-12 rounded-full z-[80] transition-all duration-200'/>
                                    {/* box-shape */}
                                    <svg

                                          viewBox="0 0 349.32501220703125 225"
                                          xmlns="http://www.w3.org/2000/svg"
                                          preserveAspectRatio="none"
                                          className='stroke-[#0f30c3] h-full w-full absolute z-6 transition-all duration-200'
                                          style={{ strokeOpacity: 0.3 }}        
                                          >
                                       <path
                                          d="m 0 6
                                          a 6 6 0 0 1 6 -6
                                          h 250.32501220703125
                                          a 16 16 0 0 1 11 5
                                          1 77 77
                                          a 16 16 0 0 1 5 11
                                          v 126
                                          a 6 6 0 0 1 -6 6
                                          h -337.32501220703125
                                          a 6 6 0 0 1 -6 -6
                                          z"
                                          fill="#fff"
                                          ></path>
                                    </svg>

                                    {/* box-content */}
                                    <div className='z-100 absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                                       {/* text-part */}
                                          <div>
                                             <h3 className=' text-white font-mullish font-extrabold text-deepBlue leading-[1.2] text-[1.375rem]'>Current Account</h3>
                                             <p className='font-mullish text-grayText mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore deleniti maiores fugit.</p>
                                          </div>

                                          {/* Hyper-link */}
                                          <div className='flex items-center cursor-pointer group'>
                                             <a href="#"
                                             className='font-mullish font-bold text-lightBlue group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                                             <ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                                          </div>

                                    </div>
                               </div>
                           {/* box3 */}
                              <div className='w-full min-h-[15rem] relative cursor-pointer'>
                                    <img src={currenticon} alt="#" 
                                    className='bg-lightBlue absolute right-3 top-3 w-12 rounded-full z-[80] transition-all duration-200'/>
                                    {/* box-shape */}
                                    <svg

                                          viewBox="0 0 349.32501220703125 225"
                                          xmlns="http://www.w3.org/2000/svg"
                                          preserveAspectRatio="none"
                                          className='stroke-[#0f30c3] h-full w-full absolute z-6 transition-all duration-200'
                                          style={{ strokeOpacity: 0.3 }}        
                                          >
                                       <path
                                          d="m 0 6
                                          a 6 6 0 0 1 6 -6
                                          h 250.32501220703125
                                          a 16 16 0 0 1 11 5
                                          1 77 77
                                          a 16 16 0 0 1 5 11
                                          v 126
                                          a 6 6 0 0 1 -6 6
                                          h -337.32501220703125
                                          a 6 6 0 0 1 -6 -6
                                          z"
                                          fill="#fff"
                                          ></path>
                                    </svg>

                                    {/* box-content */}
                                    <div className='z-100 absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8'>
                                       {/* text-part */}
                                          <div>
                                             <h3 className=' text-white font-mullish font-extrabold text-deepBlue leading-[1.2] text-[1.375rem]'>Current Account</h3>
                                             <p className='font-mullish text-grayText mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempore deleniti maiores fugit.</p>
                                          </div>

                                          {/* Hyper-link */}
                                          <div className='flex items-center cursor-pointer group'>
                                             <a href="#"
                                             className='font-mullish font-bold text-lightBlue group-hover:text-grayBlue transition-all duration-200'>Know More</a>
                                             <ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                                          </div>

                                    </div>
                               </div>



                       </div>

                       {/* demo -box  */}
                       <div className='w-full hidden md:flex md:block md:flex-col lg:flex lg:block lg:flex-row items-center justify-around border border-slate-700 mb-24 gap-y-6 relative rounded-md p-8'>

                          <p className='font-mullish text-white text-xl '>Check Out the live demo to learn how RazorpayX works.
                              <span>No sign-up required</span>
                          </p>

                          <button className='relative bg-lightBlue flex items-center justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200'>Check out the demo
                           <div class='w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center'>

                              <svg
                                 viewBox="0 0 24 24"
                                 focusable="false"
                                 class="w-[20px] h-[20px] -skew-x-[20deg] "
                                  >
                                 <path fill="currentColor"
                                 d="M12 4l-1.41 1.41L16.17 11H4v2h12.171-5>58 5.59L12 2018-8z"
                                 ></path>
                              </svg>
                           </div>
                          </button>
                       </div>

                     

                       
                  </div>
             </div>
         </section>

          {/* new-feature */}
          <section className='bg-white relative'>
              <div className=' relative w-11/12 max-w-[1080px] mx-auto pt-4'>
                  <img src={fsectiondotted1} alt=""
                  className='absolute w-[233px] left-[300px] -top-[6rem] -z-[10]' />
                  <img src={fsectiondotted1} alt=""
                  className='absolute w-[233px] left-[3.5rem] -top-[6rem] -z-[10]' />

                  <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:gridcol gap-y-10 gap-x-4 relative z-[10]'>
                       {/* item-1 */}
                       <div className='relative flex items-center flex-col'>
                           <h2 className='text-deepBlue font-mullish font-extrabold text-4xl leading-14'>New in the Razorpay
                               <span className='text-lightBlue500'>Rzorpay <br />

                               </span>Product Suite
                           </h2>
                       </div>
                       {/* Card-1 */}
                       <div className="p-10 bg-[url('/src/assets/instant-settlement-bg.svg')] w-full max-h-[300px] cursor-pointer
                       bg-no-repeat hover:scale-105 transition-all duration-200 
                       hover:bg-[url('/src/assets/instant-settlement-bghover.svg')] ">
                           <img src={razorxicon} alt=""
                           className='w-10 h-10 '/>
                           <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Card</h3>
                           <p cla>Simplify your recurring, international
                              and team expenses with savings on
                              every spend. Save upto 10 lacs
                              every month.</p>
                           <div className='flex my-1'>
                                <a href="#" 
                                 className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200'
                                 >Know More</a><ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                           </div>
                       </div>
                       {/* Card-2 */}
                       <div className="p-10 bg-[url('/src/assets/instant-settlement-bg.svg')] w-full max-h-[300px] cursor-pointer
                       bg-no-repeat hover:scale-105 transition-all duration-200 
                       hover:bg-[url('/src/assets/instant-settlement-bghover.svg')] ">
                           <img src={razorxicon} alt=""
                           className='w-10 h-10 '/>
                           <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Card</h3>
                           <p cla>Simplify your recurring, international
                              and team expenses with savings on
                              every spend. Save upto 10 lacs
                              every month.</p>
                           <div className='flex my-1'>
                                <a href="#" 
                                 className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200'
                                 >Know More</a><ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                           </div>
                       </div>
                       {/* Card-3 */}
                       <div className="p-10 bg-[url('/src/assets/instant-settlement-bg.svg')] w-full max-h-[300px] cursor-pointer
                       bg-no-repeat hover:scale-105 transition-all duration-200 
                       hover:bg-[url('/src/assets/instant-settlement-bghover.svg')] ">
                           <img src={razorxicon} alt=""
                           className='w-10 h-10 '/>
                           <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Card</h3>
                           <p cla>Simplify your recurring, international
                              and team expenses with savings on
                              every spend. Save upto 10 lacs
                              every month.</p>
                           <div className='flex my-1'>
                                <a href="#" 
                                 className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200'
                                 >Know More</a><ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                           </div>
                       </div>
                       {/* Card-4 */}
                       <div className="p-10 bg-[url('/src/assets/instant-settlement-bg.svg')] w-full max-h-[300px] cursor-pointer
                       bg-no-repeat hover:scale-105 transition-all duration-200 
                       hover:bg-[url('/src/assets/instant-settlement-bghover.svg')] ">
                           <img src={razorxicon} alt=""
                           className='w-10 h-10 '/>
                           <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Card</h3>
                           <p cla>Simplify your recurring, international
                              and team expenses with savings on
                              every spend. Save upto 10 lacs
                              every month.</p>
                           <div className='flex my-1'>
                                <a href="#" 
                                 className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200'
                                 >Know More</a><ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                           </div>
                       </div>
                       {/* Card-5 */}
                       <div className="p-10 bg-[url('/src/assets/instant-settlement-bg.svg')] w-full max-h-[300px] cursor-pointer
                       bg-no-repeat hover:scale-105 transition-all duration-200 
                       hover:bg-[url('/src/assets/instant-settlement-bghover.svg')] ">
                           <img src={razorxicon} alt=""
                           className='w-10 h-10 '/>
                           <h3 className='font-mullish text-lg font-bold pt-4'>Corporate Card</h3>
                           <p cla>Simplify your recurring, international
                              and team expenses with savings on
                              every spend. Save upto 10 lacs
                              every month.</p>
                           <div className='flex my-1'>
                                <a href="#" 
                                 className='font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200'
                                 >Know More</a><ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200' />
                           </div>
                       </div>
                  </div>
              </div>
          </section>

          {/* featuresection-2 */}
          <section className="w-full bg-[url('/src/assets/core-features-sectionBg.svg')] bg-no-repeat bg-cover mt-14 flex flex-col relative justify-center items-center">
              <div className=' text-white w-10/12 flex flex-col justify-center items-center  gap-y-7 p-35'>
                   <h2 className='font-mullish text-2xl font-bold'>Feature</h2>
                   <div className=' h-1 w-5 bg-greenLight'></div>
                   <p className='max-w-[600px] text-center'>Empower your business with all the right tools to accept
                      online payments and provide the best customer experience</p>
                   <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7'>
                        {/* card-1 */}
                        <div className='p-1 flex flex-col mr-3'>
                             <img src={instantactivation} alt="" 
                              className='h-10 w-10 flex mb-7'/>
                             <h3 className='font-mullish font-bold text-white mb-3 '>Instant activation</h3>
                             <p className='text-white text-start text-[14px]'>With plugins for all major
                                platforms and languages,
                                integrate and go live with
                                Razorpay in less than an hour.
                                </p>
                        </div>
                        {/* card-2 */}
                        <div className='p-1 flex flex-col mr-3'>
                             <img src={instantactivation} alt="" 
                              className='h-10 w-10 flex mb-7'/>
                             <h3 className='font-mullish font-bold text-white mb-3 '>Easy Ingtegration</h3>
                             <p className='text-white text-start text-[14px]'>With plugins for all major
                                platforms and languages,
                                integrate and go live with
                                Razorpay in less than an hour.
                                </p>
                        </div>
                        {/* card-3 */}
                        <div className='p-1 flex flex-col mr-3'>
                             <img src={instantactivation} alt="" 
                              className='h-10 w-10 flex mb-7'/>
                             <h3 className='font-mullish font-bold text-white mb-3 '>Api Driven</h3>
                             <p className='text-white text-start text-[14px]'>With plugins for all major
                                platforms and languages,
                                integrate and go live with
                                Razorpay in less than an hour.
                                </p>
                        </div>
                        {/* card-4 */}
                        <div className='p-1 flex flex-col mr-3'>
                             <img src={instantactivation} alt="" 
                              className='h-10 w-10 flex mb-7'/>
                             <h3 className='font-mullish font-bold text-white mb-3 '>100+ payment</h3>
                             <p className='text-white text-start text-[14px]'>With plugins for all major
                                platforms and languages,
                                integrate and go live with
                                Razorpay in less than an hour.
                                </p>
                        </div>
                        {/* card-5 */}
                        <div className='p-1 flex flex-col mr-3'>
                             <img src={instantactivation} alt="" 
                              className='h-10 w-10 flex mb-7'/>
                             <h3 className='font-mullish font-bold text-white mb-3 '>Simple Pricing</h3>
                             <p className='text-white text-start text-[14px]'>With plugins for all major
                                platforms and languages,
                                integrate and go live with
                                Razorpay in less than an hour.
                                </p>
                        </div>
                        {/* card-6 */}
                        <div className='p-1 flex flex-col mr-3'>
                             <img src={instantactivation} alt="" 
                              className='h-10 w-10 flex mb-7'/>
                             <h3 className='font-mullish font-bold text-white mb-3 '>Best in Industory support</h3>
                             <p className='text-white text-start text-[14px]'>With plugins for all major
                                platforms and languages,
                                integrate and go live with
                                Razorpay in less than an hour.
                                </p>
                        </div>
                        {/* card-7 */}
                        <div className='p-1 flex flex-col mr-3'>
                             <img src={instantactivation} alt="" 
                              className='h-10 w-10 flex mb-7'/>
                             <h3 className='font-mullish font-bold text-white mb-3 '>Dashbord Reporting</h3>
                             <p className='text-white text-start text-[14px]'>With plugins for all major
                                platforms and languages,
                                integrate and go live with
                                Razorpay in less than an hour.
                                </p>
                        </div>
                        {/* card-8 */}
                        <div className='p-1 flex flex-col mr-3'>
                             <img src={instantactivation} alt="" 
                              className='h-10 w-10 flex mb-7'/>
                             <h3 className='font-mullish font-bold text-white mb-3 '>Secure</h3>
                             <p className='text-white text-start text-[14px]'>With plugins for all major
                                platforms and languages,
                                integrate and go live with
                                Razorpay in less than an hour.
                                </p>
                        </div>
                   </div>
              </div>
          </section>


          {/* Join-razor-pay-section */}
          <section className='bg-[#f5f8fe relative pt-40 pb-12 -mt-[200px] -z-50'>
              <div className='w-9/12 max-w-[1080] mx-auto relative flex flex-col md:flex-row  mt-10'>
                   {/* left-part */}
                  <div className='flex flex-col justify-center w-full md:max-w-[calc(100%-500px)]'>
                        <h3 className='font-mullish font-bold text-2xl text-deepBlue'>Join the 50,00,000+ buisnesses using the razorpay</h3>
                        <div className='h-1 w-5 bg-greenLight  my-4 mb-10'></div>
                        <p className='font-mullish opacity-80'> 
                           We make it easier for you to focus on building great products while we work
                           on simplifying your payments. Become one of us by joining thousands of our
                           happy users and simplify the online payment experience for your customers.
                        </p>
                        <p className='font-mullish mt-6 opacity-80'>
                           Focus on your business while we handle the complexities of payments for you.
                        </p>
                        
                  </div>
                  {/* right-part */}
                     <style>
                           {`
                           @keyframes slideup {
                              0% {
                                 top: 0;
                              }
                              100% {
                                 top: -50%;
                              }
                           }

                           .slide-up {
                              animation: slideup 10s linear infinite;
                              position: absolute;
                           }
                           `}
                        </style>
                        <div
                        style={{
                           background: "linear-gradient(180deg, #f4f8ff, #fff0)"
                        }}
                        className="absolute w-full h-[150px] top-0 z-40 "
                        ></div>
                        <div
                         style={{
                           background: "linear-gradient(0deg, #f4f8ff, #fff0)"
                          }}
                         className="absolute w-full h-[150px] bottom-0 z-40 mx-auto"
                         ></div>


                        <div className='h-[500px] w-[500px] relative overflow-hidden'>
                           <img 
                              src={comanies} 
                              alt="" 
                              className='h-auto object-cover slide-up'
                           />
                        </div>
 
              </div>
          </section>

          {/* Testimonial-section */}

          <section className='relative'>
               <div className='w-10/12 max-w-[1300px] mx-auto relative py-20'>
                    <img src={fsectiondotted1} alt=""
                     className='absolute w-[200px[ top[8rem] left-8 -z-10'/>
                    <h2 className='font-mullish font-extrabold text-2xl text-deepBlueHead text-center'>An Experience <br/>People Love to Talk About</h2>
                    <div className='bg-greenLight w-6 h-1 mx-auto my-5'></div>
                    {/* left-button */}
                    <button className='w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute left-0 top-1/2
                      justify-center items-center'>
                       <div className='w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center 
                        mix-blend-multiply'>
                          <ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'
                           class="rotate-180" />
                       </div>
                    </button>
                    {/* right-button */}
                    <button className='w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute right-0 top-1/2
                      justify-center items-center'>
                       <div className='w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center 
                        mix-blend-multiply'>
                          <ChevronRight className='w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200'
                            />
                       </div>
                    </button>
                  
                    {/* main-content */}
                    <div className='flex flex-col xl:flex-row max-w-[960px] items-center mx-auto my-20 space-x-40'>
                        {/* left-content */}
                        <img src={testimoniauncle} alt="" 
                         height="320px"
                         width="320px"
                         class="rounded-xl"/>
                        {/* right-content */}
                        <div className='max-w-[400px]'>
                              <img src={quotes} alt=""
                               width="35px"
                               height="40px"
                               className='-mb-2'/>
                              <p className='font-mullish text-3xl font-extralight'> Readymade closed walllet solution For Quick refunds</p>
                              <a href="#" className='text-grayText italic underline'>Learn More</a>
                              <h3 className='font-mullish font-extrabold text-2xl'>Lorem Ipsum</h3>
                              <p className='font-mullish font-medium'>CEO ,XYZ Engineering Company</p>
                              <img src={fakecompanylogo}
                               loading="lazy"
                               width="80px"
                               height="40px"/>
                        </div>
                    </div>
                    {/* 6-dotted */}
                    <div className='flex flex-row mx-auto space-x-2 justify-center'>
                        {/* dot-1 */}
                        <div className='h-[10px] w-[10px] bg-gray-300 rounded-full'></div>
                        <div className='h-[10px] w-[10px] bg-lightBlue rounded-full'></div>
                        <div className='h-[10px] w-[10px] bg-gray-300 rounded-full'></div>
                        <div className='h-[10px] w-[10px] bg-gray-300 rounded-full'></div>
                        <div className='h-[10px] w-[10px] bg-gray-300 rounded-full'></div>
                        <div className='h-[10px] w-[10px] bg-gray-300 rounded-full'></div>
                    </div>
               </div>
          </section>

          {/* CTA-section */}

          <section className=" bg-[url('src/assets/CTABg.svg')] w-full h-[510px] bg-no-repeat bg-cover relative"
            style={{  backgroundSize: "100% 100%",}}>
               {/* main-content-box */}
               <div className='w-11/12 max-w-[1080px] relative flex flex-row mx-auto justify-between space-x-20 '>
                     {/* left-part */}
                     <div className='mt-26 flex flex-col gap-y-6 max-w-[600px]'>
                          <h2 className='font-mullish font-bold text-2xl text-white'>Supercharge your buisness with Razorpay</h2>
                          <div className='h-1 w-6 bg-greenLight'></div>
                          <p className='font-medium text-white'>Sign up now to experience the future of payments and offer <br />
                            your customers the best checkout experience.
                           </p>

                          <ul className='flex flex-row flex-wrap gap-1 spacey-2 text-white'>
                               {/* 1-list */}
                               <li className='font-mullish text-white flex flex-row'>
                                   <FaCheck className="text-green-500" size={24} />
                                   <span>Quick Onboarding</span>
                               </li>
                               <li className='font-mullish text-white flex flex-row'>
                                   <FaCheck className="text-green-500" size={24} />
                                   <span>Acess to entire product suite</span>
                               </li>
                               <li className='font-mullish text-white flex flex-row'>
                                   <FaCheck className="text-green-500" size={24} />
                                   <span>Api access</span>
                               </li>
                               <li className='font-mullish text-white flex flex-row my-3'>
                                   <FaCheck className="text-green-500" size={24} />
                                   <span>24*7 Support</span>
                               </li>
                          </ul>

                          <button className=' w-[140px] font-mullish text-sm font-bold bg-white text-LightBlue300 border flex
                            rounded-sm items-center hover:text-LightBlue500 transition-all duration-200 py-3 px-4'>Sign up</button>
                     </div>
                      {/* right-part */}
                     <img src={ctaimage} alt="" className='hidden lg:block' />

               </div>
          </section>





    </div>
  )
}

export default App


