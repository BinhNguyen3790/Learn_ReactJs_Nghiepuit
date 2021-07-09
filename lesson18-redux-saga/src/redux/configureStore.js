import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./../reducers";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldNotReload: false,
      })
    : compose;

const configureStore = () => {
  const middlewares = [
    // List middleware
  ];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  return store;
};

export default configureStore;
