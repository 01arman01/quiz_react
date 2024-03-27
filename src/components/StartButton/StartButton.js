import React from 'react';
import s from './StartButton.module.css'
function StartButton({func,buttonName}) {
    return (
        <div className={s.startButtonContainer}>
            <button className={s.btn} onClick={func}>{buttonName}</button>
        </div>
    );
}
export default StartButton;