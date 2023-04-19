import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../App';
import Layout from '../layout';
import Counter from '../pages/Counter';
const IndexPage = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default IndexPage
