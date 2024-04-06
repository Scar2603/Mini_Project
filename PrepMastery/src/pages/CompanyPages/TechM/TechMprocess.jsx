import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import techmImage from '/TechMprocess.png'; // Adjust the path to your image

const ServiceItem = ({ children }) => {
    const childString = String(children); // Convert children to string
    const hasPadding = !childString.startsWith('60%') &&
                   !childString.includes('No related branches like AIML, etc.') &&
                   !childString.includes('No Backlogs during the Tech Mahindra Recruitment Process.');

    const isSpecialCase = childString.includes('No Backlogs during the Tech Mahindra Recruitment Process.');

    return (
        <li style={{ position: 'relative', paddingLeft: hasPadding ? '30px' : 0, marginBottom: '5px' }}>
            {!isSpecialCase && !childString.startsWith('TCS Ninja') && !childString.startsWith('TCS Digital') && !childString.startsWith('60%') && <span style={{ position: 'absolute', left: 0, top: 0, color: 'black' }}>●</span>}
            {children}
        </li>
    );
};



function TechMprocess() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // Access isAuthenticated state
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
            display: 'flex',
            backgroundImage: 'url("/Hero_bg.png")',
            justifyContent: 'center',
        },
        contentContainer: {
            display: 'flex',
            maxWidth: '1000px',
            borderRadius: '10px',
            marginRight: '20px',
            marginLeft: '-280px',
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
            marginTop: '-300px', // Adjust the margin-top to move the image up
        },
        image: {
            position: 'fixed',
            marginLeft: '280px',
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
                        <h1 style={styles.heading}>Tech Mahindra</h1>
                        <h3 style={{ fontWeight: 'bold', fontSize: '24px' }}>Tech Mahindra Campus Recruitment Process</h3> {/* Updated heading */}
                        <ul style={styles.ul}>
                            <ServiceItem><strong>Roles Offered:</strong>
                                <ul style={styles.nestedList}>
                                    <li>HSBC Software Developer</li>
                                </ul>
                            </ServiceItem>

                            <ServiceItem><strong>Eligibility criteria:</strong>
                                <ul style={styles.nestedList}>
                                    <ServiceItem>60% throughout 10th, 12th, Degree B.E/B.Tech (CSE/IT).</ServiceItem>
                                    <ServiceItem>No Backlogs during the Tech Mahindra Recruitment Process.</ServiceItem>
                                </ul>
                            </ServiceItem>

                            <ServiceItem><strong>Rounds:</strong>
                                <ul style={styles.nestedList}>
                                    <li>Five Rounds are conducted in the following manner
                                        <ul style={styles.nestedList}>
                                            <li>Written Test:
                                                <ul style={styles.nestedList}>
                                                    <li>The first round in the Tech Mahindra Recruitment Process is a written test to evaluate a candidate’s Aptitude and Technical skills.</li>
                                                </ul>
                                            </li>
                                            <li>Psychometric Test:
                                                <ul style={styles.nestedList}>
                                                    <li>This round is a personality psychometric that is used to assess work behaviour. </li>
                                                </ul>
                                            </li>
                                            <li>Technical Written Test:
                                                <ul style={styles.nestedList}>
                                                    <li>In this round, they generally ask you to optimize the codes you did in the second written round.</li>
                                                </ul>
                                            </li>
                                            <li>Technical interviews:
                                                <ul style={styles.nestedList}>
                                                    <li>This round will likely include questions about any part of the candidate’s study. To pass this level, you must have a strong understanding of computer science fundamentals. </li>
                                                </ul>
                                            </li>
                                            <li>HR Round:
                                                <ul style={styles.nestedList}>
                                                    <li>The candidates who have cleared ‘Interview’ will appear for the HR Round.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </ServiceItem>
                        </ul>
                        <a href='TechMprepare'><button className='btn btn-secondary' style={styles.button}>Start Preparation</button></a>
                        <button onClick={handleTakeTest} className='btn btn-secondary' style={{ marginLeft: '10px' }}>Solve Test</button>
                        <ToastContainer />
                    </div>
                </div>

                <div style={{ ...styles.imageContainer, marginLeft: '40px' }}>
                    <img src={techmImage} alt="Tech Mahindra Image" style={styles.image} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TechMprocess;
