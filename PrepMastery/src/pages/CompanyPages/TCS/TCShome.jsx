import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from '../../Error';
import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import tcsImage from '../../../../public/TCSlogo.png'; // Adjust the path to your image

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

function TCSHome() {
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
        imageContainer: {
            marginRight: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-350px', // Adjust the margin-top to move the image up
        },
        image: {
            position:'fixed',
            marginLeft: '350px',
            height: 'auto',
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
                        <h3 style={{ fontWeight: 'bold', fontSize: '24px' }}>About company</h3> {/* Updated heading */}
                        <p style={{ marginTop: '10px' }}>Tata Consultancy Services is an IT services, consulting, and business solutions firm that has been assisting many of the world's leading corporations in their transformation efforts for more than 50 years. It is based in Mumbai, Maharashtra, with its main campus in Chennai, Tamil Nadu. TCS is the world's largest IT services firm by market capitalization ($169.2 billion) as of February 2021.TCS is part of the Tata group, India's largest multinational corporate conglomerate, and employs approximately 488,000 world-class consultants in 46 countries.</p>
                        <p style={{ marginTop: '10px' }}>The Top Employers Institute has named TCS a Global Top Employer, one of just eight firms in the world to get this honor. TCS is able to attract and develop the greatest personnel by offering holistic long-term jobs based on continuous learning-enabled anytime, anywhere, any device digital learning environment.</p>
                        <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '5px' }}>Year of establishment</h3>
                        <p style={{ marginTop: '10px' }}>Established in 1968, TCS pioneered the IT industry back then and is globally the fastest growing IT services brand today. TCS has not only helped clients transform their businesses but has also reinvented itself well ahead of every technology wave over the past 50 years.</p>
                        <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '5px' }}>Founder</h3>
                        <p style={{ marginTop: '10px' }}>JRD Tata along with Mr. Fakir chand Kohli also known as Father of Indian IT founded the TCS, initially started as Tata Computer Systems.</p>
                        <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '5px' }}>It provides various services</h3>
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
                        <p style={{ marginTop: '10px' }}>For more information, visit the <a href="https://www.tcs.com/" target="_blank" rel="noopener noreferrer" style={styles.link}>TCS official website</a>.</p>
                        <a href='TCS-process'><button className='btn btn-secondary' style={styles.button}>Recruitment Process</button></a>
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

export default TCSHome;
