import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tcsImage from '../../../../public/TCSprocess.png'; // Adjust the path to your image

const ServiceItem = ({ children }) => {
    const childString = String(children); // Convert children to string
    const hasPadding = !childString.startsWith('60%'); // Check if the content starts with "60%"
    return (
        <li style={{ position: 'relative', paddingLeft: hasPadding ? '30px' : 0, marginBottom: '5px' }}>
            {!childString.startsWith('TCS Ninja') && !childString.startsWith('TCS Digital') && !childString.startsWith('60%') && <span style={{ position: 'absolute', left: 0, top: 0, color: 'black' }}>●</span>}
            {children}
        </li>
    );
};

function TCSprocess() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // Access isAuthenticated state
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
            display: 'flex',
            backgroundImage: 'url("/Hero_bg.png")',
            justifyContent: 'center',
        },
        contentContainer: {
            display: 'flex',
            maxWidth: '1000px',
            borderRadius: '10px',
            marginRight: '20px',
            marginLeft: '-470px',
        },
        heading: {
            textAlign: 'left',
            fontSize: '55px',
            fontWeight: 'bold',
        },
        paragraph: {
            marginBottom: '15px',
            marginTop: '20px',
        },
        link: {
            color: 'blue',
        },
        button: {
            marginTop: '20px',
        },
        ul: {
            listStyleType: "none",
            paddingLeft: 0
        },
        nestedList: {
            listStyleType: "circle",
            paddingLeft: '20px',
            marginTop: '5px',
        },
        imageContainer: {
            marginRight: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-180px', // Adjust the margin-top to move the image up
        },
        image: {
            position:'fixed',
            marginLeft: '670px',
            height: '240px',
            width: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Adding shadow effect
        },
    };

    return (
        <>
            <Nav />
            <div style={styles.container}>
                <div style={styles.contentContainer}>
                    <div style={{ padding: '20px' }}>
                        <h1 style={styles.heading}>TCS</h1>
                        <p style={{ marginBottom: '10px' }}>Tata Consultancy Services Limited</p>
                        <h3 style={{ fontWeight: 'bold', fontSize: '24px' }}>TCS Campus Recruitment Process</h3> {/* Updated heading */}
                        <ul style={styles.ul}>
                            <ServiceItem><strong>Roles Offered:</strong>
                                <ul style={styles.nestedList}>
                                    <li>TCS Ninja - 4LPA</li>
                                    <li>TCS Digital - 6LPA</li>
                                </ul>
                            </ServiceItem>

                            <ServiceItem><strong>Eligibility criteria:</strong>
                                <ul style={styles.nestedList}>
                                    <ServiceItem>60% throughout 10th, 12th, Degree B.E/B.Tech (CSE/IT)</ServiceItem>
                                </ul>
                            </ServiceItem>

                            <ServiceItem><strong>Rounds:</strong>
                                <ul style={styles.nestedList}>
                                    <li>Four Rounds are conducted in the following manner
                                        <ul style={styles.nestedList}>
                                            <li>Online Aptitude Test:
                                                <ul style={styles.nestedList}>
                                                    <li>Questions based on:
                                                        <ol style={styles.nestedList}>
                                                            <li>Quantitative Aptitude</li>
                                                            <li>Logical Reasoning</li>
                                                            <li>Verbal Ability</li>
                                                        </ol>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>Technical Interview:
                                                <ul style={styles.nestedList}>
                                                    <li>The candidates shortlisted from above ‘Online Aptitude Test’ Round has to appear for this round.</li>
                                                    <li>Domain specific questions will be asked in this round.</li>
                                                </ul>
                                            </li>
                                            <li>Coding Test:
                                                <ul style={styles.nestedList}>
                                                    <li>Candidates need to solve Coding questions using any of the programming languages.</li>
                                                </ul>
                                            </li>
                                            <li>HR Interview:
                                                <ul style={styles.nestedList}>
                                                    <li>The shortlisted candidates from ‘Coding Test’ will be eligible for the HR Interview Round.</li>
                                                    <li>It will check the communication skills, cultural fitness, strengths, weaknesses, etc.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>The shortlisted students based on their scores get a chance to uplift his/her role from Ninja to Digital.</li>
                                    <li>The students need to solve coding problems to prove their competency.</li>
                                </ul>
                            </ServiceItem>
                        </ul>
                        <a href='TCS-process'><button className='btn btn-secondary' style={styles.button}>Start Preparation</button></a>
                        <button onClick={handleTakeTest} className='btn btn-secondary' style={{marginLeft:'10px'}}>Solve Test</button>
                    <ToastContainer />
                    </div>
                </div>

                <div style={{ ...styles.imageContainer, marginLeft: '40px' }}>
                    <img src={tcsImage} alt="TCS Image" style={styles.image} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TCSprocess;
