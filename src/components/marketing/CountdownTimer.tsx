
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  endTime: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime - Date.now();
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex items-center gap-2 bg-black/5 rounded-full py-1.5 px-4 backdrop-blur-sm border border-black/5">
      <Clock size={14} className="text-ml-blue" />
      <span className="text-[11px] font-black text-gray-700 uppercase tracking-tighter">Expira em:</span>
      <div className="flex items-center gap-1 font-mono text-[14px]">
        <span className="font-black text-gray-800">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-gray-400">:</span>
        <span className="font-black text-gray-800">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-gray-400">:</span>
        <span className="font-black text-ml-blue">{String(timeLeft.seconds).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
