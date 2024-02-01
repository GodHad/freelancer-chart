import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";

import { socketState } from "./reducers/socketReducer/actionTypes";
import { BlogState } from "./reducers/blogsReducer/actionTypes";
import { initialBlogState } from "./reducers/blogsReducer/reducer";
import socketReducer, { initialSocketReducer } from "./reducers/socketReducer/reducer";
import { blogReducer } from "./reducers/blogsReducer/reducer";

const reducer = combineReducers({
    socketReducer,
    blogReducer
})

export default function configureStore(preloadedState: any) {
    const store = createStore(reducer, preloadedState, applyMiddleware(thunk));
    return store
}

export interface RootState {
    socketReducer: socketState,
    blogReducer: BlogState
}

export const initialRootState: RootState = {
    socketReducer: initialSocketReducer,
    blogReducer: initialBlogState
}

export const store = configureStore(initialRootState)