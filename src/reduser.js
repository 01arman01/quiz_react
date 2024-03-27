import Error from "./components/Error/Error";

export function reducer(state, action) {
    switch (action.type) {
        case 'dataReceived':
            return {
                ...state,
                questions: action.payload,
                status: 'ready'
            }
        case 'dataFailed':
            return {
                ...state,
                status: 'error'
            }
        case 'start':
            return {
                ...state,
                status: 'active',
                // secondsRemaining: 6
            }
        case 'newAnswer':
            const question = state.questions.at(state.index)
            return {
                ...state,
                answer: action.payload,
                points: action.payload === question.correctOption ? state.points + question.points : state.points,

            }
        case 'nextQuestion':
            return {
                ...state,
                index: state.index + 1,
                answer: null
            }
        case 'finish':
            return {
                ...state,
                status: 'finished',
                highScore: state.highScore < state.points ? state.points : state.highScore,
                // index:0,
                answer: null
            }
        case'restart':
            return {
                ...state,
                // questions: [],

                //'loading','error','ready','active','finished'
                status: 'ready',
                index: 0,
                answer: null,
                points: 0,
                highScore: 0,
                secondsRemaining:6
            }
        case 'endTimer':
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status: state.secondsRemaining === 0? 'finished': state.status
            }
        default:
            throw new Error("Action unknown")
    }
}