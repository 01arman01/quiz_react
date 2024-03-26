import React from 'react';
import s from './Main.module.css'

function Main({children}) {
    return (
        <main className={s.main}>
            {children}
        </main>
    );
}

export default Main;