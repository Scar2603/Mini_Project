import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "../../Error";
import React, { useEffect, useState } from "react";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import hsbcImage from "/HSBClogo.png"; // Adjust the path to your image

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

function HSBChome() {
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
            <h1 style={styles.heading}>HSBC</h1>
            <p style={{ marginBottom: "10px" }}>
              Hongkong and Shanghai Banking Corporation Limited
            </p>
            <h3 style={{ fontWeight: "bold", fontSize: "24px" }}>
              About company
            </h3>{" "}
            {/* Updated heading */}
            <p style={{ marginTop: "10px" }}>
              The Hongkong and Shanghai Banking Corporation, is a British
              universal bank and financial services group headquartered in
              London, England, with historical and business links to East Asia
              and a multinational footprint. It is the largest Europe-based bank
              by total assets.
            </p>
            <p style={{ marginTop: "10px" }}>
              HSBC is one of the world's largest banking organizations, with 40
              million customers worldwide and assets of USD 3 trillion. HSBC has
              a network that covers 62 countries and territories in Europe,
              Asia, the Middle East and Africa, North America, and Latin
              America.
            </p>
            <p style={{ marginTop: "10px" }}>
              HSBC has a dual primary listing on the Hong Kong Stock Exchange
              and London Stock Exchange and is a constituent of the Hang Seng
              Index and the FTSE 100 Index. It has secondary listings on the New
              York Stock Exchange, and the Bermuda Stock Exchange.
            </p>
            <h3
              style={{ fontWeight: "bold", fontSize: "24px", marginTop: "5px" }}
            >
              Year of establishment
            </h3>
            <p style={{ marginTop: "10px" }}>
              In 1865, HSBC opened its doors for business in Hong Kong, helping
              to finance trade between Europe and Asia.
            </p>
            <h3
              style={{ fontWeight: "bold", fontSize: "24px", marginTop: "5px" }}
            >
              Founder
            </h3>
            <p style={{ marginTop: "10px" }}>
              HSBC was born from one simple idea – a local bank serving
              international needs. Thomas Sutherland, a young Scotsman employed
              in the area, formed HSBC.
            </p>
            <h3
              style={{ fontWeight: "bold", fontSize: "24px", marginTop: "5px" }}
            >
              It provides various services
            </h3>
            <ul style={styles.ul}>
              <ServiceItem>Banking</ServiceItem>
              <ServiceItem>Currency exchange</ServiceItem>
              <ServiceItem>International banking</ServiceItem>
              <ServiceItem>Merchant services</ServiceItem>
            </ul>
            <p style={{ marginTop: "10px" }}>
              For more information, visit the{" "}
              <a
                href="https://www.hsbc.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                HSBC official website
              </a>
              .
            </p>
            <a href="HSBCprocess">
              <button className="btn btn-secondary" style={styles.button}>
                Recruitment Process
              </button>
            </a>
          </div>
        </div>

        <div style={{ ...styles.imageContainer, marginLeft: "40px" }}>
          <img src={hsbcImage} alt="HSBC Image" style={styles.image} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HSBChome;
