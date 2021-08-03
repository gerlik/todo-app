import React from "react";

class AddForm extends React.Component{
    render(){
        return(
            <form>
                <input type="text" className="add-todo-input"/>
                <button type="submit" className="add-todo-button">+</button>
                <br/>
                <button className="sort-button">All</button>
                <button className="sort-button">Done</button>
                <button className="sort-button">ToDo</button>
            </form>
        );
    }
}

export default AddForm;
