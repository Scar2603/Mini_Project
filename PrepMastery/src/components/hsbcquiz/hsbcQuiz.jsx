import React, { useEffect, useState } from "react";
import axios from "axios";
import hero from "/Hero_bg.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PieChart from "./Piechart";

function HsbcQuiz() {
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
          "http://127.0.0.1:8000/auth/hsbcquestion/"
        );
        const shuffledQuestions = shuffleArray(response.data.questions);
        setData(shuffledQuestions.slice(0, 20));
        setSelectedAnswers(new Array(20).fill(""));
        setAnsweredQuestions(new Array(20).fill(false));
        //console.log(response.data.questions);
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

  const styles = {
    container: {
      backgroundImage: `url(${hero})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh", // Ensures the background covers the entire viewport
    },

    questionContainer: {
      marginTop: "-0px",
      marginLeft: "200px",
      marginRight: "200px",
      backgroundColor: "#fcf9ee",
      padding: "20px", // Add padding for better visibility
      borderRadius: "10px", // Add border radius for rounded corners
      borderWidth: "2px",
    },
    questionBox: {
      marginBottom: "5px",
      padding: "10px",
      border: "1px solid black",
      borderRadius: "4px",
    },
    questionNumber: {
      fontWeight: "bold",
      marginBottom: "15px",
    },
    option: {
      borderWidth: "2px",
      marginBottom: "15px",
      padding: "10px",
      border: "1px solid black",
      borderRadius: "4px",
      cursor: "pointer",
    },
    optionHover: {
      backgroundColor: "#ffb992",
    },
    button: {
      width: "fit-content",
      marginLeft: "10px",
    },
    totalMarksContainer: {
      flex: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    totalMarksText: {
      fontSize: "2xl",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "4",
    },
    pieChartContainer: {
      width: "80",
    },
  };

  return (
    <>
      <ToastContainer />

      <div style={styles.container}>
        <div style={styles.questionContainer}>
          <div className="mt-14 ml-6">
            <div className="timer text-2xl font-bold mb-4">
              Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>

            {data.length > 0 && currentIndex < data.length && (
              <div
                key={currentIndex}
                className="mb-5 border-secondary-content p-3 rounded"
                style={styles.questionBox}
              >
                <p style={styles.questionNumber} className="text-left">
                  Question {currentIndex + 1}: {data[currentIndex].Question}
                </p>
                {["Option1", "Option2", "Option3", "Option4"].map(
                  (option, optionIndex) => (
                    <div key={optionIndex} className="mb-1">
                      <div
                        className="option-box"
                        style={{
                          ...styles.option,
                          ...(selectedAnswers[currentIndex] ===
                            data[currentIndex][option] && styles.optionHover),
                        }}
                        onClick={() =>
                          handleOptionChange(
                            currentIndex,
                            optionIndex,
                            data[currentIndex][option]
                          )
                        }
                      >
                        {data[currentIndex][option]}
                      </div>
                    </div>
                  )
                )}
                {showConfirm && currentIndex !== data.length - 1 && (
                  <button
                    className="btn btn-primary w-fit m-2"
                    onClick={handleConfirm}
                    style={styles.button}
                  >
                    Confirm
                  </button>
                )}
                {currentIndex !== 0 && (
                  <button
                    className="btn btn-primary w-fit m-2"
                    onClick={handlePrevious}
                    style={styles.button}
                  >
                    Previous
                  </button>
                )}
                {currentIndex !== data.length - 1 && (
                  <button
                    disabled={!answeredQuestions[currentIndex]}
                    className="btn btn-primary w-fit m-2"
                    onClick={handleNext}
                    style={styles.button}
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
                style={styles.button}
              >
                Calculate Total Marks
              </button>
            )}
            {totalMarks > 0 ? (
              <div className="flex items-center justify-start mt-11">
                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={styles.totalMarksText}
                  >
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
      </div>
    </>
  );
}

export default HsbcQuiz;
