"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Downloadbutton from "./Downloadbutton";

const index = () => {
  const links = [
    { icons: faGithub, source: "https://github.com/masulll" },
    { icons: faInstagram, source: "https://www.instagram.com/sultan_rayhan/" },
    { icons: faLinkedin, source: "https://www.linkedin.com/in/sultanryhn/" },
  ];

  const hardSkill = [
    {
      category: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "React",
        "Tailwind",
        "Bootstrap",
        "Next",
        "Figma",
        "Photoshop",
      ],
    },
    {
      category: "Backend",
      skills: [
        "NodeJS",
        "Express Js",
        "Hapi",
        "Supabase",
        "Firebase",
        "Prisma",
        "REST API",
        "Postman",
      ],
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Programming Language",
      skills: ["Javascript", "PHP"],
    },
    {
      category: "Versioning",
      skills: ["Git", "Github", "Gitlab"],
    },
  ];

  const softSkill = ["Scrum Method", "Adaptive Design", "Analytical Thinking"];

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-2 container  mx-auto text-white py-14 ">
      <div className="flex flex-col ">
        <h1 className=" text-2xl font-medium">LIL BIT DESCRIPTION</h1>
        <div className="flex flex-row gap-9 py-2">
          <article className=" ">
            <p className="text-wrap text-justify ">
              As a passionate developer,I have honed my skills through hands-on
              projects and coursework.In 2022, I joined to Full Stack Web at
              Binar Bootcamp that allow me to grow both personally and
              professionally. As I embark on my journey as a full-stack web
              developer, I am excited to contribute my expertise to innovative
              projects and continue learning in this dynamic field.
            </p>
          </article>
        </div>
        <h1 className=" text-2xl font-medium">PERSONAL INFORMATION</h1>
        <div className="flex flex-row gap-9 justify-between py-2">
          <h1>First Name: Sultan</h1>
          <h1>Last Name: Rayhan</h1>
        </div>
        <div className="flex flex-row gap-9 justify-between py-2">
          <h1>Age: 23</h1>
          <h1>Nationality: Indonesia</h1>
        </div>
        <div className="flex flex-row gap-9 justify-between py-2">
          <h1>Languages: Indonesia, English</h1>
          <h1>Address: Depok, West Java</h1>
        </div>
        <div className="flex flex-row gap-7 py-5 justify-end ">
          {links.map((value, index) => (
            <Link href={value.source} target="blank" className=" rounded-md ">
              <FontAwesomeIcon
                icon={value.icons}
                className="md:text-4xl text-xl hover:text-sky-400 "
                key={index}
              />
            </Link>
          ))}

          <Downloadbutton />
        </div>
      </div>
      <div className="flex flex-col ">
        <h1 className="text-2xl font-medium">MY SKILLS</h1>
        <h1 className="py-2">Frontend</h1>
        <div className="grid grid-cols-4 gap-3 ">
          {hardSkill
            .find((skill) => skill.category === "Frontend")
            .skills.map((value, index) => (
              <h1
                key={index}
                className="border-2 border-sky-400 hover:bg-sky-400 p-1 text-center rounded-full cursor-pointer md:text-md text-xs "
              >
                {value}
              </h1>
            ))}
        </div>
        <h1 className="py-2">Backend</h1>
        <div className="grid grid-cols-4 gap-3 ">
          {hardSkill
            .find((skill) => skill.category === "Backend")
            .skills.map((value, index) => (
              <h1
                key={index}
                className="border-2 border-sky-400 hover:bg-sky-400 p-1 text-center rounded-full cursor-pointer md:text-md text-xs "
              >
                {value}
              </h1>
            ))}
        </div>
        <h1 className="py-2 ">Programming Language</h1>
        <div className="grid grid-cols-4 gap-3 ">
          {hardSkill
            .find((skill) => skill.category === "Programming Language")
            .skills.map((value, index) => (
              <h1
                key={index}
                className="border-2 border-sky-400 hover:bg-sky-400 p-1 text-center rounded-full cursor-pointer md:text-md text-xs"
              >
                {value}
              </h1>
            ))}
        </div>
        <h1 className="py-2">Soft Skills</h1>
        <div className="grid grid-cols-4 gap-3">
          {softSkill.map((value, index) => (
            <h1
              key={index}
              className="border-2 border-sky-400 hover:bg-sky-400 p-1 text-center flex items-center justify-center rounded-full cursor-pointer md:text-md text-xs"
            >
              {value}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
