import React, { useState } from "react";

export const TodoProvider = (props) => {
    
        const [todos, setTodos] = useState([
            {
                id:1,
                title:"Learn",
                description:"This",
                status: false
            },
            {
                id: 2,
                title: "421",
                description: "run splits",
                status: false
            }

]);
    return(
        <TodoContext.TodoProvider value="my name is Ian" >
            {props.children}

            </TodoContext.TodoProvider>
    )
    
}