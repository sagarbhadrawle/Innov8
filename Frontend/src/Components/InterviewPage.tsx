import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function InterviewPage() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoElement = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();

  const questions = [
    "Question 1: Describe your experience with React.",
    "Question 2: What are your strengths as a developer?",
    "Question 3: Explain a challenging problem you have solved.",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const questionTimeLimit = 180;
  const [interviewInProgress, setInterviewInProgress] = useState(false);

  useEffect(() => {
    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [stream]);

  async function startInterview() {
    if (interviewInProgress) {
      return;
    }
    try {
      const userMediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setStream(userMediaStream);
      if (videoElement.current) {
        videoElement.current.srcObject = userMediaStream;
        videoElement.current.muted = true;
      }
      setInterviewInProgress(true);
      startQuestionTimer();
    } catch (error) {
      console.error("Error accessing camera and microphone:", error);
    }
  }

  function stopInterview() {
    if (
      videoElement.current &&
      videoElement.current.srcObject instanceof MediaStream
    ) {
      const tracks = (
        videoElement.current.srcObject as MediaStream
      ).getTracks();
      tracks.forEach((track) => track.stop());
      setStream(null);
      clearQuestionTimer();
      setInterviewInProgress(false);
      navigate("/dashboard");
    }
  }

  function startQuestionTimer() {
    clearQuestionTimer();
    setRemainingTime(questionTimeLimit);
    const questionTimer = setInterval(() => {
      if (remainingTime !== null) {
        if (remainingTime > 0) {
          setRemainingTime((prevTime) =>
            prevTime !== null ? prevTime - 1 : prevTime
          );
        } else {
          moveToNextQuestion(); // Automatically move to the next question when the timer runs out
        }
      }
    }, 1000);

    setTimer(questionTimer);
  }

  function clearQuestionTimer() {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  }

  function moveToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setRemainingTime(questionTimeLimit); // Reset the timer for the next question
      startQuestionTimer(); // Start the timer for the next question
    } else {
      stopInterview();
    }
  }

  return (
    <div className="max-w-full bg-blue-900 h-screen text-white m-auto text-center">
      <h1 className="text-5xl text-center p-5">Interview Preparation</h1>
      <div>
        {currentQuestionIndex < questions.length ? (
          <div>
            <h2 className="text-2xl">{questions[currentQuestionIndex]}</h2>
            <p>
              Time remaining:{" "}
              {remainingTime !== null
                ? `${Math.floor(remainingTime / 60)}:${(remainingTime % 60)
                    .toString()
                    .padStart(2, "0")}`
                : "0:00"}
            </p>
            <div className="flex justify-center items-center">
              <video
                ref={videoElement}
                autoPlay
                playsInline
                className="h-64 w-64"
                draggable="false"
              ></video>
            </div>

            <button
              id="nextButton"
              className="bg-sky-500 p-1 w-[10rem] rounded-full hover:shadow-md hover:font-semibold hover:shadow-white m-2"
              onClick={moveToNextQuestion}
            >
              Next Question
            </button>
          </div>
        ) : (
          <p>Interview completed</p>
        )}
        <button
          id="startButton"
          className="bg-sky-500 p-1 w-[10rem] rounded-full hover:shadow-md hover:font-semibold hover:shadow-white m-2"
          onClick={startInterview}
        >
          Start Interview
        </button>
        <button
          id="stopButton"
          className="bg-sky-500 p-1 w-[10rem] rounded-full hover:shadow-md hover:font-semibold hover:shadow-white m-2"
          onClick={stopInterview}
        >
          Stop Interview
        </button>
      </div>
    </div>
  );
}

export default InterviewPage;
