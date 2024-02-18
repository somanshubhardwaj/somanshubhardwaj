"use client";
import { db } from '@/firebase/firebase';
import Portfolio from '@/components/Portfolio'
import Template from '@/components/Template'
import React,{useState} from 'react'
import { collection, getDocs,query } from "firebase/firestore";
const Page = () => {
  const [projects, setProjects] = useState([]);
  const fetchTodos = async (uid) => {
    try {
      const q = query(collection(db, 'projects'));
      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setProjects(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchTodos();

  return (
    <div>
        <Template  />
        <Portfolio  />
    </div>
  )
}

export default Page