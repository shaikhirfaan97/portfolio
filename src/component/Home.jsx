import React from "react";
import HeroImage from "../assets/boy.png";
// import HeroImage from "../assets/home-right.png.webp";
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div
      name="home"
      className="  text-white  w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center  px-4 md:flex-row">
        <div className=" mt-28 flex flex-col justify-center">
          {/* <h2 className="text-4xl sm:text-left-7xl font-bold">Hello</h2> */}
          <h3 className="text-4xl sm:text-7xl font-bold">I am Irfan Shaikh</h3>
          <br />
          <h4 className="text-4xl sm:text-4xl font-bold">I'm a Full Stack Developer</h4>
          {/* <p className="text-gray-500 py-4 max-w-md">
            I have 1 Year of Experience of building and Designing Software.
            Currently , I love to Work on Web Application using technologies
            like React,Node.js,Javascript and Express
          </p> */}

          <div>
            <br />
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center
            rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>


        <div className="py-5">
            <img src={HeroImage}
             alt="profile" 
             className="rounded-4xl mx-auto w-80  md:w-full sm:w-auto "/>
        </div>
      </div>
    </div>
  );
};

export default Home;
