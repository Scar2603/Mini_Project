import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import hsbcImage from '/HSBCprepare.jpg'; // Adjust the path to your image
import pdf from '/HSBCDescription.pdf'; 

const ServiceItem = ({ children, reducedPadding }) => {
    const childString = String(children); // Convert children to string
    const hasPadding = !childString.startsWith('60%'); // Check if the content starts with "60%"
    const excludePoints = ['Number System', 'Arithmetic Ability', 'Elementary Statistics', 'Simplifications & Approximations', 'English Grammar', 'Reading Comprehension'];
    const shouldRenderCircle = !excludePoints.some(point => childString.includes(point));
    const padding = reducedPadding ? '10px' : '30px'; // Define padding based on reducedPadding prop

    return (
        <li style={{ position: 'relative', paddingLeft: hasPadding ? padding : 0, marginBottom: '5px' }}>
            {shouldRenderCircle && <span style={{ position: 'absolute', left: 0, top: 0, color: 'black' }}>●</span>}
            {children}
        </li>
    );
};


function HSBCprepare() {
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
            marginLeft: '-600px',
        },
        heading: {
            textAlign: 'left',
            fontSize: '55px',
            fontWeight: 'bold',
        },
        paragraph: {
            marginBottom: '10px',
            marginTop: '10px',
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
            marginTop: '-800px', // Adjust the margin-top to move the image up
        },
        image: {
            position:'fixed',
            marginLeft: '900px',
            height: '220px',
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
                        <h1 style={styles.heading}>HSBC</h1>
                        <p style={{ marginBottom: '10px' }}>Hongkong and Shanghai Banking Corporation Limited</p>
                        <h3 style={{ fontWeight: 'bold', fontSize: '24px' }}>HSBC Syllabus For Aptitude Test</h3> {/* Updated heading */}
                        <ul style={styles.ul}>
                        <ServiceItem>The topics on which the <strong>HSBC Aptitude syllabus</strong> is based on are:
                            <ul style={{...styles.ul,marginLeft:'-10px'}}>
                                <ServiceItem>Algebra 
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtu.be/TV9rQm15sWo?si=nWeoos8IpH51E56B" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Equations 
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtube.com/playlist?list=PLmzpgcvcqGjNd-LTey9FhgPUyP6ihtjzU&si=ceiyUjBNSIunLBcY" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Progression 
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtu.be/G-gqX4Oo9PA?si=Ujbr7PcVMSArDgRN" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Profit & Loss
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtu.be/T2odvmxqi1I?si=7qvn05nXb9DhE2yB" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Ratio and Proportion
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtu.be/jfoJBivWlnQ?si=oBO61w0oNpOyTqZH" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>  
                                <ServiceItem>Mensuration
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtu.be/xwqUyOT-cmU?si=E7uuxZRzzBHN5IQW" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>  
                                <ServiceItem>Logarithms 
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtu.be/w-7mbazOx6o?si=8RjoSnGZDVx9EiSv" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Simple and Compound Interest
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtu.be/jvRq87ZWzIk?si=AMhQgDnhx1ZJ5l-S" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Trigonometry
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtu.be/uRA-QqVI3ec?si=2W8RmMEzFNvqE8Q0" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Mixture and Allegations
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtu.be/OKSJDDAyqP0?si=okWAldTT3Wo6iHF0" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                            </ul>
                        </ServiceItem>
                        <ServiceItem>The topics on which the <strong>HSBC Verbal English syllabus</strong> is based on are:
                            <ul style={{...styles.ul,marginLeft:'-10px'}}>
                                <ServiceItem>Synonyms & Antonyms
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtube.com/playlist?list=PLRvmg8VHz-jUJPZKXQ4tMVq3hMVCdTGOo&si=1_mrNaetfhYfQFnH" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Contextual Vocabulary
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtu.be/8E4ha32ZVHU?si=txzbDy7uonxaSvEl" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Jumbled Sentence
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtu.be/w8wkhKH2nXs?si=QGqCBol-c3BprIn5" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Sentence Correction
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtube.com/playlist?list=PLBG_hRMQjgpwY4XPMGW72VB3VduRtzzWy&si=vu6wicAEvcpXdhON" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Preposition 
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtube.com/playlist?list=PLpyc33gOcbVDBezm_qZaTe06k78oelATZ&si=68wa7kl_I29J-en3" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Idioms and Phrases
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtube.com/playlist?list=PLou7ZkuAIPPuk0xVN_SuIhwYWczcMUvyW&si=vgjGL5QabbKGnhu-" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Spotting Error
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtu.be/xFGUTzBlAP8?si=8hwzznugVd8JN4s_" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                                <ServiceItem>Sentence Arrangements
                                    <ul style={{...styles.ul,marginLeft:'20px'}}>
                                        <li> -For referance, watch this video: <a href="https://youtu.be/w8wkhKH2nXs?si=W1fGlAX9f5VS261N" target="_blank" style={{ color: 'red' }}>Watch Video</a></li>
                                    </ul>
                                </ServiceItem>
                            </ul>
                        </ServiceItem>
                    </ul>
                    <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '10px' }}>Detailed Syllabus</h3>
                    <p style={styles.paragraph}>For Detailed Syllabus and Videos: <a href={pdf} target="_blank" rel="noopener noreferrer" ><strong>Click Here</strong></a></p>




                        <button onClick={handleTakeTest} className='btn btn-secondary' style={{marginTop:'15px'}}>Solve Test</button>
                    <ToastContainer />
                    </div>
                </div>

                <div style={{ ...styles.imageContainer, marginLeft: '40px' }}>
                    <img src={hsbcImage} alt="HSBC Image" style={styles.image} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HSBCprepare;