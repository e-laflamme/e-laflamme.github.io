import React, { useState, useEffect } from 'react';

const ComingSoonCard = () => {
    const [progress, setProgress] = useState(0);
    const [isLaunched, setIsLaunched] = useState(false);

    const calculateProgress = () => {
        const startDate = new Date('2025-09-01T00:00:00').getTime();
        const endDate = new Date('2025-10-30T23:59:59').getTime();
        const now = new Date().getTime();

        const timeElapsed = Math.max(0, now - startDate);
        const totalDuration = endDate - startDate;

        let percentage = 0;

        if (now >= endDate) {
            percentage = 100;
            setIsLaunched(true);
        } else if (totalDuration > 0) {
            percentage = Math.min(99.9, (timeElapsed / totalDuration) * 100);
            setIsLaunched(false);
        }

        return Math.round(percentage * 100) / 100;
    };

    useEffect(() => {
        setProgress(calculateProgress());

        const intervalId = setInterval(() => {
            setProgress(calculateProgress());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const customStyles = `
   
    .banner-root {
        font-family: var(--primary-font);
        
       .note {
           font-size: 18px !important;
           font-weight: 500;
           
       }
    }

    .text-bright-pink {
        color: var(--bright-pink);
    }

    .bg-bright-pink {
        background-color: var(--bright-pink);
    }
    
    .border-bright-pink {
        border-color: var(--bright-pink);
    }

    .loading-bar {
        background-color: var(--light-pink);
        box-shadow: 0 0 10px 2px var(--bright-pink);
        transition: width 0.5s ease-out;
    }
    
  `;

    const statusText = isLaunched
        ? "Feature: Launched!"
        : "Feature Development: In Progress";

    const iconAnimationClass = isLaunched ? '' : 'animate-spin';

    return (
        <div className="banner-root max-w-3xl w-full">
            <style>{customStyles}</style>

            {/* The actual "Coming Soon" card */}
            <div className={`mt-4 p-5 rounded-lg bg-bright-pink text-white transition duration-500 hover:shadow-lg hover:shadow-[#C84AA4]/50`}>
                <div className="flex items-center space-x-4 mb-4">

                    <svg
                        className={`w-8 h-8 text-white ${iconAnimationClass}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>

                    <h2 className="text-2xl font-bold tracking-tight">
                        {statusText}
                    </h2>
                </div>

                <div className="w-full bg-gray-600 rounded-full h-3 mb-2 overflow-hidden">
                    <div
                        className={`loading-bar h-3 rounded-full`}
                        style={{ width: `${progress}%` }}
                        role="progressbar"
                        aria-valuenow={Math.round(progress)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>

                <div className="flex justify-between text-sm font-medium text-white/90 mt-3">
          <span className="flex items-center">
            <span className="mr-1">🚀</span>
            Anticipated Launch:
          </span>
                    <span className="font-extrabold tracking-wide">
            Late October 2025
          </span>
                </div>
            </div>

            {/* The required final polish message */}
            <p className={`note mt-4 opacity-75`}>
                Thanks for checking out the site! We're putting on finishing touches. Check back soon!
            </p>

        </div>
    );
};

const ComingSoon = () => {
    return <ComingSoonCard />;
}

export default ComingSoon;
