import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isExpired: false
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isExpired) {
    return (
      <div className="text-center my-4 md:my-6">
        <div className="text-2xl sm:text-3xl md:text-4xl font-Exo2 font-bold text-white animate-pulse">
          The event has started!
        </div>
      </div>
    );
  }

  return (
    <div className="text-center my-4 md:my-6">
      <div className="flex justify-center gap-2 sm:gap-3 md:gap-6 lg:gap-8">
        <div className="flex flex-col items-center">
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold font-Exo2 text-white bg-darkblue border-2 border-white/30 px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-2 md:py-3 rounded-lg min-w-[50px] sm:min-w-[60px] md:min-w-[70px] lg:min-w-[80px]">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm md:text-base font-Exo2 mt-1 md:mt-2 text-white">DAYS</div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold font-Exo2 text-white bg-darkblue border-2 border-white/30 px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-2 md:py-3 rounded-lg min-w-[50px] sm:min-w-[60px] md:min-w-[70px] lg:min-w-[80px]">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm md:text-base font-Exo2 mt-1 md:mt-2 text-white">HOURS</div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold font-Exo2 text-white bg-darkblue border-2 border-white/30 px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-2 md:py-3 rounded-lg min-w-[50px] sm:min-w-[60px] md:min-w-[70px] lg:min-w-[80px]">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm md:text-base font-Exo2 mt-1 md:mt-2 text-white">MINUTES</div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold font-Exo2 text-white bg-darkblue border-2 border-white/30 px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-2 md:py-3 rounded-lg min-w-[50px] sm:min-w-[60px] md:min-w-[70px] lg:min-w-[80px]">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm md:text-base font-Exo2 mt-1 md:mt-2 text-white">SECONDS</div>
        </div>
      </div>
    </div>
  );
}
