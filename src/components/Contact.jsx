"use client";
import React, { useState } from "react";
import "./styles/main.css";
import { db } from "@/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [sendername, setSendname] = useState("");
  const [senderemail, setSenderemail] = useState("");
  const [message, setMessage] = useState("");
  const addMessage = async () => {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name: sendername,
        email: senderemail,
        message: message,
      });
      setMessage("");
      setSendname("");
      setSenderemail("");
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error(error);
    }
  };
  const onKeyUpHandler = () => {
    if (event.key === "Enter" && sendername.length > 0) {
      addMessage();
    }
  };
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="md:w-1/2 flex justify-center items-center h-full w-full"></div>
        <div className="md:w-1/2 flex justify-center items-center w-full">
          <div className="contactbox">
            <h1 className="text-3xl font-semibold">Contact Me</h1>
            <form className="flex flex-col my-3">
              <input
                type="text"
                placeholder="Name"
                className="input"
                value={sendername}
                onChange={(e) => setSendname(e.target.value)}
                onKeyUp={onKeyUpHandler}
              />
              <input
                type="email"
                placeholder="Email"
                className="input my-6"
                value={senderemail}
                onChange={(e) => setSenderemail(e.target.value)}
                onKeyUp={onKeyUpHandler}
              />
              <textarea
                placeholder="Message"
                className="input"
                style={{ height: "100px" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={onKeyUpHandler}
              ></textarea>
              <button className="contactbtn " onClick={addMessage}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
