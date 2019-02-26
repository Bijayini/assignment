import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import DevTools, { persistState } from "redux-devtools";

import rootReducer from "./reducers/rootReducer";

const middleware = [thunk];
let enhancer;

if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(...middleware)
    );
} else {
    enhancer = compose(
        applyMiddleware(...middleware),
        DevTools.instrument(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    );
}

const store = createStore(
    rootReducer,
    {},
    enhancer
);

export default store;