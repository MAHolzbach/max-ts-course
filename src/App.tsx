import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const todos = [{ id: "1", text: "Finish the course." }];
  const handleAddTodo = (text: string) => {
    console.log("HERE");
  };
  return (
    <div className="App">
      <NewTodo handleAddTodo={handleAddTodo} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
