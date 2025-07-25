import React from 'react';
import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import image1 from '../assets/images/logo.png'




function Footer() {
  return (
    <div className='max-w-full bg-white  p-5'>
      <div className='flex flex-col gap-3 w-4/5 mx-auto'>

           <div className='flex gap-30 '>
                <div>
                    <img src={image1} alt='logo' width={70} />
                </div>

                <div className='flex gap-25'>
                     <div className='flex flex-col'>

                      <div className='mb-5'>
                           <h2 className='font-semibold text-2xl text-[#192a56]'>Product</h2>
                      </div>
                       
                       <div className='leading-loose'>
                            <p>Application Performance Monitoring</p>
                            <p>Server Monitoring</p>
                            <p>Cloud Monitoring</p>
                            <p>Database Monitoring</p>
                            <p>Networking Monitoring</p>
                            <p>Webhook Testing</p>
                            <p>Push Notification</p>
                            <p>Uptime Monitoring</p>
                            <p>Website Testing</p>
                            <p>Integrations</p>
                       </div>
                      
                     </div>
                     <div className='flex flex-col'>
                       <div className='mb-5'>
                           <h2 className='font-semibold text-2xl text-[#192a56]'>Marketing</h2>
                       </div>
                          <div className='leading-loose'>
                               <p>Product Managers</p>
                                <p>Software Engineers</p>
                                <p>Cyber Security Analyst</p>
                                <p>Small Business Owners</p>
                                <p>Social Media Manager</p>
                                <p>DevOps</p>
                                <p>Data Administrator</p>
                                <p>Landing Page</p>
                          </div>
                        
                     </div>
                     <div className='flex flex-col'>
                        <div className='mb-5'>
                            <h2 className='font-semibold text-2xl text-[#192a56]'>Support</h2>
                        </div> 

                        <div className='leading-loose'>
                            <p>Help Center</p>
                            <p>FAQ</p>
                            <p>How Telex Works</p>
                            <p>Pricing Experience</p>
                            <p>About Us</p>
                            <p>Contact Us</p>
                        </div>
                        
                     </div>

                </div>
           </div>

           <div className='flex justify-between'>
                 <div className='flex gap-2'>

                      <div className='w-10 h-10 flex items-center justify-center bg-black text-white rounded-md hover:bg-[#0c2461] transition duration-300'>
                            <FaInstagram size={15} />
                      </div>

                      <div className='w-10 h-10 flex items-center justify-center bg-black text-white rounded-md hover:bg-[#0c2461] transition duration-300'>
                            <FaXTwitter size={15} />
                      </div>
                            
                      <div className='w-10 h-10 flex items-center justify-center bg-black text-white rounded-md hover:bg-[#0c2461] transition duration-300'>
                            <FaFacebookF size={15} />  
                      </div>   

                      <div className='w-10 h-10 flex items-center justify-center bg-black text-white rounded-md hover:bg-[#0c2461] transition duration-300'>
                            <FaLinkedinIn size={15} />
                      </div> 
                           
                      
                 </div>

                 <div className='flex gap-2 items-center'>
                     <p>Privacy Policy Terms Of Use</p>
                     <p>©2024 Telex. All Rights Reserved</p>
                 </div>
           </div>
      </div>
    </div>
  );
}

export default Footer;
