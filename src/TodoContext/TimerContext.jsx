import React from 'react';

const TimerContext = React.createContext();

function TimerContextProvider({children}){
    const [isRunning, setIsRunning] = React.useState(false);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);


    React.useEffect(() => {
        let interval;
        console.log(minutes);
        console.log(seconds);
        if (isRunning){
            interval = setInterval(() => {
                if (seconds > 0 ){
                    setSeconds(seconds-1);
                } else if (seconds === 0){
                    if (minutes === 0){
                        clearInterval(interval)
                    } else{
                        setMinutes(minutes-1);
                        setSeconds(59);
                    }
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    },);

    return(
        <TimerContext.Provider value={{
            isRunning, 
            setIsRunning,
            minutes, 
            setMinutes,
            seconds,
            setSeconds,
/*             ActualMins,
            ActualSegs */
        }}>
            {children}
        </TimerContext.Provider>
    )
}

export {TimerContext,TimerContextProvider};