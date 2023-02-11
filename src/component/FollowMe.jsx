import React from "react";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
const FollowMe = () => {
  const links = [
    {
      id: 1,
      href: "",
      src: linkedin,
    },
    {
      id: 2,
      href: "",
      src: facebook,
    },
    {
      id: 3,
      href: "",
      src: twitter,
    },
    {
      id: 4,
      href: "",
      src: instagram,
    },
  ];
  return (
    <div
      name="followme"
      className="w-full bg-gradient-to-b from-black to-gray-800   p-4 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center h-full gap-9">
          <h1 className="text-4xl font-bold text-white m-auto">Irfan</h1>
          <p className="text-lg text-white m-auto">Follow me on social media</p>
          <div className="flex flex-row justify-center max-w-screen-lg gap-8 mx-auto h-full" >
          {links.map((id, href,src ) => (
            <div key={id} >
               <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center h-12 w-12 rounded-full bg-white hover:bg-gray-800"
              > 
                <img src={src} alt="Links" className="h-12 w-12 rounded-full" />
              </a>
            </div>
            ))}
            {/* <a href=''>
                    <img src={instagram}  />
                </a>
                <a href=''>
                    <img src=""  />
                </a>
                <a href=''>
                    <img src=""  />
                </a>
                <a href=''>
                    <img src=""  />
                </a> */}
          </div>
          {/* <footer > <small className="text-lg text-white m-auto">&copy; Copyright 2023, Irfan shaikh</small> </footer>  */}
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
