import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBehance } from "react-icons/fa";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/dina-iyanuloluwa-anuoluwapo/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/iyanuloluwa-Miracle?tab=repositories",
    },
    {
      id: 3,
      child: (
        <>
          Behance <FaBehance size={30} />
        </>
      ),
      href: "https://www.behance.net/dinaiyanu",
    },
    {
      id: 4,
      child: (
        <>
          Twitter <FiTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/Dina_iyanex",
    },
   
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;