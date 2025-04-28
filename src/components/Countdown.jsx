import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";

const Countdown = () => {
  const targetDate = "2025-10-11T00:00:00"; // Set your target date here

  // Calculate the remaining time
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      <div className="w-full sm:mt-0 bg-slate-50 md:py-20 py-5">
        <div className="w-full">
          <h2 className="w-full text-3xl text-center text-blue-600 font-semibold text-blue-50-600 md:text-4xl pb-10">
            Conference Countdown
          </h2>
        </div>
        <div className="flex items-center justify-center w-full">
          <p className="px-2 md:px-16 sm:w-[80vw] text-lg text-center font-semibold md:text-2xl my-2">
            "Dreams and aspirations are not easily obtained, but one of the hardest things to do is to keep going, to keep chasing. 
            Being a Predator, we will definitely strive for success, but we want you to be our support while carrying this responsibility. 
            Contribute to a cause, be a Predator with us."
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10 text-center">
          <div className="text-3xl md:text-5xl font-bold text-blue-600">
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Countdown;
