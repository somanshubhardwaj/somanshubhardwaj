import { Aboutme } from "@/components/Main";
import Template from "@/components/Template";
import React from "react";

const Page = () => {
  return (
    <div>
      <Template />
      <div className="min-h-screen flex items-center justify-center">
        <Aboutme />
      </div>
    </div>
  );
};

export default Page;
