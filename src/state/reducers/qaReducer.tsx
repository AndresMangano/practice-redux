import { Action } from '.././actions/index'
import { ActionType } from '../action-types';

export type StateItem = {
    question: string,
    answer: string,
}

export type State = {
    qaArray: StateItem[]
}

export const initialState = {
    qaArray: 
    [
        {
            question: 'How far away is the Moon from the Earth?',
            answer: 'The moon is around 384,400KM away from Earth'
        },
        {
            question: 'What is the biggest mountain in the world?',
            answer: 'The biggest mountain in the world is Mt. Everest located in Nepal'
        }
    ]
}


const reducer = (state: State = initialState, action: Action) => {
    switch(action.type) {
        case ActionType.UPLOAD:
            return {...state,
                qaArray: [...state.qaArray,
                    {
                        question: action.payload.question,
                        answer: action.payload.answer
                    }
                ]
            }
        case ActionType.REMOVE:
            return {...state,
                qaArray: state.qaArray.filter((_, index) => index !== action.payload.index)
            }
        default:
            return state;
    }
}

export default reducer 