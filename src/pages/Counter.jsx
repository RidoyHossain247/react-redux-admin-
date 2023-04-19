import { Box, Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy5, reset } from "../fetaures/counts/countSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <Box border={1} p={5} m={5} display={'inline-block'} flexDirection={'column'}>
      <Box>
        <Button disabled={count == 0} sx={{ margin: '10px', }} variant='contained' onClick={() => dispatch(decrement())}>decriment</Button>
        <Button sx={{ margin: '10px' }} variant='outlined' onClick={() => dispatch(increment())}>count: {count}</Button>
        <Button sx={{ margin: '10px' }} variant='contained' onClick={() => dispatch(increment())}>incriment</Button>
      </Box>
      <Box>
        <Button sx={{ margin: '10px' }} variant="outlined" color="success" onClick={() => dispatch(incrementBy5(5))}>incriment5</Button>
        <Button sx={{ margin: '10px' }} variant="outlined" color="error" onClick={() => dispatch(reset())}>reset</Button>
      </Box>
    </Box >
  )
}

export default Counter
