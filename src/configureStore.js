import { createStore, applyMiddleware } from "redux";
import todoApp from "./reducers";
// import promise from "redux-promise";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
// const addLoggingToDispatch = (store) => {
//   const rawDispatch = store.dispatch;

//   if (!console.group) {
//     return rawDispatch;
//   }

//   return (action) => {
//     console.group(action.type);
//     console.log("%c prev state", "color: gray", store.getState());
//     console.log("%c action", "color: yellow", action);
//     const returnValue = rawDispatch(action);
//     console.log("%c next state", "color: aqua", store.getState());
//     console.groupEnd(action.type);
//     return returnValue;
//   };
// };

// const addPromiseSupportToDispatch = (store) => {
//   const rawDispatch = store.dispatch;

//   return (action) => {
//     if (typeof action.then === "function") {
//       return action.then(rawDispatch);
//     }

//     return rawDispatch(action);
//   };
// };

// const thunk = (store) => (next) => (action) => {
//   typeof action === "function" ? action(store.dispatch) : next(action);
// };

export const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  return createStore(todoApp, applyMiddleware(...middlewares));
};
