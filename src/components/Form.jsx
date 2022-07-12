import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({addTodo, sorted}) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    const todoObject = { text: text, id: id };
    setId(id +1);
    addTodo(todoObject);
    document.getElementById('outlined-basic').value=null;
  };

  return (
    <Paper style={{ padding:'1em' }}>
      <div style={{ display:'flex', justifyContent:'center' }}>
        <TextField 
          id="outlined-basic" 
          label="Tarefa" 
          variant="outlined" 
          fullWidth
          onChange={(event) => setText(event.target.value)}
        />
        <Button 
          variant="outlined"
          onClick={() => todoCreate(text)}
        >
          Add
        </Button>
        <Button 
          variant="outlined"
          onClick={() => sorted()}
        >
          Ordenar A-Z
        </Button>
      </div>
    </Paper>
  )
}