import React, {useReducer, useState} from 'react';

const reduser = (state, action) => {
    console.log(state, action)
    if (action.type === 'inc') {
        state.count += action.payload
    } else if (action.type === 'dec') {
        state.count -= action.payload
    } else if (action.type === 'setCount') {
        state.count = action.payload
    }
    if (action.type === 'setStep'){
        state.step = action.payload
    }
    return state
}

function DataCounter(props) {
    // const [step, setStep] = useState(0)
    // const [count, setCoun6t] = useState(0)
    const initialState = {count: 0, step: 1}
    const [state, dispatch] = useReducer(reduser, initialState)


    const date = new Date("june 21 2027")
    date.setDate(date.getDate() + state.count)

    const defineStep = (e) => {
        dispatch({type:'setStep', payload: +e.target.value})
    }
    const defineCount = (e) => {
        // setCount(+e.target.value)
        dispatch({type: 'setCount', payload: +e.target.value})
    }
    const inc = () => {
        // setCount(count=>count+step)
        dispatch({type: 'inc', payload: state.step})
    }
    const dec = () => {
        // setCount(count=>count-step)
        dispatch({type: 'dec', payload: state.step})
    }

    const resetFunc = () => {
        // setCount(0)

    }

    return (
        <div className='counter'>
            <div>
                <input
                    type="range"
                    min='0'
                    max='10'
                    value={state.step}
                    onChange={defineStep}
                />
                <span>{state.step}</span>
            </div>
            <div>
                <button onClick={dec}>-</button>
                <input type='text'
                       value={state.count}
                    // disabled={true}
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