"use client";
import { useState, useEffect } from "react";

import { supabase } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
const Cards = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      let { data: project, error } = await supabase.from("project").select("*");
      setProjects(project);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 py-14 px-3">
      {/* <div className="flex flex-row gap-2 font-light">
        <h1 className="text-white">ALL</h1>
        <h1 className="text-white">WEB DEVELOPMENT</h1>
        <h1 className="text-white">UI DESIGN</h1>
        <h1 className="text-white">GRAPHIC DESIGN</h1>
      </div> */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 place-content-around container ">
        {projects.map((project, index) => {
          return (
            <>
              <div
                key={index}
                className="bg-slate-700  rounded rounded-lg text-white"
              >
                <Image
                  src={project.project_img}
                  alt="..."
                  width={550}
                  height={350}
                  className="rounded-t-xl w-full max-h-48 object-cover"
                />
                <div className=" flex flex-col gap-2 p-2">
                  <p className="font-semibold">{project.project_title}</p>

                  <p className="font-light ">{project.project_description}</p>
                </div>
                <div className="flex  gap-2 justify-end mr-2 mb-2">
                  {project.project_demo && (
                    <Link
                      href={project.project_demo}
                      target="blank"
                      className="p-2 rounded-md border-2 border-sky-600 hover:bg-sky-600 transition-all"
                    >
                      Live Demo
                    </Link>
                  )}

                  <Link
                    href={`${project.project_url}`}
                    target="blank"
                    className="p-2 rounded-md border-2 border-emerald-600 hover:bg-emerald-600 transition-all "
                  >
                    Source
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
