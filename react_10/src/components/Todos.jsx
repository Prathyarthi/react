import React from 'react'
import {useSelector} from "@reduxjs/toolkit"

function Todos() {

  const todod = useSelector((state) => state.todos.todos)
  console.log(todos);
  return (
    <div>Todos</div>
  )
}

export default Todos