import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './Nav';
import hero from "/Hero_bg.png";

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
    < >
    <Nav/>
    <div style={{backgroundImage: `url(${hero})`}}  >  
    <div className=' mt-14 ml-6'  >
      {data.length > 0 && currentIndex < data.length && (
        <div key={currentIndex} className=' mb-5 border-secondary-content p-3 rounded' style={{ border: '1px solid #ccc'}}>
          <p style={{ fontWeight: 'bold', marginBottom: '5px' }} className=' text-left'>Question {currentIndex + 1}: {data[currentIndex].Question}</p>
          {['Option1', 'Option2', 'Option3', 'Option4'].map((option, optionIndex) => (
            <div key={optionIndex} className=' mb-1' >
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
          {showConfirm && <button className="btn btn-primary w-fit m-2" onClick={handleConfirm}>Confirm</button>}
          {currentIndex !== 0 && <button className="btn btn-primary w-fit m-2" onClick={handlePrevious}>Previous</button>}
          {currentIndex !== data.length - 1 && <button className=" btn btn-primary w-fit m-2" onClick={handleNext}>Next</button>}
        </div>
      )}
      {currentIndex === data.length - 1 && <button className="btn btn-primary w-fit " onClick={calculateTotalMarks}>Calculate Total Marks</button>}
      {totalMarks > 0 && (
        <div>
          <h2>Total Marks: {totalMarks}</h2>
          
        </div>
      )}
    </div>
    </div>
    </>
  );
}

export default Quiz;
