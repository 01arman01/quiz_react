import React from 'react';
import s from './Loader.module.css'
function Loader(props) {
    return (
        <div className={s.loaderContainer}>
            <div className={s.loader}></div>
            <p>Loading questions...</p>
        </div>
    );
}

export default Loader;