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
export default function Home() {
  return (
    <>
      <div className="text-white md:px-28 bg-black">
        <Navbar />
        <div className=" min-h-screen">
          <div className=" md:flex min-h-[75vh]">
            <div className="min-h-[80vh] flex justify-between items-center">
              <div className="flex flex-col md:w-1/2 gap-2">
                <span className="">Software Developer</span>
                <span className="font-bold text-6xl">Hello I'm</span>
                <span className="font-bold text-6xl name">Somanshu </span>
                <span className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore accusantium deleniti maiores explicabo, necessitatibus
                  iure odit quaerat vitae, impedit quae nobis. Voluptatibus,
                  voluptate adipisci eius molestiae cupiditate officiis quaerat
                  harum.
                </span>
                <div className="flex gap-6 items-center flex-col md:flex-row">
                  <button className="contact-btn">Contact Me</button>
                  <div className=" flex gap-3">
                    <a href="#" className="">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="#" className="">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="#" className="">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="#" className="">
                      <FontAwesomeIcon icon={faXTwitter} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
          <div className="flex justify-between flex-col md:flex-row items-center">
            <div className="flex flex-row gap-2">
              <span className="font-extrabold text-5xl">12</span>
              <span className="font-thin ">
                some <br /> text
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-extrabold text-5xl">12</span>
              <span className="font-thin ">
                some <br /> text
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-extrabold text-5xl">12</span>
              <span className="font-thin ">
                some <br /> text
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-extrabold text-5xl">12</span>
              <span className="font-thin ">
                some <br /> text
              </span>
            </div>
          </div>
        </div>
        <hr />
        <Skills />
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
      <div className="flex flex-wrap justify-center items-center gap-10 pb-10">
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
        </Fadeup><Fadeup>
          <div>
            <FontAwesomeIcon icon={faGit} size="4x" />
          </div>
        </Fadeup><Fadeup>
          <div>
            <FontAwesomeIcon icon={faDocker} size="4x" />
          </div>
        </Fadeup>
      </div>
    </div>
  );
}
