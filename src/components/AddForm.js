import React from "react";
import uniqueId from 'lodash/uniqueId'; // Unique key/identifier for each task starting from 1

function AddForm({inputText, setInputText, todos, setTodo, setState}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value) // Pass info here, create object
    };
    const setStateHandler = (e) => {  // Save which sort button was clicked last
        setState(e.target.value)
    }
    const submitTodo = (e) => {
        e.preventDefault(); // Prevent page refresh after submit
        setTodo([
            ...todos,
            {text: inputText, completed: false, id: uniqueId()}])
        setInputText("");
    };
    return (
        <div className="form-area">
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="add-todo-input"/>
                <button onClick={submitTodo} type="submit" className="add-todo-button">+</button>
            </form>
            <div className="sort-buttons">
                <button onClick={setStateHandler} value="all" className="sort-button">All</button>
                <button onClick={setStateHandler} value="done" className="sort-button">Done</button>
                <button onClick={setStateHandler} value="todo" className="sort-button">ToDo</button>
            </div>
        </div>
    );
}

export default AddForm;
