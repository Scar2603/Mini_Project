import React from "react";
import Nav from "../Nav";
import HSBCQuiz from "./hsbcQuiz";

const HQuizPage = () => {
  return (
    <div className=" bg-yello h-screen" >
      <Nav />
    <div className=" mt-28" >
      
      <HSBCQuiz />
    </div>
    
    </div>
  );
};

export default HQuizPage;
