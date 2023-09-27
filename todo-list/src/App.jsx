/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Create feature X in the System",
      category: "Work",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Go to the gym",
      category: "Personal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Study React",
      category: "Study",
      isCompleted: false,
    },
  ])
  return (
    <div className="app">
      <h1>Task List</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo}/>   
        ))}
      </div>
      <TodoForm />

    </div>
  );
}

export default App;
