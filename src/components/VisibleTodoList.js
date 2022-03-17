import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { getErrorMessage, getIsFetching, getVisibleTodos } from "../reducers";
import FetchError from "./FetchError";
import TodoList from "./TodoList";

let VisibleTodoList = (props) => {
  useEffect(() => {
    fetchData();
  }, [props.filter]);

  const fetchData = () => {
    const { filter, fetchTodos } = props;
    fetchTodos(filter).then(console.log);
  };

  const { toggleTodo, todos, isFetching, errorMessage } = props;

  if (isFetching && !todos.length) {
    return <p>Loading...</p>;
  }

  if (errorMessage && !todos.length) {
    return (
      <FetchError errorMessage={errorMessage} onRetry={() => fetchData()} />
    );
  }

  return <TodoList todos={todos} onTodoClick={toggleTodo} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state, ownProps.filter),
    isFetching: getIsFetching(state, ownProps.filter),
    errorMessage: getErrorMessage(state, ownProps.filter)
  };
};

VisibleTodoList = connect(mapStateToProps, actions)(VisibleTodoList);

export default VisibleTodoList;
