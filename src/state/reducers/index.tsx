import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers} from "redux"
import qaReducer from "./qaReducer";

const reducers = combineReducers({
    qa: qaReducer
})

export default reducers;

export type StateReducer = ReturnType<typeof reducers> 

export const useTypedSelector: TypedUseSelectorHook<StateReducer> = useSelector 