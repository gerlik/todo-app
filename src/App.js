import React, {useState} from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import ToDoList from "./components/ToDoList";

function App() {
    const [inputText, setInputText] = useState(""); // Hook
    const [todos, setTodo] = useState([]);
    return (
        <div className="App">
            <header>
                <h1>TODO</h1>
            </header>
            <AddForm inputText={inputText} setInputText={setInputText} todos={todos} setTodo={setTodo}/>
            <ToDoList setTodo={setTodo} todos={todos}/>
        </div>
    );
}

export default App;
