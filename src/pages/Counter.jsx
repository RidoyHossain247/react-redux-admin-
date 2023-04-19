import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementby5, reset } from "../fetaures/counts/countSlice"
const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>decriment</button>
      <button>count: {count}</button>
      <button onClick={() => dispatch(increment())}>incriment</button>
      <button onClick={() => dispatch(incrementby5(5))}>incriment5</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div >
  )
}

export default Counter
