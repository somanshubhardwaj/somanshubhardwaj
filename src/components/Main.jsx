"use client";
import React, { useRef } from "react";
import "./styles/main.css";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "./Contact";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const Main = () => {
  const text = useRef(null);
  const scrollani = useRef(null);
  useGSAP(
    () => {
      gsap.from(".textani", { y: 100, opacity: 0, duration: 1, stagger: 0.5 });
    },
    { scope: text }
  );
  useGSAP(
    () => {
      const el = scrollani.current;
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: scrollani }
  );
  return (
    <>
      <div className=" min-h-screen flex flex-wrap " ref={text}>
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="    justify-center flex flex-col  h-min w-min">
            <h1 className="md:text-3xl text-3xl font-semibold textani">
              Hi!, My Name is
            </h1>
            <p className="md:text-6xl text-4xl font-semibold textani text-[#aeff84]">
              Somanshu
              <br />
              Bhardwaj
            </p>
            <div className="contactbtn textani">Contact Me</div>
          </div>
        </div>
        <div className="w-full md:w-1/2 "></div>
      </div>
      <Social />
      <About />

      <Contact />
    </>
  );
};

export default Main;
const About = () => {
  return (
    <>
      <div className="flex items-center justify-center my-16">
        <div className="flex flex-wrap justify-around items-center md:w-1/2 w-full">
          <Navbtn url="/skills" name="Skills" />
          <Navbtn url="/portfolio" name="Portfolio" />
          <Navbtn url="/aboutme" name="About Me" />
          <div className="navigation">Blog</div>
        </div>
      </div>
      <div className="min-h-[20vh] flex items-center justify-center flex-col">
        <h1 className="text-3xl font-extrabold ">I'm a</h1>

        <h1 className="text-4xl font-bold textanimation"></h1>
      </div>
    </>
  );
};
const Navbtn = ({ url, name }) => {
  return (
    <>
      <Link href={url}>
        <div className="navigation">{name}</div>
      </Link>
    </>
  );
};
const Social = () => {
  return (
    <>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start social mb-5 mr-5 glass">
        <a className=" " href="https://github.com/somanshubhardwaj" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
        </a>

        <a
          className=" ml-3"
          href="https://twitter.com/somanshubha"
          target="_blank"
        >
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a
          className="ml-3 "
          href="https://www.instagram.com/bhardwaj.somanshu/"
          target="_blank"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a
          className="ml-3 "
          href="https://www.linkedin.com/in/somanshubhardwaj"
          target="_blank"
        >
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </>
  );
};
const Aboutme = () => {
  const heading = useRef(null);
  const para = useRef(null);

  useGSAP(
    () => {
      const el = heading.current;
      gsap.fromTo(
        el,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            scrub: true,
          },
        }
      );
    },
    { scope: heading }
  );
  useGSAP(
    () => {
      const e2 = para.current;
      gsap.fromTo(
        e2,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: e2,
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: para }
  );

  return (
    <>
      <div className="w-full  flex justify-end my-16 px-2 overflow-x-hidden h-min">
        <div className="md:w-3/4 w-full aboutbox overflow-hidden">
          <h1 className="text-5xl font-semibold " ref={heading}>
            About Me
          </h1>
          <p
            className="md:text-2xl mt-6 flex justify-between text-justify"
            ref={para}
          >
            I am a full stack web developer. I have a passion for web
            development and love to create for web and mobile devices. I am
            always eager to learn new technologies and improve my skills. I am a
            fast learner and a team player. I am always ready to take on new
            challenges and work with new people.
          </p>
        </div>
      </div>
    </>
  );
};
export { Aboutme, Contact, Social };
