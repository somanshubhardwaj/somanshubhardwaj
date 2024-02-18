"use client";
import React,{useRef} from "react";
import "./styles/portfolio.css";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Portfolio = () => {
  const text = useRef(null);
  useGSAP(
    () => {
      const el = text.current;
      gsap.fromTo(
        el,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: text }
  );
  return (
    <div className="mx-6 my-11">
      <div className="heading " ref={text}>
        <h1 className="text-5xl font-semibold my-2">Portfolio</h1>
      </div>
      <div className="portfolio flex flex-wrap justify-around my-9">
        <div className="portfolio-item">
          <img src="/pro1.jpg" alt="portfolio" />
          <h1>Study Hub Connect</h1>
        </div>
        <div className="portfolio-item">
          <img src="/news.jpg" alt="portfolio" />
          <h1>News App</h1>
        </div>
        <div className="portfolio-item">
          <img src="/studyhubscreenshot.jpg" alt="portfolio" />
          <h1>My Blog</h1>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
