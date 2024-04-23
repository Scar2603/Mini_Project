import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "../Error";

// Custom component for list items without a circle
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

function TCShome() {
  const [companyData, setCompanyData] = useState(null);
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
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "Arial, sans-serif",
      backgroundSize: "cover",
    },
    container: {
      padding: "20px",
      margin: "0 auto",
      maxWidth: "1000px",
      borderRadius: "10px",
    },
    h1: {
      textAlign: "left",
      fontSize: "55px",
      fontWeight: "bold",
    },
    p: {
      marginBottom: "15px",
    },
    pLargeMargin: {
      marginBottom: "50px",
    },
    sectionHeading: {
      fontSize: "30px", // Larger font size for section headings
      fontWeight: "bold",
      marginBottom: "10px",
    },
    ul: {
      listStyleType: "none",
      paddingLeft: 0,
    },
    "roles-offered ul": {
      paddingLeft: "20px",
    },
    pieChart: {
      textAlign: "center",
      marginTop: "20px",
    },
    "pieChart img": {
      width: "100%",
      maxWidth: "400px",
      borderRadius: "10px",
    },
    nestedList: {
      paddingLeft: "20px", // Adjust padding for nested lists
    },
    syllabusHeading: {
      fontSize: "30px", // Larger font size for section headings
      fontWeight: "bold",
      marginTop: "20px", // Add some top margin for separation
    },
  };

  return (
    <>
      <Nav />
      <div style={{ backgroundImage: 'url("/Hero_bg.png")' }}>
        <div style={styles.container}>
          <h1 style={styles.h1}>TCS</h1>
          <p style={{ ...styles.p, ...styles.pLargeMargin }}>
            Tata Consultancy Services Limited
          </p>
          <p style={styles.p}>
            Tata Consultancy Services Limited (TCS) is an Indian multinational
            information technology (IT) services and consulting company
            headquartered in Mumbai. It is a part of the Tata Group and operates
            in 150 locations across 46 countries.
          </p>
          <p style={styles.p}>
            TCS is the second-largest Indian company by market capitalization,
            the most valuable IT service brands worldwide, and the top Big Tech
            (India) company.
          </p>

          {/* Updated section heading with larger font size */}
          <strong style={styles.sectionHeading}>
            It provides various services:
          </strong>
          <ul style={styles.ul}>
            <ServiceItem>Cloud</ServiceItem>
            <ServiceItem>Cognitive Business Operations</ServiceItem>
            <ServiceItem>Consulting</ServiceItem>
            <ServiceItem>Cybersecurity</ServiceItem>
            <ServiceItem>Artificial Intelligence</ServiceItem>
            <ServiceItem>Data and Analytics</ServiceItem>
            <ServiceItem>Enterprise Solutions</ServiceItem>
            <ServiceItem>IoT and Digital Engineering</ServiceItem>
            <ServiceItem>Network Solutions</ServiceItem>
            <ServiceItem>Services TCS Interactive</ServiceItem>
          </ul>

          <p style={styles.p}>
            Tata Consultancy Services Limited, initially started as Tata
            Computer Systems, was founded in 1968 by a division of Tata Sons
            Limited.
          </p>

          {/* Updated section heading for TCS Campus Recruitment Process */}
          <strong style={styles.sectionHeading}>
            TCS Campus Recruitment Process:
          </strong>
          <ul style={styles.ul}>
            {/* Apply ServiceItem component to each point under "Roles Offered:" */}
            <ServiceItem>
              <strong style={{ fontSize: "px" }}>Roles Offered:</strong>
              <ul>
                <li>1.TCS Ninja - 4LPA</li>
                <li>2.TCS Digital - 6LPA</li>
              </ul>
            </ServiceItem>

            {/* Apply ServiceItem component to "Eligibility criteria" */}
            <ServiceItem>
              <strong style={{ fontSize: "18px" }}>
                Eligibility criteria:
              </strong>
              <ul>
                <ServiceItem>
                  60% throughout 10th, 12th, Degree B.E/B.Tech (CSE/IT)
                </ServiceItem>
              </ul>
            </ServiceItem>

            {/* Apply ServiceItem component to "Rounds" */}
            <ServiceItem>
              <strong style={{ fontSize: "18px" }}>Rounds:</strong>
              <ul>
                {" "}
                {/* No additional styles applied */}
                <li>
                  Four Rounds are conducted in the following manner
                  <ul style={styles.nestedList}>
                    <li>
                      1. Online Aptitude Test:
                      <ul style={styles.nestedList}>
                        <li>
                          {" "}
                          -Questions based on:
                          <ol style={styles.nestedList}>
                            <li>a. Quantitative Aptitude</li>
                            <li>b. Logical Reasoning</li>
                            <li>c. Verbal Ability</li>
                          </ol>
                        </li>
                      </ul>
                    </li>
                    <li>
                      2. Technical Interview:
                      <ul style={styles.nestedList}>
                        <li>
                          {" "}
                          -The candidates shortlisted from above ‘Online
                          Aptitude Test’ Round has to appear for this round.
                        </li>
                        <li>
                          {" "}
                          -Domain specific questions will be asked in this
                          round.
                        </li>
                      </ul>
                    </li>
                    <li>
                      3. Coding Test:
                      <ul style={styles.nestedList}>
                        <li>
                          {" "}
                          -Candidates need to solve Coding questions using any
                          of the programming languages.
                        </li>
                      </ul>
                    </li>
                    <li>
                      4. HR Interview:
                      <ul style={styles.nestedList}>
                        <li>
                          {" "}
                          -The shortlisted candidates from ‘Coding Test’ will be
                          eligible for the HR Interview Round.
                        </li>
                        <li>
                          {" "}
                          -It will check the communication skills, cultural
                          fitness, strengths, weaknesses, etc.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* Add bullet points under "Rounds" */}
                <li style={{ marginTop: "10px" }}>
                  {" "}
                  -The shortlisted students based on their scores get a chance
                  to uplift his/her role from Ninja to Digital.
                </li>
                <li>
                  {" "}
                  -The students need to solve coding problems to prove their
                  competency.
                </li>
              </ul>
            </ServiceItem>
          </ul>

          {/* Added Syllabus section with the same styling */}
          <strong style={styles.syllabusHeading}>Syllabus:</strong>
          <ul style={styles.ul}>
            <ServiceItem>
              The topics on which the <strong>TCS Aptitude syllabus</strong> is
              based on are:
              <ul style={styles.nestedList}>
                <ServiceItem>
                  Number System
                  <ul style={styles.nestedList}>
                    <li> -Divisibility</li>
                    <li> -Decimal Fractions and Numbers</li>
                    <li> -Number System and LCM & HCF</li>
                    <li>
                      {" "}
                      -For a detailed explanation, watch this video:{" "}
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
                  <ul style={styles.nestedList}>
                    <li> -Geometry</li>
                    <li> -Area , Perimeter and Shapes</li>
                    <li>
                      {" "}
                      -For a detailed explanation, watch this video:{" "}
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
                  <ul style={styles.nestedList}>
                    <li> -Ages</li>
                    <li> -Averages</li>
                    <li> -Equations</li>
                    <li> -Probability</li>
                    <li> -Percentages</li>
                    <li> -Profit and Loss</li>
                    <li> -Time and Work</li>
                    <li> -Clocks and Calendar</li>
                    <li> -Arrangement & Series</li>
                    <li> -Ratios and Proportions</li>
                    <li> -Series and Progressions</li>
                    <li> -Allegations and Mixtures</li>
                    <li> -Permutations and Combinations</li>
                    <li> -Time, Speed and Distance</li>
                    <li> -Time and Work</li>
                    <li>
                      {" "}
                      -For a detailed explanation, watch this video:{" "}
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
                  <ul style={styles.nestedList}>
                    <li>
                      {" "}
                      -Mean, Median, Mode, Standard Deviation, and Variance
                    </li>
                    <li>
                      {" "}
                      -For a detailed explanation, watch this video:{" "}
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
                  <ul style={styles.nestedList}>
                    <li> -Simple Arithmetic Calculations</li>
                    <li>
                      {" "}
                      -For a detailed explanation, watch this video:{" "}
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
              <ul style={styles.nestedList}>
                <ServiceItem>
                  English Grammar
                  <ul style={styles.nestedList}>
                    <li> -Spelling</li>
                    <li> -Grammar</li>
                    <li> -Selecting words</li>
                    <li> -Error Correction</li>
                    <li> -Passage Ordering</li>
                    <li> -Error Identification</li>
                    <li> -Sentence Completion</li>
                    <li> -Synonyms and Antonyms</li>
                    <li>
                      {" "}
                      -For a detailed explanation, watch this video:{" "}
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
                  <ul style={styles.nestedList}>
                    <li> -Cloze Test</li>
                    <li> -Reading and Comprehension</li>
                    <li>
                      {" "}
                      -For a detailed explanation, watch this video:{" "}
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
              <ul style={styles.nestedList}>
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
          <button onClick={handleTakeTest} className="btn btn-secondary">
            Solve Test
          </button>
          <ToastContainer />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default TCShome;
