import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { deleteTodo } from "../fetaures/todo/todoSlice";
const Todo = () => {
  const dispatch = useDispatch()
  const showData = useSelector(state => state.todoReducer.todos)
  const deletehande = (id) => {
    dispatch(deleteTodo(id))
  }
  const navigate = useNavigate()
  const navigateHandle = () => {
    navigate('/add-todo')
  }

  return (
    <Container >
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant={'h4'} py={2}>List Todos</Typography>
        <Button onClick={navigateHandle} variant='contained'>Create Todo</Button>
      </Box>
      <table style={{
        borderCollapse: 'collapse',
        width: "100%"
      }}>
        <tr>
          <th style={{
            border: '1px solid #dddddd',
            textAlign: 'left',
            padding: '8px',
          }}>id
          </th>
          <th style={{
            border: '1px solid #dddddd',
            textAlign: 'left',
            padding: '8px',
          }}>First Name
          </th>
          <th style={{
            border: '1px solid #dddddd',
            textAlign: 'left',
            padding: '8px',
          }}>Last Name
          </th>
          <th style={{
            border: '1px solid #dddddd',
            textAlign: 'left',
            padding: '8px',
          }}>Full Name
          </th>
          <th style={{
            border: '1px solid #dddddd',
            textAlign: 'left',
            padding: '8px',
          }}>Age
          </th>
          <th style={{
            border: '1px solid #dddddd',
            textAlign: 'left',
            padding: '8px',
          }}>Action
          </th>
        </tr>
        {showData.map((item, index) => {
          const { id, firstName, lastName, age } = item
          return (
            <tr key={index}>
              <td style={{
                border: '1px solid #dddddd',
                textAlign: 'left',
                padding: '8px',
              }}>{id}
              </td>
              <td style={{
                border: '1px solid #dddddd',
                textAlign: 'left',
                padding: '8px',
              }}>{firstName}
              </td>
              <td style={{
                border: '1px solid #dddddd',
                textAlign: 'left',
                padding: '8px',
              }}>{lastName}
              </td>
              <td style={{
                border: '1px solid #dddddd',
                textAlign: 'left',
                padding: '8px',
              }}>{firstName} {lastName}
              </td>
              <td style={{
                border: '1px solid #dddddd',
                textAlign: 'left',
                padding: '8px',
              }}>{age}
              </td>
              <td style={{
                border: '1px solid #dddddd',
                textAlign: 'left',
                padding: '8px',
              }}>
                <IconButton aria-label="delete" onClick={() => Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success',
                      deletehande(id),
                    )
                  }
                })} >
                  <DeleteIcon color='error' />
                </IconButton>
                <Link to='/edit-todo' state={{ id, firstName, lastName, age }}>
                  <IconButton aria-label="edit">
                    <EditIcon color='action' />
                  </IconButton>
                </Link>
                <IconButton aria-label="view">
                  <VisibilityIcon color='success' />
                </IconButton>
                <Link to={`/todo-view/${id}`}>
                  <IconButton aria-label="edit">
                    <VisibilityIcon color='action' />
                  </IconButton>
                </Link>
                <Link to={`/click-edit/${id}`}>
                  <IconButton aria-label="edit">
                    <EditIcon color='action' />
                  </IconButton>
                </Link>
              </td>
            </tr>
          )
        })}

      </table>

    </Container >
  )
}

export default Todo
