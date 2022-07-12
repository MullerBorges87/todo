import { List } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id) =>{
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered)
  }

  const editTodo = (id, editedText) => {
    const todosArray = [...todos];
    for (let i in todosArray){
      if(todosArray[i].id === id) {
        todosArray[i].text = editedText;
      }
    }
    setTodos(todosArray);
  }

  const sorted = () => {
    const todosArray = [...todos]
    todosArray.sort((valorA, valorB) => {
      if(valorA.text>valorB.text){
        return 1
      }else{
        return -1
      }
    })
    setTodos(todosArray)  
  }
  console.log(todos)
    
  return (
    <Container 
      maxWidth='xs' style={{ marginTop: '1em' }}
    >
      <Form 
        addTodo={ addTodo }
        sorted={ sorted } 
      />
      <List 
        className='list' 
        sx={{ marginTop: '1em' }}
      >
        {todos.map((todo) =>(
          <div key={ todo.id } style={{marginTop: '1em'}}>
            <TodoList 
              editTodo={ editTodo } 
              todo={ todo } 
              deleteTodo={ deleteTodo }
            />
          </div>
        ))}
      </List>
    </Container>
  )
}
