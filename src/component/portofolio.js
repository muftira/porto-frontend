import axios from "axios";
import React, { useEffect, useState } from "react";
import Project from "./project";

function Portofolio() {
  const [projects, setProject] = useState();
  const [popUp, setPopUp] = useState();
  const [id, setId] = useState()
  const [title, setTitle] = useState()
  
  

  const data = [{
    id : 1,
    desc : '',
  },
  {
    id : 2,
    desc : ''
  },
  {
    id : 3,
    desc : ''
  },
  {
    id : 4,
    desc : ''
  }
]
  

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/projects?populate=*")
      .then((res) => setProject(res.data.data))
      .catch((error) => console.log("GAGAL GET", error));

  }, []);

  console.log("projects", projects);
  // console.log(project ? project[1].attributes.tech.data[0].attributes.formats.thumbnail.url : null, "Thumbnail" )

  return (
    <div>
      {/* <Project/> */}
        <div className="h-[calc(100vh-10rem)] w-screen bg-primary flex justify-between px-[60px] items-center">
          {projects
            ? projects.map((project) => (
                <div
                  key={project.id}
                  className="w-[310px] h-[469px] bg-secondary rounded-3xl shadow-2xl shadow-slate-700"
                >
                  <a href="">
                    <div className="w-[310px] h-[300px] bg-neutral-500 rounded-tr-3xl rounded-tl-3xl overflow-hidden">
                      <img
                        className="object-cover w-[310px] h-[300px] "
                        src={project.attributes.url_image1}
                        alt=""
                      />
                    </div>
                  </a>
                  <a href="">
                    <p className="w-[310px] h-[84px] text-white text-3xl flex justify-center items-center px-4">
                      {project.attributes.title}
                    </p>
                  </a>
                  <div className="w-[310px] h-[84px] flex flex-row flex-wrap p-3 justify-start space-x-2 space-y-1 items-center">
    
                  {project.attributes.tech.data.map((imageIcon, i) => {
                      return (
                        <img className="h-[30px]"
                        key={i}
                        src={`http://localhost:1337${imageIcon.attributes?.url}`}
                        alt=""
                      />
                        );
                    })}
                  </div>
                </div>
              ))
            : null}
      </div>
      
    </div>
  );
}

export default Portofolio;
