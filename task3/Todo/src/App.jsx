import { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKey = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div className="app">
      <div className="card">
        <h1>My Tasks</h1>

        <div className="inputBox">
          <input
            type="text"
            placeholder="What do you want to do?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
          />
          <button onClick={addTodo}>＋</button>
        </div>

        <ul className="list">
          {todos.length === 0 && (
            <p className="empty">No tasks yet...</p>
          )}

          {todos.map((todo) => (
            <li
              key={todo.id}
              className={todo.completed ? "done" : ""}
            >
              <span onClick={() => toggleTodo(todo.id)}>
                {todo.text}
              </span>

              <div className="actions">
                <button onClick={() => toggleTodo(todo.id)}>✔</button>
                <button onClick={() => deleteTodo(todo.id)}>✖</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}