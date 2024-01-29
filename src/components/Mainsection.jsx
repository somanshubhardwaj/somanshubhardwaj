import React from "react";
import Image from 'next/image'
const Mainsection = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt=""
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="/pic.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-3xl font-bold mb-2">Hi, I'm</h2>
              <h1 className="text-5xl font-bold mb-4 text-white">
                Somanshu Bhardwaj
              </h1>
              <p className="text-lg text-gray-300">
                I am currently pursuing B.Tech. I am a passionate learner. I
                have a keen interest in web development and I am always ready to
                learn new technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
         
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/studyhubscreenshot.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/studyhubscreenshot.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/pro1.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/studyhubscreenshot.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/studyhubscreenshot.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/studyhubscreenshot.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/pro1.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              StudyHubConnects 
            </h1>
            <p className="leading-relaxed mb-8">
            

            </p>
            <div className="flex justify-center">
             <a href="https://studyhubconnect.vercel.app/" target="_blank"> <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Visit
              </button></a>
              
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/studyhubscreenshot.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              StudyHubConnects Blogs
            </h1>
            <p className="leading-relaxed mb-8">
            Study Hub connects Blogs is a platform where you can read blogs related to various topics. 

            </p>
            <div className="flex justify-center">
             <a href="https://blog-somanshubh.vercel.app/" target="_blank"> <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Visit
              </button></a>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mainsection;
