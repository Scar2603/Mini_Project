import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Quiz() {
  const [data, setData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [totalMarks, setTotalMarks] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/auth/question/')
        const shuffledQuestions = shuffleArray(response.data.questions);
        setData(shuffledQuestions.slice(0, 20));
        setSelectedAnswers(new Array(20).fill(''));
        console.log(response.data.questions);
        
      } catch (err) {
        console.log(err.message);
      
      }
    })();

  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleOptionChange = (index, optionIndex, value) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = value;
    setSelectedAnswers(newSelectedAnswers);
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setCurrentIndex(currentIndex + 1);
    setShowConfirm(false);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    setShowConfirm(false);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
    setShowConfirm(false);
  };

  const calculateTotalMarks = () => {
    let marks = 0;
    data.forEach((question, index) => {
      if (question.Answer === selectedAnswers[index]) {
        marks++;
      }
    });
    setTotalMarks(marks);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {data.length > 0 && currentIndex < data.length && (
        <div key={currentIndex} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Question {currentIndex + 1}: {data[currentIndex].Question}</p>
          {['Option1', 'Option2', 'Option3', 'Option4'].map((option, optionIndex) => (
            <div key={optionIndex} style={{ marginBottom: '5px' }}>
              <input
              className='checkbox checkbox-secondary'
                type="checkbox"
                id={`option-${currentIndex}-${optionIndex}`}
                name={`option-${currentIndex}`}
                value={data[currentIndex][option]}
                checked={selectedAnswers[currentIndex] === data[currentIndex][option]}
                onChange={() => handleOptionChange(currentIndex, optionIndex, data[currentIndex][option])}
              />
              <label htmlFor={`option-${currentIndex}-${optionIndex}`} style={{ marginLeft: '5px' }}>{data[currentIndex][option]}</label>
            </div>
          ))}
          {showConfirm && <button className="btn btn-primary w-fit" onClick={handleConfirm}>Confirm</button>}
          {currentIndex !== 0 && <button className="btn btn-primary w-fit " onClick={handlePrevious}>Previous</button>}
          {currentIndex !== data.length - 1 && <button className=" btn btn-primary w-fit" onClick={handleNext}>Next</button>}
        </div>
      )}
      <button className="btn btn-primary w-fit " onClick={calculateTotalMarks}>Calculate Total Marks</button>
      {totalMarks > 0 && (
        <div>
          <h2>Total Marks: {totalMarks}</h2>
          
        </div>
      )}
    </div>
  );
}

export default Quiz;
