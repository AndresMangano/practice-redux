import { ActionType } from '.././action-types/index' 

type UploadAction = {
    type: ActionType.UPLOAD
    payload: {
        question: string,
        answer: string,
    }
}

type RemoveAction = {
    type: ActionType.REMOVE
    payload: {
        index: number,
    }
}

export type Action = UploadAction | RemoveAction