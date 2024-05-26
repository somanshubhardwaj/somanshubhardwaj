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
  return (
    <div>
      <span className="titleblock ">Projects</span>
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
