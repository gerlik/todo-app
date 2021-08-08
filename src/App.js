import React, {useState, useEffect} from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import ToDoList from "./components/ToDoList";

function App() {
    const [inputText, setInputText] = useState(""); // Hook
    const [todos, setTodo] = useState([]);
    const [state, setState] = useState("all");  //
    const [filteredTodos, setFilteredTodos] = useState([]); // Filter matching tasks to here
    useEffect(() => {
        switch (state) {
            case "done":
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case "todo":
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }, [todos, state]);

    return (
        <div className="App">
            <header>
                <h1>TODO</h1>
            </header>
            <AddForm
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodo={setTodo}
                setState={setState}
            />
            <ToDoList todos={todos} setTodo={setTodo} filteredTodos={filteredTodos}/>
        </div>
    );
}

export default App;
