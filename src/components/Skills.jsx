import React, { useRef } from "react";
import "./styles/skills.css";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const text = useRef(null);
  const items = useRef(null);
  useGSAP(
    () => {
      const el = text.current;
      gsap.fromTo(
        el,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          delay: 0.5,
          stagger: 0.5,
          scrollTrigger: {
            trigger: el,
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: text }
  );
  useGSAP(
    () => {
      const el1 = items.current;
      gsap.fromTo(
        ".skill-item",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: el1,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: items }
  );
  return (
    <div className="mx-6 min-h-screen flex items-center flex-col justify-center">
      <div className="heading  " ref={text}>
        <h1 className="text-5xl font-semibold my-2">Skills</h1>
      </div>
      <div
        className="skills flex flex-wrap justify-around my-9 items-center"
        ref={items}
      >
        <div className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
            alt="html"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://camo.githubusercontent.com/c96cb99431280ee1fdce3fe6b5338c5aca7bcaf94331b7426803ac9b426f6cef/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f646a616e676f2e737667"
            alt="js"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://camo.githubusercontent.com/a682e207ce9939518c8617c6340b1bf8b1769b30a9f1b45d27d67fd64af1d0f2/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f666c7574746572696f2f666c7574746572696f2d69636f6e2e737667"
            alt="react"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://camo.githubusercontent.com/fcafa5ebc1f5f789ae7d012a3ecd8fe7bda49516591caf7c37698f764165d880/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"
            alt="node"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="mongo"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="mongo"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="mongo"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="mongo"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="mongo"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://camo.githubusercontent.com/0568e2de313626b2bd9b96f326941b012d45e9a4db1a23aa78bd8036207e57f8/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667"
            alt="mongo"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
            alt="mongo"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://camo.githubusercontent.com/fcafa5ebc1f5f789ae7d012a3ecd8fe7bda49516591caf7c37698f764165d880/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"
            alt="mongo"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
