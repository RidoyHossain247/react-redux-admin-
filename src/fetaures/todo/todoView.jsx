
import { Box, Container, Typography } from "@mui/material";
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
      <Box>
        <Typography variant="span">First Name: </Typography>
        <Typography variant="span">{editGetTodoItem.firstName}</Typography>
      </Box>
      <Box>
        <Typography variant="span">Last Name: </Typography>
        <Typography variant="span">{editGetTodoItem.lastName}</Typography>
      </Box>
      <Box>
        <Typography variant="span">Age: </Typography>
        <Typography variant="span">{editGetTodoItem.age}</Typography>
      </Box>

    </Container>
  )
}

export default ClickEdit
