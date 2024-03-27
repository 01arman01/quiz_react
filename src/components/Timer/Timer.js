import React, {useEffect} from 'react';
import  s  from "./Timer.module.css"
function Timer({secondsRemaining,dispatch}) {

    useEffect(() => {

        const timer =
            setInterval(function () {
                dispatch({type: 'endTimer'})
            }, 2000)


            return  ()=> clearInterval(timer)


    }, []);
    return (
        <div className={s.timer}>
            {secondsRemaining}
        </div>
    );
}
export default Timer;