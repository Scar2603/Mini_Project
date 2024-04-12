import React, { useEffect, useState } from "react";
import axios from "axios";
import hero from "/Hero_bg.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PieChart from "./Piechart";

function Quiz() {
  const [data, setData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [totalMarks, setTotalMarks] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [typesCorrect, setTypesCorrect] = useState({});
  const [typesIncorrect, setTypesIncorrect] = useState({});
  const [calculated, setCalculated] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  const [userData, setUserData] = useState({
    labels: ["Correct Answers", "Incorrect Answers"],
    datasets: [
      {
        label: "Quiz Results",
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ["#FF7426", "#FDF8EE"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0 && !calculated) {
        setTimeLeft(timeLeft - 1);
      } else {
        calculateTotalMarks();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    setUserData((prevUserData) => {
      // If both correctAnswers and incorrectAnswers are 0, set data to an empty array
      if (correctAnswers === 0 && incorrectAnswers === 0) {
        return {
          ...prevUserData,
          datasets: [
            {
              ...prevUserData.datasets[0],
              data: [],
            },
          ],
        };
      }

      return {
        ...prevUserData,
        datasets: [
          {
            ...prevUserData.datasets[0],
            data: [correctAnswers, incorrectAnswers],
          },
        ],
      };
    });
  }, [correctAnswers, incorrectAnswers]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/auth/question/"
        );
        const shuffledQuestions = shuffleArray(response.data.questions);
        setData(shuffledQuestions.slice(0, 20));
        setSelectedAnswers(new Array(20).fill(""));
        setAnsweredQuestions(new Array(20).fill(false));
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
    const isCorrect = value === data[index].Answer;
    const qType = data[index]["Q_type "];

    if (isCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
      setTypesCorrect((prevTypesCorrect) => ({
        ...prevTypesCorrect,
        [qType]: (prevTypesCorrect[qType] || 0) + 1,
      }));
    } else {
      setIncorrectAnswers((prevIncorrectAnswers) => prevIncorrectAnswers + 1);
      setTypesIncorrect((prevTypesIncorrect) => ({
        ...prevTypesIncorrect,
        [qType]: (prevTypesIncorrect[qType] || 0) + 1,
      }));
    }

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = value;
    setSelectedAnswers(newSelectedAnswers);

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[index] = true;
    setAnsweredQuestions(newAnsweredQuestions);

    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setCurrentIndex(currentIndex + 1);
    setShowConfirm(false);
    updateChartData();
  };

  const handleNext = () => {
    if (answeredQuestions[currentIndex]) {
      setCurrentIndex(currentIndex + 1);
      setShowConfirm(false);
      updateChartData();
    } else {
      toast.error(
        "Please answer the current question before moving to the next one."
      );
    }
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
    console.log(correctAnswers, incorrectAnswers);
    updateChartData();
    setCalculated(true);
  };

  const updateChartData = () => {
    const correctAnswersCount = selectedAnswers.filter(
      (answer, index) => answer === data[index].Answer
    ).length;
    const incorrectAnswersCount = data.length - correctAnswersCount;
    setUserData({
      ...userData,
      datasets: [
        {
          ...userData.datasets[0],
          data: [correctAnswersCount, incorrectAnswersCount],
        },
      ],
    });
  };
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <ToastContainer />

      <div style={{ backgroundImage: `url(${hero})` }}>
        <div className="mt-14 ml-6">
          <div className="timer text-2xl font-bold mb-4">
            Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>

          {data.length > 0 && currentIndex < data.length && (
            <div
              key={currentIndex}
              className="mb-5 border-secondary-content p-3 rounded"
              style={{ border: "1px solid #ccc" }}
            >
              <p
                style={{ fontWeight: "bold", marginBottom: "5px" }}
                className="text-left"
              >
                Question {currentIndex + 1}: {data[currentIndex].Question}
              </p>
              {["Option1", "Option2", "Option3", "Option4"].map(
                (option, optionIndex) => (
                  <div key={optionIndex} className="mb-1">
                    <input
                      className="checkbox checkbox-secondary"
                      type="checkbox"
                      id={`option-${currentIndex}-${optionIndex}`}
                      name={`option-${currentIndex}`}
                      value={data[currentIndex][option]}
                      checked={
                        selectedAnswers[currentIndex] ===
                        data[currentIndex][option]
                      }
                      disabled={calculated === true}
                      onChange={() =>
                        handleOptionChange(
                          currentIndex,
                          optionIndex,
                          data[currentIndex][option]
                        )
                      }
                    />
                    <label
                      htmlFor={`option-${currentIndex}-${optionIndex}`}
                      style={{ marginLeft: "5px" }}
                    >
                      {data[currentIndex][option]}
                    </label>
                  </div>
                )
              )}
              {showConfirm && currentIndex !== data.length - 1 && (
                <button
                  className="btn btn-primary w-fit m-2"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              )}
              {currentIndex !== 0 && (
                <button
                  className="btn btn-primary w-fit m-2"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}
              {currentIndex !== data.length - 1 && (
                <button
                  disabled={!answeredQuestions[currentIndex]}
                  className="btn btn-primary w-fit m-2"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
            </div>
          )}
          {currentIndex === data.length - 1 && (
            <button
              className="btn btn-primary w-fit "
              onClick={calculateTotalMarks}
            >
              Calculate Total Marks
            </button>
          )}
          {totalMarks > 0 ? (
            <div className="flex items-center justify-start mt-11">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Total Marks: {totalMarks}
                </h2>
                <div className="w-80">
                  {/* Display separate pie charts for each question type */}
                  <div className="grid grid-cols-4 gap-x-96">
                    {Object.keys(typesCorrect).map((type, index) => (
                      <div key={index} className="mb-5 w-64 h-64 ml-12">
                        <h3 className="text-xl text-center font-bold">
                          {type}
                        </h3>
                        <PieChart
                          className="w-64 h-64 "
                          chartData={{
                            labels: ["Correct Answers", "Incorrect Answers"],
                            datasets: [
                              {
                                label: "Quiz Results",
                                data: [
                                  typesCorrect[type],
                                  typesIncorrect[type],
                                ],
                                backgroundColor: ["#FF7426", "#FDF8EE"],
                                borderColor: "black",
                                borderWidth: 2,
                              },
                            ],
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            calculated && (
              <div>
                <h2 className=" mt-48 text-2xl font-bold text-center mb-4">
                  Total Marks: {totalMarks}
                </h2>
                <h3 className="text-2xl font-bold text-center mb-4">
                  Better luck next time!
                </h3>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Quiz;
