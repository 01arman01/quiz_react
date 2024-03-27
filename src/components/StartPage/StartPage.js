import React from 'react';
import s from './StartPage.module.css'
import StartButton from "../StartButton/StartButton";

function Loader({numQuestions,dispatch}) {
    return (
        <div className={s.loader}>
            <h2>Welcome to The React Quiz!</h2>
            <h3>{numQuestions} questions to test your React mastery</h3>
            <StartButton
                func={()=>{
                    dispatch({type:'start'})
                }}
                buttonName={` Let's start`}
            />
        </div>
    );
}

export default Loader;