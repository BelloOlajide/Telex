import React from 'react';
import Button from './Button';
import image3 from '../assets/images/Group 1321314620.jpg'
import image4 from '../assets/images/image1.png'
import image5 from '../assets/images/image2.png'
import image6 from '../assets/images/image3.png'
import image7 from '../assets/images/conference.jpg'
import image8 from '../assets/images/laptop.png'
import image9 from '../assets/images/iphone.png'
import { MdKeyboardArrowUp } from 'react-icons/md';
import image10 from '../assets/images/bg.png'




function MainContent() {
  return (
    <div className='mt-5 bg-white p-1 sm:p-5'>
         <div className='flex flex-col items-center gap-5'>

          <div className='text-center'>
              <h1 className='text-2xl md:text-3xl font-semibold text-black'>Meet Ani, Your</h1>
              <h1 className='text-2xl md:text-3xl font-semibold text-[#273c75]'>AI-Meeting Summarizer</h1>
          </div>

           <div className='text-center'>
              <p className='text-2xl'> Effortless Meeting Summaries Powered by AI.</p>
              <p className='w-[670px] text-2xl'>Turn long meetings into concise summaries with action items, 
                  in real-time</p>
           </div>   
              
            <div className='flex gap-3'>
                 <Button text = "Activate Ani Now" bg = "#0c2461" color = "white"  />   
                 <Button text = "Book a Demo"  />
            </div>

         {/* section 2 */}

            <div className='w-full flex justify-center mt-10 bg-white'>

                        <img src={image3} alt='image' /> 
                
            </div>

            {/* section 3 */}

            <div className='text-center flex flex-col items-center mt-10 gap-10'>

                     <h2 className='text-3xl'>Works well with your favorite tools</h2>

                     <div className='flex gap-20'>

                            <div className='flex gap-2 text-center items-center'>
                              <p className='text-gray-600 font-semibold'>Zoom</p>
                              <img src={image5} alt='Zoom' width={50} height={50}/>
                            </div>

                            <div className='flex gap-2 text-center items-center'>
                               <p className='text-gray-600 font-semibold'>Microsoft Team</p>
                              <img src={image6} alt='microsoft' width={50} height={50}/>
                            </div>

                            <div className='flex gap-2 text-center items-center'>
                              <p className='text-gray-600 font-semibold'>Google Meet</p>
                              <img src={image4} alt='google' width={50} height={50} />
                            </div>
                     </div>
            </div>

            {/* section 4 */}
                
             <div className='flex justify-between w-4/5 mx-auto mt-20 mb-20'>
                   <div className='flex flex-col gap-5 justify-center'>
                       
                       <div className='flex flex-col gap-5 items-start'>
                         <h2 className='text-3xl font-semibold'>Unlock Insights with <span className='text-[#273c75]'> Ani</span></h2>

                          <p className='w-[400px] text-xl text-gray-600'>Capture every key detail, decision and action item-without lifting a finger. Our AI-powered meeting summarizer transforms discussion into clear, concise insights, so you can focus on what matters most.
                          </p>
                       </div>
                        
                        <div>
                            <Button
                              text = "Activate Ani Now"
                              bg = "#0c2461"
                              color = "white"
                              className={`w-40`}
                            />
                      </div>
                   </div>





                  <div>
                     <img src={image7} alt='meeting' width={500} className='rounded-lg shadow-xl'/>
                  </div>

             </div> 




             {/* section 5 */}
          
          <div className='w-4/5 mx-auto'>
                    <div className='flex flex-col gap-5 text-center'>
                            <h2 className='text-3xl font-semibold'>Key Features of of Ani</h2>

                            <div>
                               <p className='text-gray-600 font-semibold'>Ani provides core features designed to help your team collaborate smarter,</p>
                               <p className='text-gray-600 font-semibold'>work faster, and make meetings more effective by turning discussions into </p>
                               <p className='text-gray-600 font-semibold'>actionable insights</p>
                            </div>
                    </div>




                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 mb-20'>
                         <div className='flex flex-col gap-3 bg-[#fce1e5] rounded-lg p-5 shadow'>
                             <h3 className='font-semibold'>Meeting Transcription</h3>
                             <p className='w-full sm:w-[200px] text-gray-600'>Captures real-time meeting discussions</p>
                         </div>

                         <div className='flex flex-col gap-3 bg-[#eaeaf8] rounded-lg p-5 shadow'>
                             <h3 className='font-semibold'>Automated Summarization</h3>
                             <p className='w-[270px] text-gray-600'>Generate concise summaries with key points</p>
                         </div>

                         <div className='flex flex-col gap-3 bg-[#e8fae8] rounded-lg p-5 shadow'>
                             <h3 className='font-semibold'>Telex Integration</h3>
                             <p className='w-[270px] text-gray-600'>Sends summaries and item actions to designated channels</p>
                         </div>

                         <div className='flex flex-col gap-3 bg-[#ededf3] rounded-lg p-5 shadow'>
                             <h3 className='font-semibold'>AI Meeting Assistant</h3>
                             <p className='w-[250px] text-gray-600'>Provide insights and structured reports</p>
                         </div>

                         <div className='flex flex-col gap-3 bg-[#fce1e5] rounded-lg p-5 shadow'>
                             <h3 className='font-semibold'>Action Items Tracking</h3>
                             <p className='w-[250px] text-gray-600'>Detects and assign tasks from  discussions</p>
                         </div>

                         <div className='flex flex-col gap-3 bg-[#eaeaf8] rounded-lg p-5 shadow'>
                             <h3 className='font-semibold'>Multi-Platform Support</h3>
                             <p className='w-[270px] text-gray-600'>Works with large number of platforms like Zoom, Google Meet. etc</p>
                         </div>
                       
                  </div>
          </div>

          {/* section 6 */}

            <div className='w-4/5 mx-auto mb-40'>
                   <div className='relative mx-auto rounded-lg h-50 w-100 bg-[#eaeaf8]'>
                         <h2 className='text-[#3838b3] text-center text-2xl'>See Ani in Action</h2>
                       <img src={image8} className='absolute top-5'/>
                   </div>
            </div>

            {/* section 7 */}

            <div className='w-4/5 mx-auto'>
                  <div className='flex flex-col gap-3 text-center'>
                      <h1 className='text-3xl'>How It Works</h1>

                        <div className='grid grid-cols-3 gap-3'>
                            <div className='flex flex-col items-center rounded shadow p-5 gap-3'>

                                <div className='bg-[#272785] text-white w-10 rounded'>1</div>
                                <p className='w-[250px]'>Drop a meeting link on a channel 
                                   and Ani joins immediately
                                </p>

                            </div>

                            <div className='flex flex-col items-center rounded shadow p-5 gap-3'>

                                <div className='bg-[#272785] text-white w-10 rounded'>2</div>
                                <p className='w-[220px]'>Ani transcribes the meeting in
                                   real-time
                                </p>

                            </div>

                            <div className='flex flex-col items-center rounded shadow p-5 gap-3'>

                                <div className='bg-[#272785] text-white w-10 rounded'>3</div>
                                <p className='w-[260px]'>Ani drops a comprehensive 
                                    summary immediately meeting ends
                                </p>

                            </div>
                        </div>
                  </div>
            </div>



            {/* section 8 */}

            <div className='w-4/5 mx-auto mt-20'>
                   <div className='flex justify-between'>

                        
                            <img src={image9} alt='image' width={500}/>
                        
                        
                        <div className='flex flex-col'>
                             <div className='flex flex-col items-start mb-10 gap-3'>
                                <h2 className='text-2xl text-gray-700'>Get in Touch With Us</h2>
                                <p className='text-gray-600 w-[550px]'>Join our community of software engineers and stay updated on the latest in application performance monitoring metrics. Sign up for a free demo and exclusive insights.</p>
                             </div>
                              
                          
                              <form>
                              
                                  <div className='flex gap-3'>
                                     <div className='flex flex-col gap-2'>
                                        <label>First Name</label>
                                          <input type='text' value='' placeholder='First name...' className='p-3 rounded-lg shadow w-65' />
                                     </div>

                                   <div className='flex flex-col gap-2'>
                                       <label>Last Name</label>
                                       <input type='text' value='' placeholder='Last name...' className='p-3 rounded-lg shadow w-65' />
                                  </div>

                                </div>

                                      <div className='flex flex-col gap-2 mt-5'>
                                        <label>Profession</label>
                                        <input type='text' value='' placeholder='e.g Designer,Product Manager, Developer' className='p-3 rounded-lg shadow w-full' />
                                      </div>

                                      <div className='flex flex-col gap-2 mt-5'>
                                          <label>Email</label>
                                          <input type='email' value='' placeholder='write your email here' className='p-3 rounded-lg shadow w-full' />
                                      </div>

                                      <div className='flex flex-col gap-2 mt-5'>
                                          <label>Phone Number</label>
                                          <input type='text' value='' placeholder='write your phone number here' className='p-3 rounded-lg shadow w-full' />
                                      </div>
                               


                                      <button className='border rounded-lg border-[#0c2461] bg-[#0c2461] text-white font-semibold px-3 py-2 cursor-pointer hover:bg-black hover:text-white transition-all duration-500 mt-10 w-50' >Request A Demo </button>

                             </form>
                        

                             
                        </div>
                   </div>
            </div>


            {/* section 9 */}

            <div className='w-4/5 mx-auto mt-20'>
                    <div className='flex justify-between items-center'>

                        <div className='flex flex-col gap-3'>

                            <h2 className='text-3xl font-semibold w-[300px] text-gray-800'>Frequently Asked Questions</h2>

                            <p className='w-[320px] text-gray-700 font-semibold'>Got Questions? Find Answers to Commonly Asked Queries Here. If You Have More Questions, Feel Free to Reach Out to Us via Email.</p>
                             
                             <button className='border rounded-lg border-[#0c2461] bg-white text-[#0c2461] font-semibold px-3 py-2 cursor-pointer hover:bg-[#0c2461] hover:text-white transition-all duration-500 mt-5 w-50'>Contact Us</button>
                            
                        </div>

                        <div className='flex flex-col gap-5'>
                            <div>
                                <div className='flex justify-between'>
                                  <h3 className='text-2xl font-semibold text-gray-800'>What is Ruby?</h3>
                                  <MdKeyboardArrowUp />
                                </div>

                                <p className='border-b-1 w-[450px] text-gray-600 font-semibold'>Ruby is an AI-powered social media manager that automates content creation, scheduling, and engagement.</p>
                            </div>

                            <div>
                                <div className='flex justify-between'>
                                  <h3 className='text-2xl font-semibold text-gray-800'>What is Ruby?</h3>
                                  <MdKeyboardArrowUp />
                                </div>

                                <p className='border-b-1 w-[450px] text-gray-600 font-semibold'>Ruby is an AI-powered social media manager that automates content creation, scheduling, and engagement.</p>
                            </div>

                            <div>
                                <div className='flex justify-between'>
                                  <h3 className='text-2xl font-semibold text-gray-800'>What is Ruby?</h3>
                                  <MdKeyboardArrowUp />
                                </div>

                                <p className='border-b-1 w-[450px] text-gray-600 font-semibold'>Ruby is an AI-powered social media manager that automates content creation, scheduling, and engagement.</p>
                            </div>

                            <div>
                                <div className='flex justify-between'>
                                  <h3 className='text-2xl font-semibold text-gray-800'>What is Ruby?</h3>
                                  <MdKeyboardArrowUp />
                                </div>

                                <p className='border-b-1 w-[450px] text-gray-600 font-semibold'>Ruby is an AI-powered social media manager that automates content creation, scheduling, and engagement.</p>
                            </div>
                           

                        </div>
                    </div>
            </div>


            {/* section 10 */}

            <div className='flex flex-col gap-2 text-center justify-center items-center h-70 w-full bg-cover bg-center bg-no-repeat mt-20' style={{background: `url(${image10})`}}>
                        <div>
                            <h2 className='text-white text-3xl font-semibold mb-3'>Get Started Today!</h2>
                             <p className='text-white w-[470px]'>Activate Ani now to transcribe your meetings in real-time and get instant, AI-powered summaries—so you never miss a detail!</p>
                        </div>
                        
                        <button className='rounded-lg  bg-[#0c2461] text-white font-semibold px-3 py-2 cursor-pointer hover:bg-black hover:text-white transition-all duration-500 mt-10 w-50'>Activate Ani Now</button>

            </div>

         </div>
    </div>
  );
}

export default MainContent;
