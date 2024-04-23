import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import hsbcImage from "/HSBCprocess.png"; // Adjust the path to your image

const ServiceItem = ({ children }) => {
  const childString = String(children); // Convert children to string
  const hasPadding =
    !childString.startsWith("60%") &&
    !childString.includes("No related branches like AIML, etc.");
  const isSpecialCase = childString.includes(
    "No related branches like AIML, etc."
  );

  return (
    <li
      style={{
        position: "relative",
        paddingLeft: hasPadding ? "30px" : 0,
        marginBottom: "5px",
      }}
    >
      {!isSpecialCase &&
        !childString.startsWith("TCS Ninja") &&
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

function HSBCprocess() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Access isAuthenticated state
  const navigate = useNavigate();

  const handleTakeTest = () => {
    if (!isAuthenticated) {
      toast.error("Please Login to give test !");
    } else {
      navigate(`/HSBC/quiz`); // Replace '/quiz' with the actual path to the quiz page
    }
  };
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
    nestedList: {
      listStyleType: "circle",
      paddingLeft: "20px",
      marginTop: "5px",
    },
    imageContainer: {
      marginRight: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-300px", // Adjust the margin-top to move the image up
    },
    image: {
      position: "fixed",
      marginLeft: "280px",
      height: "240px",
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
              HSBC Campus Recruitment Process
            </h3>{" "}
            {/* Updated heading */}
            <ul style={styles.ul}>
              <ServiceItem>
                <strong>Roles Offered:</strong>
                <ul style={styles.nestedList}>
                  <li>HSBC Software Developer - 9LPA</li>
                </ul>
              </ServiceItem>

              <ServiceItem>
                <strong>Eligibility criteria:</strong>
                <ul style={styles.nestedList}>
                  <ServiceItem>
                    60% throughout 10th, 12th, Degree B.E/B.Tech (CSE/IT).
                  </ServiceItem>
                  <ServiceItem>No related branches like AIML, etc.</ServiceItem>
                </ul>
              </ServiceItem>

              <ServiceItem>
                <strong>Rounds:</strong>
                <ul style={styles.nestedList}>
                  <li>
                    Four Rounds are conducted in the following manner
                    <ul style={styles.nestedList}>
                      <li>
                        Assessment of online Aptitude Test:
                        <ul style={styles.nestedList}>
                          <li>75 minutes of time duration</li>
                          <li>Difficulty Level : Easy to Medium</li>
                          <li>Aptitude (40 Questions)</li>
                          <li>Technical (30 Questions)</li>
                        </ul>
                      </li>
                      <li>
                        Coding Test:
                        <ul style={styles.nestedList}>
                          <li>
                            2 questions with Difficulty Level - Easy to Medium
                            with 30 minutes of time duration.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Values Assessment Test:
                        <ul style={styles.nestedList}>
                          <li>It is a Scenario Based Test.</li>
                          <li>
                            Shortlisted students of ‘Assessment of online
                            Aptitude and Coding Test’ round will appear in this
                            round.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Technical Interview:
                        <ul style={styles.nestedList}>
                          <li>
                            Students will be shortlisted based on the ‘Value
                            Assessment Test’ and have to fill the candidate
                            application form containing personal and
                            professional details and then will be called for
                            Interview.
                          </li>
                          <li>
                            Candidates shortlisted for the Interview have to
                            appear for the interview physically with following
                            original documents. [10th Result / 12th Result /
                            Current Degree / Branch / Percentage]
                          </li>
                        </ul>
                      </li>
                      <li>
                        HR Interview:
                        <ul style={styles.nestedList}>
                          <li>
                            The candidates who have cleared ‘Interview’ will
                            appear for the HR Round.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </ServiceItem>
            </ul>
            <a href="HSBCprepare">
              <button className="btn btn-secondary" style={styles.button}>
                Start Preparation
              </button>
            </a>
            <button
              onClick={handleTakeTest}
              className="btn btn-secondary"
              style={{ marginLeft: "10px" }}
            >
              Solve Test
            </button>
            <ToastContainer />
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

export default HSBCprocess;
