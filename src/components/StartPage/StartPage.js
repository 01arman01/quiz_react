import React from 'react';
import s from './StartPage.module.css'

function Loader({numQuestions,dispatch}) {
    return (
        <div className={s.loader}>
            <h2>Welcome to The React Quiz!</h2>
            <h3>{numQuestions} questions to test your React mastery</h3>
            <button className={s.btn} onClick={()=>{
                dispatch({type:'start'})
            }}> Let's start</button>
        </div>
    );
}

export default Loader;