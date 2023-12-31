import React from "react";
import bannerImg from "../../../assets/shafayet.jpg";

import { Link } from "react-router-dom";
import SocialIcons from "./Social-Links/SocialIcons";

const Banner = () => {
  return (
    <div className="hero relative w-full h-auto bg-[rgb(17,17,34)]  px-5 md:px-8 lg:px-20">
      <div className="hero-items w-full flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8  items-center justify-center">
        <div className="hero-image w-full">
          <picture>
            <img
              src={bannerImg}
              alt="Image Of Shafayet"
              className="w-full rounded-lg"
            />
          </picture>
        </div>
        <div className="hero-texts w-full flex flex-col gap-5 md:gap-6 lg:gap-8 text-slate-300">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-serif">
            Hello, I am Mohammad Shafayet Hossain
          </h1>
          <p className="text-xl md:text-2xl lg:text-2xl font-sans">
            I am an Eramsus Mundus Master’s graduate possessing high enthusiasm
            in renewable energy with strong background in modern power systems,
            power electronics, design and optimization of microgrids, energy
            storage and global energy market modelling.
          </p>
          <div className="resume-and-contact flex flex-col lg:flex-row gap-4">
            <Link
              to="https://drive.google.com/file/d/1JJlc6Btxrhn-WiQkim2jVOK6T8jmw0SB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn  btn-outline  text-slate-300 hover:bg-[#F8B90C]">
                View Resume
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn  btn-outline  text-slate-300 hover:bg-[#F8B90C]">
                Contact Now
              </button>
            </Link>
          </div>
          {/* social links */}
          <div className="social-links absolute bottom-0 right-2">
            <SocialIcons></SocialIcons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
