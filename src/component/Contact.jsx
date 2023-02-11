import React from "react";

const Contact=()=>{
    return(
        <div
        name="contact"
        className="w-full bg-gradient-to-b from-black to-gray-800   p-4 text-white"
        // style="padding-top: 11vw;"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8 text-white">
            <p className="text-4xl text-white font-bold inline border-b-4
                border-gray-500">
              Contact
            </p>
            <p className="py-6">Submit the form below to get in touch with me</p>
          </div>
  
          <div className=" flex justify-center items-center">
            <form
              action="https://getform.io/f/47010b9d-b141-4e9c-9178-e3fefcc60c20"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>
  
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let's talk
              </button>
            </form>
          </div>
        <footer className="flex flex-col p-4 justify-center m-auto" > <small className="text-lg text-white">&copy; Copyright 2023, Irfan shaikh</small> </footer> 
        </div>
      </div>
  
    )
};
export default Contact