import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quiz() {
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/auth/question')
      .then(response => {
        setQuestions(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
    return (
      <>
       
      </>
    );

}

export default Quiz;