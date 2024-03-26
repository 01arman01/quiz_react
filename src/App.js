import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {useEffect, useReducer} from "react";
import {reducer} from './reduser'
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";
import StartPage from "./components/StartPage/StartPage";
import Question from "./components/Question/Question";
import NextButton from "./components/NextButton/NextButton";
import Progress from "./components/Progress/Progress";
import FinishScreen from "./components/FinishScreen/FinishScreen";
// import DataCounter from "./DataCounter";

const initialState = {
    questions: [],

    //'loading','error','ready','active','finished'
    status: 'loading',
    index: 0,
    answer: null,
    points: 0,
    highScore:0

}

function App() {


    const [{questions, status, index, answer, points, highScore}, dispatch,] = useReducer(reducer, initialState)
    const numQuestions = questions.length
    // let maxPosiblePoints  = 0
    // questions.forEach(question=>{
    //     maxPosiblePoints =  question.points + maxPosiblePoints
    // })

    useEffect(() => {
        fetch('http://192.168.34.11:9000/questions')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                return dispatch({type: 'dataReceived', payload: data})
            })
            .catch(err => dispatch({type: 'dataFailed'}))
    }, []);
    console.log(points)

    const maxPossiblePoints = questions.reduce((prev, cur)=>prev+cur.points,0)

    return (
        <>
            <div className="App">
                <Header/>
                {/*<Loader/>*/}
                <Main>
                    {status === 'loading' && <Loader/>}
                    {status === 'error' && <Error/>}
                    {status === 'ready' && <StartPage
                        numQuestions={numQuestions}
                        dispatch={dispatch}
                    />}
                    {status === 'active' && <Progress
                        index={index }
                        numQuestions={questions.length}
                        points={points}
                        maxPossiblePoints={maxPossiblePoints}
                        answer={answer}


                    />}
                    {status === 'active' && <Question
                        question={questions[index]}
                        dispatch={dispatch}
                        answer={answer}
                    />}
                </Main>
            </div>
            <div className='footer'>
                {/*<NextButton dispatch={dispatch} answer={answer}/>*/}
                <NextButton
                    dispatch={dispatch}
                    answer={answer}
                    index={index }
                    numQuestions={questions.length}
                />
            </div>
            {status === 'finished' && <FinishScreen
             points={points}
             maxPossiblePoints={maxPossiblePoints}
             highScore={highScore}

            />}
        </>
        // <div className='App'>
        //     <DataCounter />

        // </div>
    );
}

export default App;