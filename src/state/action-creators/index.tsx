import { ActionType } from "../action-types"

export const addQA = (question: string, answer: string) => {
    return ({
            type: ActionType.UPLOAD,
            payload: {
                question,
                answer
            }
        })
}


export const removeQA = (index: number) => {
    return ({
            type: ActionType.REMOVE,
            payload: {
                index
            } 
        })
}
