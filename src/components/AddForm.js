import React from "react";
import uniqueId from 'lodash/uniqueId'; // Unique key/identifier for each task starting from 1

function AddForm({inputText, setInputText, todos, setTodo}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value) // Pass info here, create object
    };
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
                <button className="sort-button">All</button>
                <button className="sort-button">Done</button>
                <button className="sort-button">ToDo</button>
            </div>
        </div>


    );
}

export default AddForm;
