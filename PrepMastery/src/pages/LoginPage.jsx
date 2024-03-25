import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
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
      console.log(response.data); // Assuming response.data contains success message
      setAlert('Success: User authenticated successfully.');
    } catch (error) {
      console.error('Error:', error);
      // Handle error cases
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login Page</h2>
      {alert && <div style={styles.alert}>{alert}</div>}
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="student_name">Student Name:</label>
          <input type="text" style={styles.input} id="student_name" name="student_name" value={formData.student_name} onChange={handleChange} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="pass">Password:</label>
          <input type="password" style={styles.input} id="pass" name="pass" value={formData.pass} onChange={handleChange} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" style={styles.input} id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" style={styles.input} id="dob" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  alert: {
    marginTop: '15px',
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
  },
};

export default LoginPage;
