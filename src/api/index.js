import { v4 } from "uuid";

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: "hey",
      completed: true
    },
    {
      id: v4(),
      text: "ho",
      completed: true
    },
    {
      id: v4(),
      text: "let’s go",
      completed: false
    }
  ]
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchTodos = (filter) => {
  // if (Math.random() > 0.5) {
  //   throw new Error("Failed to fetch todos");
  // }

  return delay(500).then((v) => {
    switch (filter) {
      case "all":
        return fakeDatabase.todos;
      case "completed":
        return fakeDatabase.todos.filter((t) => t.completed);
      case "active":
        return fakeDatabase.todos.filter((t) => !t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}.`);
    }
  });
};

export const addTodo = (text) =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });

export const toggleTodo = (id) =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find((t) => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
