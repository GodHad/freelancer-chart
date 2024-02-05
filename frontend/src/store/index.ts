import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";

import { socketState } from "./reducers/socketReducer/actionTypes";
import { BlogState } from "./reducers/blogsReducer/actionTypes";
import { initialBlogState } from "./reducers/blogsReducer/reducer";
import socketReducer, { initialSocketReducer } from "./reducers/socketReducer/reducer";
import { blogReducer } from "./reducers/blogsReducer/reducer";
import { bidReducer, initialBidState } from "./reducers/bidsReducer/reducer";
import { BidState } from "./reducers/bidsReducer/actionTypes";
import { authReducer } from "./reducers/authReducer/reducer";
import { AuthState } from "./reducers/authReducer/actionTypes";
import { initialSkillState, skillReducer } from "./reducers/skillReducer/reducer";
import { SkillState } from "./reducers/skillReducer/actionTypes";

const reducer = combineReducers({
    socketReducer,
    blogReducer,
    bidReducer,
    authReducer,
    skillReducer
})

export default function configureStore(preloadedState: any) {
    const store = createStore(reducer, preloadedState, applyMiddleware(thunk));
    return store
}

export interface RootState {
    socketReducer: socketState,
    blogReducer: BlogState,
    bidReducer: BidState,
    authReducer: AuthState,
    skillReducer: SkillState
}

export const initialRootState: RootState = {
    socketReducer: initialSocketReducer,
    blogReducer: initialBlogState,
    bidReducer: initialBidState,
    authReducer: null,
    skillReducer: initialSkillState
}

export const store = configureStore(initialRootState)