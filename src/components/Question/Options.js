import React from 'react';
import s from './Question.module.css'

function Options({question, answer, dispatch}) {


    return (
        <div className={s.option}>
            {question.options.map((option,index) => {
                return (
                    <button
                        className={`${s.btn} ${s.btnOption} 
                         ${answer === index ? s.answer :''} 
                         ${answer === 0 || answer ? (index === question.correctOption ? s.correct : s.wrong) : ''}                 
                        `}
                        key={option}
                        onClick={()=>dispatch({type:'newAnswer',payload: index})}
                        disabled={answer !== null}
                    >
                        {option}
                    </button>
                )
            })}
        </div>
    );
}

export default Options;