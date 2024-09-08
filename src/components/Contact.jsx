import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import Swal from 'sweetalert2';


const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "cc20f7b7-21c9-4a66-a1a0-8afd976148f5");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {

            Swal.fire({
                title: "Done!",
                text: "Your Message is sent successfully!",
                icon: "success"
              });
              
        }
      };
    


    return (
        <div id="contact" className="w-full text-black dark:text-gray-200 px-1 py-10 "
        >
            <h4 className="text-center mb-2 text-lg">Connect with me</h4>
            <h2 className="text-center text-5xl">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
                I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
            </p>
            <form onSubmit={onSubmit}  className="max-w-2xl mx-auto">
                <div className="grid grid-cols-2 gap-6 mt-10 mb-6">
                    <input
                        type="text"
                        placeholder="Your name"
                        name='name'
                        required
                        className="flex-1 p-3 outline-none border border-gray-400 dark:border-gray-600 text-white dark:text-black rounded-md bg-black dark:bg-white"
                    />
                    <input
                        type="text"
                        placeholder="Your email"
                        name='email'
                        required
                        className="flex-1 p-3 outline-none border border-gray-400 dark:border-gray-600 text-white dark:text-black rounded-md bg-black dark:bg-white"
                    />
                </div>
                <textarea rows="6" placeholder='Enter your message' name='message' 
                required
                className=' w-full p-4 outline-none border border-gray-400 dark:border-gray-600  text-white dark:text-black rounded-md bg-black dark:bg-white mb-6' ></textarea>
          
          <button type="submit" className='px-4 md:px-8 py-3 text-lg w-max flex items-center justify-between gap-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white rounded-full hover:shadow-[0_0_15px_rgba(128,90,213,0.8)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-shadow duration-100 mx-auto'>
  Submit <FaArrowTrendUp className='w-5' />
</button>


            </form>
        </div>
    );
};

export default Contact;
