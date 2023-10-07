import React, { useState, useEffect, useRef } from 'react';

function InterviewPage() {
    const [stream, setStream] = useState<MediaStream | null>(null);
    const videoElement = useRef<HTMLVideoElement | null>(null);

    const questions = [
        'Question 1: Describe your experience with React.',
        'Question 2: What are your strengths as a developer?',
        'Question 3: Explain a challenging problem you have solved.',

    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timer, setTimer] = useState<number | null>(null);
    const [remainingTime, setRemainingTime] = useState<number | null>(null); // Remaining time for each question in seconds
    const questionTimeLimit = 180; // Time limit for each question in seconds
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true); // Enable "Next Question" button only when timer is 0

    useEffect(() => {
        return () => {
            if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, [stream]);

    async function startInterview() {
        try {
            const userMediaStream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            });
            setStream(userMediaStream);
            // startQuestionTimer()
            if (videoElement.current) {
                videoElement.current.srcObject = userMediaStream;
                videoElement.current.muted = true;
            }

            // Start the timer when the interview starts
            startQuestionTimer();
        } catch (error) {
            console.error('Error accessing camera and microphone:', error);
        }
    }

    function stopInterview() {
        if (videoElement.current && videoElement.current.srcObject instanceof MediaStream) {
            const tracks = (videoElement.current.srcObject as MediaStream).getTracks();
            tracks.forEach(track => track.stop());
            setStream(null);

            // Clear the timer when stopping the interview
            clearQuestionTimer();
        }
    }

    function startQuestionTimer() {
        clearQuestionTimer(); // Clear any previous timer

        setRemainingTime(questionTimeLimit); // Set the initial remaining time for the question

        const questionTimer = setInterval(() => {
            if (remainingTime !== null && remainingTime > 0) {
                // Update remaining time
                setRemainingTime(prevTime => prevTime - 1);
            } else {
                // Time is up, enable "Next Question" button
                setNextButtonDisabled(false);
                // Clear the timer when time is up
                clearQuestionTimer();
            }
        }, 1000); // Update the timer every second

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
            // If there are more questions, move to the next question
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setNextButtonDisabled(true); // Disable "Next Question" button for the next question
            startQuestionTimer(); // Start the timer for the next question
        } else {
            // No more questions, stop the interview
            stopInterview();
        }
    }

    return (
        <div className='max-w-full bg-blue-900 h-screen text-white m-auto text-center'>
            <h1 className='text-5xl text-center p-5'>Interview Preparation</h1>
            <div>
                {currentQuestionIndex < questions.length ? (
                    <div >
                        <h2 className='text-2xl'>{questions[currentQuestionIndex]}</h2>
                        <p>Time remaining: {remainingTime !== null ? `${Math.floor(remainingTime / 60)}:${remainingTime % 60 < 10 ? '0' : ''}${remainingTime % 60}` : '0:00'}</p>
                        <div className='flex justify-center item-center'>
                            <video
                                ref={videoElement}
                                autoPlay
                                playsInline
                                className=' h-64 w-64'
                                draggable="false"

                            ></video>
                        </div>

                        <button
                            id="nextButton"
                            onClick={moveToNextQuestion}
                            disabled={nextButtonDisabled}
                        >
                            Next Question
                        </button>
                    </div>
                ) : (
                    <p>Interview completed</p>
                )}
                <button id="startButton" onClick={startInterview}>
                    Start Interview
                </button>
                <button id="stopButton" onClick={stopInterview}>
                    Stop Interview
                </button>
            </div>
        </div>
    );
}

export default InterviewPage;