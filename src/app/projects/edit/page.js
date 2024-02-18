"use client";
import React, { useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const Page = () => {
  const [proname, setProname] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const addTodo = async () => {
    try {
      const docRef = await addDoc(collection(db, "projects"), {
        name: proname,
        url: url,
        image: image,
        desc: desc,
      });
      setDesc("");
      setProname("");
      setUrl("");
      setImage("");
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error(error);
    }
  };
  const onKeyUpHandler = () => {
    if (event.key === "Enter" && todoInput.length > 0) {
      addTodo();
    }
  };
  return (
    <div>
      <h1>Edit Project</h1>
      <div className="flex items-center gap-2 mt-10 flex-col">
        <input
          placeholder={`Project Name`}
          type="text"
          className="font-semibold placeholder:text-gray-500 border-[2px] border-black h-[60px] grow shadow-sm rounded-md px-4 focus-visible:outline-main text-lg transition-all duration-300 text-center md:text-left"
          autoFocus
          onChange={(e) => setProname(e.target.value)}
          value={proname}
          onKeyUp={onKeyUpHandler}
        />
        <input
          placeholder={`Description`}
          type="text"
          className="font-semibold placeholder:text-gray-500 border-[2px] border-black h-[60px] grow shadow-sm rounded-md px-4 focus-visible:outline-main text-lg transition-all duration-300 text-center md:text-left"
          autoFocus
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          onKeyUp={onKeyUpHandler}
        />
        <input
          placeholder={`URL`}
          type="text"
          className="font-semibold placeholder:text-gray-500 border-[2px] border-black h-[60px] grow shadow-sm rounded-md px-4 focus-visible:outline-main text-lg transition-all duration-300 text-center md:text-left"
          autoFocus
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          onKeyUp={onKeyUpHandler}
        />
        <input
          placeholder={`Image URL`}
          type="text"
          className="font-semibold placeholder:text-gray-500 border-[2px] border-black h-[60px] grow shadow-sm rounded-md px-4 focus-visible:outline-main text-lg transition-all duration-300 text-center md:text-left"
          autoFocus
          onChange={(e) => setImage(e.target.value)}
          value={image}
          onKeyUp={onKeyUpHandler}
        />
        <button
          className="w-[60px] h-[60px] rounded-md bg-main flex justify-center items-center cursor-pointer transition-all duration-300 hover:bg-black/[0.8]"
          onClick={addTodo}
        >
          btn
        </button>
      </div>
    </div>
  );
};

export default Page;
