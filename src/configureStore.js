import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {

    const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        preloadedState,
        composeEnhencers(applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ))
    )

}