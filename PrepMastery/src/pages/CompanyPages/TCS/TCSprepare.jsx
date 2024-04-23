import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import tcsImage from "/TCSprepare.jpg"; // Adjust the path to your image
import pdf from "/TCSDescription.pdf";

const ServiceItem = ({ children, reducedPadding }) => {
  const childString = String(children); // Convert children to string
  const hasPadding = !childString.startsWith("60%"); // Check if the content starts with "60%"
  const excludePoints = [
    "Number System",
    "Mensuration",
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

function TCSprepare() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Access isAuthenticated state
  const navigate = useNavigate();

  const handleTakeTest = () => {
    if (!isAuthenticated) {
      toast.error("Please Login to give test !");
    } else {
      navigate(`/tcsdemo/quiz`); // Replace '/quiz' with the actual path to the quiz page
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
      marginTop: "-320px", // Adjust the margin-top to move the image up
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
            <h1 style={styles.heading}>TCS</h1>
            <p style={{ marginBottom: "10px" }}>
              Tata Consultancy Services Limited
            </p>
            <h3 style={{ fontWeight: "bold", fontSize: "24px" }}>
              TCS Syllabus For Aptitude Test
            </h3>{" "}
            {/* Updated heading */}
            <ul style={styles.ul}>
              <ServiceItem>
                The topics on which the <strong>TCS Aptitude syllabus</strong>{" "}
                is based on are:
                <ul style={{ ...styles.ul, marginLeft: "-10px" }}>
                  <ServiceItem>
                    Number System
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://www.youtube.com/live/sVNn6Ptbx6A?si=_S06o-pxk0atFIVC"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                  <ServiceItem>
                    Mensuration
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://youtu.be/KA3aKKAJbNs?si=sbhqU4D14Zu9ieKT"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                  <ServiceItem>
                    Arithmetic Ability
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://youtu.be/S-Ji7aayH3A?si=uUPRpVH0AKjc9HGh"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                  <ServiceItem>
                    Elementary Statistics
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://www.youtube.com/live/rIiRZl01TPk?si=G1PEfIPLUBN9LkMq"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                  <ServiceItem>
                    Simplifications & Approximations
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://youtu.be/ZuMJFleXmiw?si=4rgfhZ_HMhj_DBvl"
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
                <strong>TCS Verbal Ability syllabus</strong> is based on are:
                <ul style={{ ...styles.ul, marginLeft: "-10px" }}>
                  <ServiceItem>
                    English Grammar
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://www.youtube.com/live/ro69GD4D93Q?si=4iMMB5D321jpWtib"
                          target="_blank"
                          style={{ color: "red" }}
                        >
                          Watch Video
                        </a>
                      </li>
                    </ul>
                  </ServiceItem>
                  <ServiceItem>
                    Reading Comprehension
                    <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                      <li>
                        {" "}
                        -For referance, watch this video:{" "}
                        <a
                          href="https://www.youtube.com/live/ro69GD4D93Q?si=4iMMB5D321jpWtib"
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
                Main topics are:
                <ul style={{ ...styles.ul, marginLeft: "20px" }}>
                  <li>
                    {" "}
                    -Work & Time :{" "}
                    <a
                      href="https://youtu.be/KE7tQf9spPg?si=4tTJD1tosouauKUM"
                      target="_blank"
                      style={{ color: "red" }}
                    >
                      Watch Video
                    </a>
                  </li>
                  <li>
                    {" "}
                    -Speed Distance :{" "}
                    <a
                      href="https://youtu.be/Qt_js6M1nP4?si=e0aqJdqcOXn3AhY9"
                      target="_blank"
                      style={{ color: "red" }}
                    >
                      Watch Video
                    </a>
                  </li>
                  <li>
                    {" "}
                    -Ratio Proportion :{" "}
                    <a
                      href="https://youtu.be/jfoJBivWlnQ?si=DxJ1jX-Ph7vLlYGy"
                      target="_blank"
                      style={{ color: "red" }}
                    >
                      Watch Video
                    </a>
                  </li>
                  <li>
                    {" "}
                    -Ages :{" "}
                    <a
                      href="https://youtu.be/NtPHWGFE9o8?si=YJoR2mQeYU0FVO8o"
                      target="_blank"
                      style={{ color: "red" }}
                    >
                      Watch Video
                    </a>
                  </li>
                  <li>
                    {" "}
                    -Clock :{" "}
                    <a
                      href="https://youtu.be/edEvlh0tqzk?si=k6DDCuUTHywqBvnI"
                      target="_blank"
                      style={{ color: "red" }}
                    >
                      Watch Video
                    </a>
                  </li>
                  <li>
                    {" "}
                    -Permutation :{" "}
                    <a
                      href="https://youtu.be/ETiRE7N7pEI?si=XHGoR7647s6KeAbl"
                      target="_blank"
                      style={{ color: "red" }}
                    >
                      Watch Video
                    </a>
                  </li>
                  <li>
                    {" "}
                    -Logical Reasoning (encoding decoding) :{" "}
                    <a
                      href="https://youtu.be/QsD0JiNBDeQ?si=UA0oiPuF0tTbqRKa"
                      target="_blank"
                      style={{ color: "red" }}
                    >
                      Watch Video
                    </a>
                  </li>
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
          <img src={tcsImage} alt="TCS Image" style={styles.image} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TCSprepare;
