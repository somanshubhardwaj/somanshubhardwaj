import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="text-white  ">
        <Navbar />
        <div className="gap-2 flex justify-center items-center flex-col min-h-[80vh]">
          <span className="font-semibold  text-xl">Hey , I'm</span>
          <h1 className="text-4xl font-bold">Somanshu Bhardwaj</h1>
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
const About = () => {
  return (
    <div>
      <div className="aboutme  flex justify-center items-center min-h-[80vh]">
        <div className="aboutbox w-1/2 p-6">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg my-6 text-justify">
            I am a undergrad at NIT Hamirpur. I am a full stack developer and
            love to work on new technologies and develop web applications.
          </p>
          <a href="#" className="socialbtn">
            Github
          </a>
          <a href="#" className="socialbtn">
            X
          </a>
          <a href="#" className="socialbtn">
            Instagram
          </a>
          <a href="#" className="socialbtn">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};
const Skills = () => {
  const skills = [
    { name: "React" },
    { name: "Node" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "TailwindCSS" },
    { name: "NextJS" },
    { name: "C" },
    { name: "Python" },
    { name: "Javascript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Github" },
    { name: "Django" },
    { name: "Vercel" },
    { name: "Firebase" },
  ];
  return (
    <>
      <span className="titleblock ">Skills</span>
      <div className="my-6 p-6">
        <div className="flex gap-6 flex-wrap">
          {skills.map((skill, index) => (
            <div key={index} className="skillbox p-1 px-2 font-bold text-xl">
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const Projects = () => {
  const Projects = [
    {
      name: "Threads Clone",
      desc: "A clone of threads app",
      link: "https://threads-clone.vercel.app/",
      status: "Not Deployed",
      tech: ["React", "TailwindCSS", "MongoDB", "NextJS", "NextAuth"],
      stage: "Under Development",
      github: "",
      image: "",
    },
    {
      name: "Portfolio",
      desc: "My Portfolio",
      link: "https://somanshu.vercel.app/",
      status: "Deployed",
      tech: ["React", "TailwindCSS", "NextJS"],
      stage: "Completed",
      github: "",
      image: "",
    },
    {
      name: "StudyHub",
      desc: "A platform for students to share notes",
      link: "",
      status: " Deployed",
      tech: ["React", "TailwindCSS"],
      stage: "In Progress",
      github: "",
      image: "",
    },
    {
      name: "Vector",
      desc: "A vector graphics editor",
      link: "",
      status: "Not Deployed",
      tech: ["Python"],
      stage: "Completed",
      github: "",
      image: "",
    },
    {
      name: "Progression",
      desc: "A platform for students to track their progress",
      link: "",
      status: "Not Deployed",
      tech: ["Python"],
      stage: "completed",
      github: "",
      image: "",
    },
    {
      name: "Photography",
      desc: "A photography website",
      link: "",
      status: "Deployed",
      tech: ["React", "TailwindCSS"],
      stage: "In Progress",
      github: "",
      image: "",
    },
    {
      name: "Jujutsu Kaisen",
      desc: "A website for Jujutsu Kaisen",
      link: "",
      status: "Deployed",
      tech: [],
      stage: "completed",
      github: "",
      image: "",
    },
    {
      name: "Contact us",
      desc: "A contact us page",
      link: "",
      status: "Deployed",
      tech: ["React", "TailwindCSS", "Firebase"],
      stage: "Completed",
      github: "",
      image: "",
    },
    {
      name: "Next Notion Blog",
      desc: "A blog using NextJS and Notion API",
      link: "",
      status: "Deployed",
      tech: ["NextJS", "TailwindCSS", "Notion API"],
      stage: "Completed",
      github: "",
      image: "",
    },
    {
      name: "RealWeatherApp",
      desc: "A weather app using OpenWeatherMap API",
      link: "",
      status: "Deployed",
      tech: ["OpenWeatherMap API"],
      stage: "Completed",
      github: "",
      image: "",
    },
    {
      name: "News App",
      desc: "A news app using NewsAPI",
      link: "",
      status: "Deployed",
      tech: ["NextJS", "TailwindCSS", "NewsAPI"],
      stage: "Completed",
      github: "",
      image: "",
    },
    {
      name: "Assistant",
      desc: "A voice assistant using Alan AI",
      link: "",
      status: "Deployed",
      tech: ["Python"],
      stage: "Completed",
      github: "",
      image: "",
    },
  ];
  return (
    <div>
      <span className="titleblock ">Projects</span>
      <div className="">
        <div className="projects flex flex-wrap justify-between">
          {Projects.map((project, index) => (
            <div key={index} className="project p-6 my-6 w-max">
              <div className="flex  flex-wrap">
                {project.tech.map((tech, index) => (
                  <div key={index} className="  font-bold  socialbtn">
                    {tech}
                  </div>
                ))}
              </div>
              <h1 className="text-2xl font-bold">{project.name}</h1>
              <p className="text-lg my-2 text-justify">{project.desc}</p>

              {project.stage === "Completed" ? (
                <div className="flex  justify-stretch">
                  <a href={project.link} className="linkbtn">
                    Visit
                  </a>

                  <a href={project.github} className="linkbtn">
                    Github
                  </a>
                </div>
              ) : (
                <div>
                  <a href={project.github} className="linkbtn">
                    Github
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <span className="titleblock ">Contact</span>
    </div>
  );
};
