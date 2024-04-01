import React from 'react';
import Nav from '../../components/Nav';
import hero from '../../../public/Hero_bg.png';


function TCS() {
    // Define styles directly in the component
    const styles = {
        body: {
            margin: 0,
            padding: 0,
            fontFamily: "Arial, sans-serif",
            backgroundSize: "cover"
        },
        container: {
            padding: "20px",
            margin: "0 auto",
            maxWidth: "1000px",
            borderRadius: "10px",
        },
        h1: {
            textAlign: "left"
        },
        p: {
            marginBottom: "15px"
        },
        ul: {
            listStyleType: "none",
            paddingLeft: 0
        },
        "ul li": {
            marginBottom: "5px"
        },
        "ul li::before": {
            content: "●",
            color: "#FFA500",
            display: "inline-block",
            width: "1em",
            marginLeft: "-1em"
        },
        "roles-offered ul": {
            paddingLeft: "20px"
        },
        pieChart: {
            textAlign: "center",
            marginTop: "20px"
        },
        "pieChart img": {
            width: "100%",
            maxWidth: "400px",
            borderRadius: "10px"
        }
    };

    return (
        <>
            <div>
                <Nav />
            </div>
            <div style={{backgroundImage: 'url("Hero_bg.png")'}}>
                <div style={styles.container}>
                    <h1 style={styles.h1}>TCS</h1>
                    <p style={styles.p}>Tata Consultancy Services Limited</p>
                    <p style={styles.p}>Tata Consultancy Services Limited (TCS) is an Indian multinational information technology (IT) services and consulting company headquartered in Mumbai. It is a part of the Tata Group and operates in 150 locations across 46 countries.</p>
                    <p style={styles.p}>TCS is the second-largest Indian company by market capitalization, the most valuable IT service brands worldwide, and the top Big Tech (India) company.</p>
                    <ul className="roles-offered" style={styles['roles-offered']}>
                        <li><strong>It provides various services:</strong></li>
                        <ul style={styles.ul}>
                            <li>Cloud</li>
                            <li>Cognitive Business Operations</li>
                            <li>Consulting</li>
                            <li>Cybersecurity</li>
                            <li>Artificial Intelligence</li>
                            <li>Data and Analytics</li>
                            <li>Enterprise Solutions</li>
                            <li>IoT and Digital Engineering</li>
                            <li>Network Solutions</li>
                            <li>Services TCS Interactive</li>
                        </ul>
                    </ul>
                    <p style={styles.p}><strong>TCS Campus Recruitment Process:</strong></p>
                    <ul className="roles-offered" style={styles['roles-offered']}>
                        <li><strong>Roles Offered:</strong>
                            <ul style={styles.ul}>
                                <li>TCS Ninja - 4LPA</li>
                                <li>TCS Digital - 6LPA</li>
                            </ul>
                        </li>
                        <li><strong>Eligibility criteria:</strong>
                            <ul style={styles.ul}>
                                <li>60% throughout 10th, 12th, Degree B.E/B.Tech (CSE/IT)</li>
                            </ul>
                        </li>
                    </ul>
                    <div className="pie-chart" style={styles['pieChart']}>
                        <h2>Topics to Prepare</h2>
                        <img src="/pie.png" alt="Pie Chart" style={styles['pieChart img']} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default TCS;
