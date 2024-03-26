import React from 'react';
import Options from "./Options";
import s from './Question.module.css'
function Question({question,dispatch,answer}) {
    console.log(question)
    return (
        <div className={s.questionContainer}>
            <h4>{question.question}</h4>
             <Options question={question} dispatch={dispatch} answer={answer} />
        </div>
    );
}
export default Question;