import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../App';
import AddTodo from '../fetaures/todo/addTodo';
import ClickEdit from '../fetaures/todo/clickEdit';
import EditTodo from '../fetaures/todo/editTodo';
import TodoView from '../fetaures/todo/todoView';
import Layout from '../layout';
import Todo from '../pages/Todo';
const IndexPage = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todo />} />
          <Route path="/add-todo" element={<AddTodo />} />
          <Route path="/edit-todo" element={<EditTodo />} />
          <Route path="/click-edit/:id" element={<ClickEdit />} />
          <Route path="/todo-view/:id" element={<TodoView />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default IndexPage
