import React from "react";
import Nav from "../Nav";
import TQuiz from "./TQuiz";

const TQuizPage = () => {
  return (
    <div className=" bg-yello h-screen" >
        <Nav />
    <div className=" mt-28" >
      <TQuiz /> 
    </div>
    
    </div>
  );
};

export default TQuizPage;
