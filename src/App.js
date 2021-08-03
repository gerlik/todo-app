import './App.css';
import AddForm from "./components/AddForm";
import ToDoList from "./components/ToDoList";

function App() {
    return (
        <div className="App">
            <header>
                <h1>TODO</h1>
            </header>
            <AddForm/>
            <ToDoList/>
        </div>
    );
}

export default App;
