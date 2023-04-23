import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from "../todo/todoSlice";

const AddTodo = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState()
  const submitHandle = (e) => {
    e.preventDefault();
    const todo = { id: uuidv4(), firstName, lastName, age }
    dispatch(addTodo(todo))
    navigate('/todos')
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
  }
  return (
    <Container>
      <Typography variant={'h4'} py={2} textAlign={'center'}>Create Todos</Typography>
      <form onSubmit={submitHandle}>

        <Box display={'flex'} flexDirection={'column'} pb={2}>
          <Typography pb={1} variant="label">First Name</Typography>
          <TextField name="firstName" variant="outlined" onChange={(e) => setFirstName(e.target.value)} />
        </Box>
        <Box display={'flex'} flexDirection={'column'} pb={2}>
          <Typography pb={1} variant="label">Last Name</Typography>
          <TextField name="lastName" variant="outlined" onChange={(e) => setLastName(e.target.value)} />
        </Box>
        <Box display={'flex'} flexDirection={'column'} pb={2}>
          <Typography pb={1} variant="label">Age</Typography>
          <TextField name="age" variant="outlined" onChange={(e) => setAge(e.target.value)} />
        </Box>

        <Box>
          <Button variant="outlined" type='submit'>Save</Button>
        </Box>
      </form>
    </Container>
  )
}

export default AddTodo
