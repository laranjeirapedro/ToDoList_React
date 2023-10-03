import { useState } from 'react';

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from './components/Filter';

import "./App.css";

const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Borel&family=Bungee+Shade&family=Kalam&family=Space+Mono&family=Special+Elite&family=Tilt+Prism&display=swap";
link.rel = 'stylesheet';
document.head.appendChild(link);


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
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id:Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filterTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
    setTodos(filterTodos);
  };

  const completeTodo = (id) => {
    const newTodos= [...todos];
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>TO DO LIST</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {todos
        .filter((todo) => filter === "All" ? true : filter === "Close" ? todo.isCompleted : !todo.isCompleted)
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((todo) => (<Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>   
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>

    </div>
  );
}

export default App;
