import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/heroImage.png";
const Home = () => {
  return (
    <section name="home" className="flex h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <h2>
            I'm a Software Engineer

          </h2>
          <p>
            I have 2 years of experience building and designing software.
            Currently, I love to work on web application using technologies like React, Node, Figma

          </p>
          <div>
            <button>
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight />

              </span>
              
            </button>
          </div>

          <div>
            <img src={HeroImage} alt="HeroImage"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
