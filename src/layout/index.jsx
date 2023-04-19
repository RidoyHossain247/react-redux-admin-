import React from 'react'
import Header from './header'

const Index = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default Index
