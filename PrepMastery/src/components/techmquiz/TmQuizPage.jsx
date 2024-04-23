import React from "react";
import Nav from "../Nav";
import TechmQuiz from "./techmQuiz";

const TmQuizPage = () => {
  return (
    <div className=" bg-yello h-screen">
      <Nav />
      <div className=" mt-28">
        <TechmQuiz />
      </div>
    </div>
  );
};

export default TmQuizPage;
