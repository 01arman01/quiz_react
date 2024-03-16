import React, {useState} from 'react';

function DataCounter(props) {
    const [step, setStep] = useState(0)
    const [count, setCoun6t] = useState(0)


    const date = new Date("june 21 2027")
    date.setDate(date.getDate() + count)

    const defineStep = (e) => {
        setStep(+e.target.value)
    }
   const defineCount = (e)=>{
        setCoun6t(+e.target.value)
   }
   const inc =()=>{
        setCoun6t(count=>count+step)
   }
   const dec = ()=>{
       setCoun6t(count=>count-step)
   }

   const resetFunc = ()=>{
        setCoun6t(0)
       setStep(0)
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