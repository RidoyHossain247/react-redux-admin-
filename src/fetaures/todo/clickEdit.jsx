import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { updateTodo } from "./todoSlice";
const ClickEdit = () => {
  const params = useParams()
  const editGetTodo = useSelector(state => state.todoReducer.todos.filter((item) => item.id === params.id))
  const editGetTodoItem = editGetTodo[0]
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [id, setid] = useState(editGetTodoItem.id)
  const [firstName, setFirstName] = useState(editGetTodoItem.firstName)
  const [lastName, setLastName] = useState(editGetTodoItem.lastName)
  const [age, setAge] = useState(editGetTodoItem.age)
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id, firstName, lastName, age }))
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
      <Typography variant={'h4'} py={2} textAlign={'center'}>Edit Todos</Typography>
      <form onSubmit={submitHandle}>
        <Box display={'flex'} flexDirection={'column'} pb={2}>
          <Typography pb={1} variant="label">First Name</Typography>
          <TextField name="firstName" variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Box>
        <Box display={'flex'} flexDirection={'column'} pb={2}>
          <Typography pb={1} variant="label">Last Name</Typography>
          <TextField name="lastName" variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Box>
        <Box display={'flex'} flexDirection={'column'} pb={2}>
          <Typography pb={1} variant="label">Age</Typography>
          <TextField name="age" variant="outlined" value={age} onChange={(e) => setAge(e.target.value)} />
        </Box>

        <Box>
          <Button variant="outlined" type='submit'>update</Button>
        </Box>
      </form>

    </Container>
  )
}

export default ClickEdit
