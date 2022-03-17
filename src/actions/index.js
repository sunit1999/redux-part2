import { normalize } from "normalizr";
import * as schema from "./schema";
import * as api from "../api";
import { getIsFetching } from "../reducers";

export const toggleTodo = (id) => (dispatch) => {
  api.toggleTodo(id).then((response) => {
    dispatch({
      type: "TOGGLE_TODO_SUCCESS",
      response: normalize(response, schema.todo)
    });
  });
};

export const fetchTodos = (filter) => async (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve("failed");
  }

  dispatch({
    type: "FETCH_TODOS_REQUEST",
    filter
  });

  let response = null;
  try {
    response = await api.fetchTodos(filter);
  } catch (e) {
    dispatch({
      type: "FETCH_TODOS_FAILURE",
      filter,
      errorMessage: e.message || "Something went wrong."
    });
    return await Promise.resolve("failed");
  }

  dispatch({
    type: "FETCH_TODOS_SUCCESS",
    filter,
    response: normalize(response, schema.arrayOfTodos)
  });

  return await Promise.resolve("success");
};

export const addTodo = (text) => (dispatch) => {
  api.addTodo(text).then((response) => {
    dispatch({
      type: "ADD_TODO_SUCCESS",
      response: normalize(response, schema.todo)
    });
  });
};
