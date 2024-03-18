import React, {useReducer} from 'react';

const reduser = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'dec':
            return {...state, count: state.count - state.step}
        case 'inc':
            return {...state, count: state.count + state.step}
        case "setCount":
            return {...state, count: action.payload}
        case 'setStep' :
            return {...state, step: action.payload}
        case 'reset':
            return {...state, count: 0, step: 1}
        default:
            throw new Error('undefined')
    }
    return {count: 0, step: 1}
}

function DataCounter(props) {
    const initialState = {count: 0, step: 1}
    const [state, dispatch] = useReducer(reduser, initialState)
    const {count, step} = state

    const date = new Date("june 21 2027")
    date.setDate(date.getDate() + count)

    const defineStep = (e) => {
        dispatch({type: 'setStep', payload: +e.target.value})
    }
    const defineCount = (e) => {
        dispatch({type: 'setCount', payload: +e.target.value})
    }
    const inc = () => {
        dispatch({type: 'inc', payload: step})
    }
    const dec = () => {
        dispatch({type: 'dec', payload: step})
    }

    const resetFunc = () => {
        dispatch({type: 'reset'})
    }

    return (
        <div className='counter'>
            <div>
                <input
                    type="range"
                    min='0'
                    max='10'
                    value={step}
                    onChange={defineStep}
                />
                <span>{step}</span>
            </div>
            <div>
                <button onClick={dec}>-</button>
                <input type='text'
                       value={count}
                       onChange={defineCount}
                />
                <button onClick={inc}>+</button>
            </div>
            <p>{date.toDateString()}</p>
            <button onClick={resetFunc}>Reset</button>
        </div>
    );
}

export default DataCounter;