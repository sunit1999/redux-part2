import React from "react";
import Footer from "./Footer";
import AddTodoContainer from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";

import { useParams } from "react-router-dom";

const App = () => {
  const params = useParams();
  return (
    <div>
      <AddTodoContainer />
      <VisibleTodoList filter={params.filter || "all"} />
      <Footer />
    </div>
  );
};

export default App;
