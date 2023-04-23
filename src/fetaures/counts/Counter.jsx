import { Box, Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, decrementBy5, increment, incrementBy5, reset } from "./countSlice";
const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count)
  const dispatch = useDispatch()
  return (
    <Box border={1} p={5} m={5} display={'inline-block'} flexDirection={'column'}>
      <Box>
        <Button disabled={count == 0} sx={{ margin: '10px', }} variant='contained' onClick={() => dispatch(decrement())}>Decriment</Button>
        <Button sx={{ margin: '10px' }} variant='outlined' >count: {count}</Button>
        <Button disabled={count >= 100} sx={{ margin: '10px' }} variant='contained' onClick={() => dispatch(increment())}>Incriment</Button>
      </Box>
      <Box>
        <Button disabled={count > 95} sx={{ margin: '10px' }} variant="outlined" color="success" onClick={() => dispatch(incrementBy5(5))}>Incriment5</Button>
        <Button sx={{ margin: '10px' }} variant="outlined" color="error" onClick={() => dispatch(reset())}>reset</Button>
        <Button disabled={count < 5} sx={{ margin: '10px' }} variant="outlined" color="success" onClick={() => dispatch(decrementBy5(5))}>Decriment5</Button>
      </Box>
    </Box >
  )
}

export default Counter
