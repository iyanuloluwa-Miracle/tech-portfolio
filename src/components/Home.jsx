import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/heroImage.png";
const Home = () => {
  return (
    <section>
      <div>
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
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
