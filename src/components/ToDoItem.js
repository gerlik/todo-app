import React from "react";

function ToDoItem({todo, todos, setTodo, id, text}) {
    const deleteTodo = () => {
        setTodo(todos.filter(t => t.id !== todo.id))
    };
    const toggleTodoCompleted = () => {
        setTodo(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed // Reverse the state
                };
            }
            return item;
        }))
    }
    return (
        <div className="todo-item">
            <input onClick={toggleTodoCompleted} type="checkbox" id={id}/>
            <label htmlFor={id} className={`todo ${todo.completed ? "completed" : ""}`}>{text}</label>
            <button onClick={deleteTodo} className="delete-button"><i className="fas fa-trash-alt"></i></button>
        </div>
    );
}

export default ToDoItem;