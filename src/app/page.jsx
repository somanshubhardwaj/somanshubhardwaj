import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faReact,
  faNodeJs,
  faPython,
  faGit,
  faDocker,
  faHtml5,
  faSquareJs,
  faXTwitter,
  faCss3,
  faNpm,
  faMarkdown,
} from "@fortawesome/free-brands-svg-icons";
import Fadeup from "@/animations/Fadeup";
import Textfade from "@/animations/Textfade";
import Socialicon from "@/animations/Socialicon";
export default function Home() {
  return (
    <>
      <div className="text-white md:px-28 bg-black">
        <Navbar />
        <div className=" min-h-screen">
          <div className=" md:flex min-h-[75vh]">
            <div className="min-h-[80vh] flex justify-between items-center">
              <div className="flex flex-col md:w-1/2 gap-2">
                <span className="">
                  <Textfade>Software Developer</Textfade>
                </span>
                <span className="font-bold text-6xl">
                  <Textfade>Hello I'm</Textfade>
                </span>
                <span className="font-bold text-6xl name">
                  <Textfade>Somanshu </Textfade>
                </span>
                <span className="">
                  <Textfade>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore accusantium deleniti maiores explicabo,
                    necessitatibus iure odit quaerat vitae, impedit quae nobis.
                    Voluptatibus, voluptate adipisci eius molestiae cupiditate
                    officiis quaerat harum.
                  </Textfade>
                </span>
                <div className="flex gap-6 items-center flex-col md:flex-row">
                  <Fadeup>
                    <a href="https://www.instagram.com/bhardwaj.somanshu/">
                    <button className="contact-btn">Contact Me</button></a>
                  </Fadeup>
                  <div className=" flex gap-3">
                    <Socialicon>
                      <a href="https://github.com/somanshubhardwaj" className="">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </a>
                    </Socialicon>
                    <Socialicon>
                      <a href="https://www.instagram.com/bhardwaj.somanshu/" className="">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a>
                    </Socialicon>
                    <Socialicon>
                      <a href="https://www.linkedin.com/in/somanshubhardwaj" className="">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      </a>
                    </Socialicon>
                    <Socialicon>
                      <a href="https://x.com/somanshubha" className="">
                        <FontAwesomeIcon icon={faXTwitter} size="2x" />
                      </a>
                    </Socialicon>
                  </div>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
          <div className="flex justify-between flex-col md:flex-row items-center">
            <div className="flex flex-row gap-2">
              <span className="font-extrabold text-5xl">450+</span>
              <span className="font-thin ">
                GitHub <br /> Contributions
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-extrabold text-5xl">200+</span>
              <span className="font-thin ">
                Github <br /> Commits
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-extrabold text-5xl">50+</span>
              <span className="font-thin ">
                GitHub <br /> Repo's
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-extrabold text-5xl">10+</span>
              <span className="font-thin ">
                Tech <br /> Skills
              </span>
            </div>
          </div>
        </div>
        <hr />
        <Skills />
        <hr />
        <Portfolio />
        <hr />
        <Footer />
      </div>
    </>
  );
}
function Skills() {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <span className="text-4xl font-extrabold text-center w-full py-10">
          Skills
        </span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 pb-10 mb-9">
        <Fadeup>
          <div>
            <FontAwesomeIcon icon={faReact} size="4x" />
          </div>
        </Fadeup>
        <Fadeup>
          <div>
            <FontAwesomeIcon icon={faNodeJs} size="4x" />
          </div>
        </Fadeup>
        <Fadeup>
          <div>
            <FontAwesomeIcon icon={faPython} size="4x" />
          </div>
        </Fadeup>
        <Fadeup>
          <div>
            <FontAwesomeIcon icon={faSquareJs} size="4x" />
          </div>
        </Fadeup>
        <Fadeup>
          <div>
            <FontAwesomeIcon icon={faHtml5} size="4x" />
          </div>
        </Fadeup>
        <Fadeup>
          <div>
            <FontAwesomeIcon icon={faCss3} size="4x" />
          </div>
        </Fadeup>
        <Fadeup>
          <div>
            <FontAwesomeIcon icon={faMarkdown} size="4x" />
          </div>
        </Fadeup>
        <Fadeup>
          <div>
            <FontAwesomeIcon icon={faNpm} size="4x" />
          </div>
        </Fadeup>
        <Fadeup>
          <div>
            <FontAwesomeIcon icon={faGit} size="4x" />
          </div>
        </Fadeup>
        <Fadeup>
          <div>
            <FontAwesomeIcon icon={faDocker} size="4x" />
          </div>
        </Fadeup>
      </div>
    </div>
  );
}

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Finacial Tracker",
      github: "https://github.com/somanshubhardwaj/finacialtracker",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis reiciendis illum culpa atque vero ut, obcaecati, tenetur unde nam alias quas, aut harum repellendus voluptatibus perferendis enim eius architecto.",
    },
    {
      id: 2,
      title: "EduVault",
      github: "https://github.com/somanshubhardwaj/EduVault",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis reiciendis illum culpa atque vero ut, obcaecati, tenetur unde nam alias quas, aut harum repellendus voluptatibus perferendis enim eius architecto.",
    },
    {
      id: 3,
      title: "NuxtProject",
      github: "https://github.com/somanshubhardwaj/nuxtproject",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis reiciendis illum culpa atque vero ut, obcaecati, tenetur unde nam alias quas, aut harum repellendus voluptatibus perferendis enim eius architecto.",
    },
    {
      id: 4,
      title: "Password Generator",
      github: "https://github.com/somanshubhardwaj/generatepassword",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis reiciendis illum culpa atque vero ut, obcaecati, tenetur unde nam alias quas, aut harum repellendus voluptatibus perferendis enim eius architecto.",
    },
    {
      id: 5,
      title: "News App",
      github: "https://github.com/somanshubhardwaj/newsapp",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis reiciendis illum culpa atque vero ut, obcaecati, tenetur unde nam alias quas, aut harum repellendus voluptatibus perferendis enim eius architecto.",
    },
    {
      id: 6,
      title: "Translator",
      github: "https://github.com/somanshubhardwaj/translator",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis reiciendis illum culpa atque vero ut, obcaecati, tenetur unde nam alias quas, aut harum repellendus voluptatibus perferendis enim eius architecto.",
    },
    {
      id: 7,
      title: "Contact us",
      github: "https://github.com/somanshubhardwaj/contactus",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officiis reiciendis illum culpa atque vero ut, obcaecati, tenetur unde nam alias quas, aut harum repellendus voluptatibus perferendis enim eius architecto.",
    }
  ];
  return (
    <div className="mb-6">
      <div className="flex justify-center items-center">
        <span className="text-4xl font-extrabold text-center w-full py-10">
          Projects
        </span>
      </div>
      <div className="flex flex-wrap gap-6 justify-between">
        {projects.map((project) => (
          <div className=" md:w-1/4 w-full border-2 border-white rounded-lg p-3" key={project.id}>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">{project.title}</span>
              <a href={project.github} className="">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
            <div className="text-justify">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
const Footer = () => {
  return(
    <div className="mt-6 flex justify-center items-center  pb-6">
      <span className="text-sm font-bold">
        Made by Somanshu Bhardwaj
      </span>

    </div>
  )}