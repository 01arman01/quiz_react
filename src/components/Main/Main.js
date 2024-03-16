import React from 'react';
import s from './Main.module.css'

function Main(props) {
    return (
        <div className={s.main}>
            <h2>Welcome to The React Quiz!</h2>
            <h3>15 questions to test your React mastery</h3>
                <button className={s.btn}> Let's start</button>
        </div>
    );
}

export default Main;