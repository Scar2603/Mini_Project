import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import hsbcImage from '/HSBClogo.png';
import techmImage from '/TechMlogo.png';
import tcsImage from '/TCSlogo.png';

const Companies = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-9">Companies</h1>
      <h3 className="text-2xl font-bold text-center ">
        Choose your company and get ready for the test
      </h3>
      <div id="Companies" className=" py-8 flex justify-center">
        <div className="carousel rounded-box p-8">
          <div className="carousel-item p-4 hover:scale-110 transition-all duration-500 cursor-pointer">
            <Card
              data={{
                com_link:"TCShome",
                image:
                  tcsImage,
                title: "TCS",
                description:
                  " Learn about the TCS Ninja and Digital Hiring process and get ready for the test.",
              }}
            />
          </div>
          <div className="carousel-item p-4 hover:scale-110 transition-all duration-500 cursor-pointer ">
            <Card
              data={{
                com_link:"TechMhome",
                image:
                techmImage,
                title: "Tech Mahindra",
                description:
                  " Learn about the Tech Mahindra hiring process and get ready for the test",
              }}
            />
          </div>
          
          <div className="carousel-item p-4 hover:scale-110 transition-all duration-500 cursor-pointer ">
            <Card
              data={{
                com_link:"HSBChome",
                image:
                  hsbcImage,
                title: "HSBC",
                description:
                  " Learn about the HSBC hiring process and get ready for the test.",
              }}
            />
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Companies;
