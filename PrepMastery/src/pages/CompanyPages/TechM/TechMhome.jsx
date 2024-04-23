import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "../../Error";
import React, { useEffect, useState } from "react";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import techmImage from "/TechMlogo.png"; // Adjust the path to your image

const ServiceItem = ({ children }) => {
  const childString = String(children); // Convert children to string
  const hasPadding = !childString.startsWith("60%"); // Check if the content starts with "60%"
  return (
    <li
      style={{
        position: "relative",
        paddingLeft: hasPadding ? "30px" : 0,
        marginBottom: "5px",
      }}
    >
      {!childString.startsWith("TCS Ninja") &&
        !childString.startsWith("TCS Digital") &&
        !childString.startsWith("60%") && (
          <span
            style={{ position: "absolute", left: 0, top: 0, color: "black" }}
          >
            ●
          </span>
        )}
      {children}
    </li>
  );
};

function TechMhome() {
  // Define styles directly in the component
  const styles = {
    container: {
      display: "flex",
      backgroundImage: 'url("/Hero_bg.png")',
      justifyContent: "center",
    },
    contentContainer: {
      display: "flex",
      maxWidth: "1000px",
      borderRadius: "10px",
      marginRight: "20px",
      marginLeft: "-280px",
    },
    heading: {
      textAlign: "left",
      fontSize: "55px",
      fontWeight: "bold",
    },
    paragraph: {
      marginBottom: "15px",
      marginTop: "20px",
    },
    link: {
      color: "blue",
    },
    button: {
      marginTop: "20px",
    },
    ul: {
      listStyleType: "none",
      paddingLeft: 0,
    },
    imageContainer: {
      marginRight: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-350px", // Adjust the margin-top to move the image up
    },
    image: {
      position: "fixed",
      marginLeft: "350px",
      height: "auto",
      width: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Adding shadow effect
    },
  };

  return (
    <>
      <Nav />
      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <div style={{ padding: "20px" }}>
            <h1 style={styles.heading}>Tech Mahindra</h1>
            <h3 style={{ fontWeight: "bold", fontSize: "24px" }}>
              About company
            </h3>{" "}
            {/* Updated heading */}
            <p style={{ marginTop: "10px" }}>
              Tech Mahindra is an Indian multinational information technology
              services and consulting company. It is part of the Mahindra Group,
              and is headquartered in Pune, with its registered office in
              Mumbai.
            </p>
            <p style={{ marginTop: "10px" }}>
              Tech Mahindra has over 146,000 employees across 90 countries. It
              was ranked #5 in India's IT firms and overall No. 47 on Fortune
              India 500 list for 2019.
            </p>
            <p style={{ marginTop: "10px" }}>
              Tech Mahindra isn't just about fixing technical snags; they
              specialize in crafting innovative solutions to propel companies
              through digital transformation.
            </p>
            <p style={{ marginTop: "10px" }}>
              Their expertise spans consulting services, outsourcing IT
              operations, and optimizing business processes to achieve maximum
              efficiency. This comprehensive approach caters to a diverse range
              of industries, from the backbone of communication networks to the
              smooth functioning of finance and manufacturing sectors.
            </p>
            <h3
              style={{ fontWeight: "bold", fontSize: "24px", marginTop: "5px" }}
            >
              Year of establishment
            </h3>
            <p style={{ marginTop: "10px" }}>
              Tech Mahindra, established in 1986, boasts a rich history in the
              IT industry. Originally formed as a joint venture between Mahindra
              & Mahindra and British Telecom, it began as Mahindra British
              Telecom (MBT). Over time, Tech Mahindra emerged as an independent
              entity, solidifying its position as a leader in IT solutions.
            </p>
            <h3
              style={{ fontWeight: "bold", fontSize: "24px", marginTop: "5px" }}
            >
              Founder
            </h3>
            <p style={{ marginTop: "10px" }}>
              While Tech Mahindra itself wasn't founded by a single individual,
              its roots trace back to the vision of Anand Mahindra, the chairman
              of the Mahindra Group. Established in 1945, the Mahindra Group
              holds a diversified portfolio, and in 1986, Anand Mahindra saw an
              opportunity in the burgeoning IT sector. Through a joint venture
              with British Telecom, he played a pivotal role in creating
              Mahindra British Telecom, the precursor to Tech Mahindra.
            </p>
            <h3
              style={{ fontWeight: "bold", fontSize: "24px", marginTop: "5px" }}
            >
              It provides various services
            </h3>
            <ul style={styles.ul}>
              <ServiceItem>Cloud Services</ServiceItem>
              <ServiceItem>FLEX Digital Workplace Services</ServiceItem>
              <ServiceItem>Enterprise Network Service</ServiceItem>
              <ServiceItem>Data Center Services</ServiceItem>
              <ServiceItem>Enterprise Security Services</ServiceItem>
            </ul>
            <p style={{ marginTop: "10px" }}>
              For more information, visit the{" "}
              <a
                href="https://www.techmahindra.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                Tech Mahindra official website
              </a>
              .
            </p>
            <a href="TechMprocess">
              <button className="btn btn-secondary" style={styles.button}>
                Recruitment Process
              </button>
            </a>
          </div>
        </div>

        <div style={{ ...styles.imageContainer, marginLeft: "40px" }}>
          <img
            src={techmImage}
            alt="Tech Mahindra Image"
            style={styles.image}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TechMhome;
