import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({todos, setTodo}) {
    return (
        <div className="todo-list">
            <ul className="todo-list-item">
                {todos.map(todo => (   // Map through all tasks to display them
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        text={todo.text}
                        setTodo={setTodo}
                        todos={todos} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
