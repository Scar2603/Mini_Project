import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import techmImage from "/TechMprepare.jpg"; // Adjust the path to your image
import pdf from "/TechMDescription.pdf";

const ServiceItem = ({ children, reducedPadding }) => {
  const childString = String(children); // Convert children to string
  const hasPadding = !childString.startsWith("60%"); // Check if the content starts with "60%"
  const excludePoints = [
    "Number System",
    "Arithmetic Ability",
    "Elementary Statistics",
    "Simplifications & Approximations",
    "English Grammar",
    "Reading Comprehension",
  ];
  const shouldRenderCircle = !excludePoints.some((point) =>
    childString.includes(point)
  );
  const padding = reducedPadding ? "10px" : "30px"; // Define padding based on reducedPadding prop

  return (
    <li
      style={{
        position: "relative",
        paddingLeft: hasPadding ? padding : 0,
        marginBottom: "5px",
      }}
    >
      {shouldRenderCircle && (
        <span style={{ position: "absolute", left: 0, top: 0, color: "black" }}>
          ●
        </span>
      )}
      {children}
    </li>
  );
};

function TechMprepare() {
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
      marginLeft: "-600px",
    },
    heading: {
      textAlign: "left",
      fontSize: "55px",
      fontWeight: "bold",
    },
    paragraph: {
      marginBottom: "10px",
      marginTop: "10px",
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
      marginTop: "-400px", // Adjust the margin-top to move the image up
    },
    image: {
      position: "fixed",
      marginLeft: "900px",
      height: "220px",
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
              Tech Mahindra Syllabus For Aptitude Test
            </h3>{" "}
            {/* Updated heading */}
            <ul style={styles.ul}>
              <ServiceItem>
                The topics on which the{" "}
                <strong>Tech Mahindra Aptitude syllabus</strong> is based on
                are:
                <ul style={{ ...styles.ul, marginLeft: "-10px" }}>
                  <ServiceItem>
                    Profit and Loss
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://youtu.be/T2odvmxqi1I?si=vHUV8XBr3BR6v2wk"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                  <ServiceItem>
                    Ages
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://youtu.be/tJHl73PBnwY?si=QZ_GyPC8kWqGR5QM"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                  <ServiceItem>
                    Time and Work
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://youtu.be/KE7tQf9spPg?si=oxOfOxOyLSd88NWw"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                  <ServiceItem>
                    Speed Time and Distance
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://youtu.be/jzNxXm5twx4?si=D5VGb6IBsCiBpRKm"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                  <ServiceItem>
                    Simple Interest
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://youtu.be/jvRq87ZWzIk?si=ajjw3nB6yDJqram_"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                  <ServiceItem>
                    Compound Interest
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://youtu.be/PbUZnzncmR4?si=JC_DYTPgWIAEEMjc"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                  <ServiceItem>
                    LCM and HCF
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://youtu.be/xyyejJYeILM?si=x8Q7CFIKLkq2AKLC"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                  <ServiceItem>
                    Permutation & Combination
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://youtu.be/ETiRE7N7pEI?si=HPrCecXZuGWh5FXr"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                  <ServiceItem>
                    Probability
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://youtu.be/ximxxERGSUc?si=ne5FMp6vo9KYLvc-"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                </ul>
              </ServiceItem>
              <ServiceItem>
                The topics on which the{" "}
                <strong> Tech Mahindra Technical Test syllabus</strong> is based
                on are:
                <ul style={{ ...styles.ul, marginLeft: "-10px" }}>
                  <ServiceItem>Computer Programming</ServiceItem>
                  <ServiceItem>Computer Science</ServiceItem>
                  <ServiceItem>Automata Fix</ServiceItem>
                </ul>
              </ServiceItem>
            </ul>
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                marginTop: "10px",
              }}
            >
              Detailed Syllabus
            </h3>
            <p style={styles.paragraph}>
              For Detailed Syllabus and Videos:{" "}
              <a href={pdf} target="_blank" rel="noopener noreferrer">
                <strong>Click Here</strong>
              </a>
            </p>
            <button
              onClick={handleTakeTest}
              className="btn btn-secondary"
              style={{ marginTop: "15px" }}
            >
              Solve Test
            </button>
            <ToastContainer />
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

export default TechMprepare;
