import React from "react";
import Services from "./Services";

const About = () => {
  const skills = [
    { name: "UI & UX DESIGNING", image: "/src/assets/icons/ruler-pen.png" },
    { name: "WEB DEVELOPMENT", image: "/src/assets/icons/code.png" },
    { name: "MOBILE DEVELOPMENT", image: "/src/assets/icons/android.png" },
    {
      name: "WEB SCRAPING WITH PYTHON",
      image: "/src/assets/icons/python-svg.png",
    },
  ];
  return (
    <div className="md:px-10 px-4 sm:-mt-24 bg-[#045B62] m-4 p-6 rounded-2xl" id="about">
      <h1 className="text-white font-semibold text-3xl mt-5 text-center">About Me</h1>
        <p className="my-10 text-white md:w-2/3 leading-[2] border-2 p-4 rounded-3xl text-justify mx-auto">
            Hi, my name is Huzaifa Ameer, I'm a Fullstack web developer, UI designer,
            and Mobile developer. I have honed my skills in Web Development and have a
            core understanding of advanced UI design principles. Here are the major
            skills I have.
        </p>
      <div className="md:flex my-7 items-center">
        <div className="text-[#57B0B0] text-8xl font-bold">1+</div>
        <p className="text-white text-2xl md:ml-5">
          Years of experience. Specialised in building web apps, while ensuring a
          seamless web experience for end users.
        </p>
      </div>

      {/* skills */}
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-[#7F6B6A] hover:bg-[#01282B] hover:cursor-pointer flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* services section */}
      <Services/>
    </div>
  );
};

export default About;
