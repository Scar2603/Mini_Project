import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    student_name: '',
    pass: '',
    email: '',
    dob: ''
  });
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/auth/user/', formData);
      console.log(response.data);
      setAlert('Success: User authenticated successfully.');
      toast.success(`Welcome ${formData.student_name}! You have signed up successfully.`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      <div style={styles.pageContainer}>
        <div style={styles.imageContainer}>
          <img src="SignUpside.png" alt="Hero" style={styles.image} />
        </div>
        <div style={styles.container}>
          <h2 style={styles.title}>Sign Up</h2>
          {alert && <div style={styles.alert}>{alert}</div>}
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="student_name" style={styles.label}>Student Name:</label>
              <input type="text" style={styles.input} id="student_name" name="student_name" value={formData.student_name} onChange={handleChange} required/>
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="pass" style={styles.label}>Password:</label>
              <input type="password" style={styles.input} id="pass" name="pass" value={formData.pass} onChange={handleChange} required/>
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email:</label>
              <input type="email" style={styles.input} id="email" name="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="dob" style={styles.label}>Date of Birth:</label>
              <input type="date" style={styles.input} id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>
            <button type="submit" style={styles.button}>Sign Up</button>
          </form>
          <p style={styles.loginText}>Already have an account? <a href="login">Click here to login</a></p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'url("Hero_bg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  },
  imageContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: '100px',
    paddingBottom: '90px',
  },
  image: {
    width: '610px',
    height: 'auto',
  },
  container: {
    flex: '1',
    maxWidth: '400px',
    marginRight: '140px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#FFDE9B',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    fontFamily: 'Arial, sans-serif',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#000',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  bbuttonContainer: {
    display: 'flex',
    justifyContent: 'center', // Center content horizontally
    marginTop: '10px', // Move the button up slightly
  },
  button: {
    width: '100%', // Set button width to 100% of its container
    backgroundColor: '#332c1f',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  alert: {
    marginTop: '15px',
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
  },
  loginText: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default SignupPage;
