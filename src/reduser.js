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
                status: 'active'
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
                highScore: state.highScore < state.points? state.points:state.highScore,
                // index:0,
                answer: null
            }

        default:
            throw new Error("Action unknown")
    }
}