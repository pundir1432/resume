import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../redux/reducer';

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos.todos); // Access the todos array correctly
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div className='container'>
        <div className="row">
            <div className="col-12">

          
      <h1>Todo List</h1>
      <div className='w-50 '>
       <div className="input-group">
       <input
          type="text"
          className='form-control '
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
        <button className='btn border ' onClick={handleAddTodo}>Add Todo</button>
       </div>

      <ul className='mt-4 navbar-nav'>
        {Array.isArray(todos) && todos.length > 0 ? ( // Check if todos is an array and not empty
          todos.map(todo => (
            <li className='nav-link d-flex justify-content-between' key={todo.id}>
              <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.text}
              </span>
              <button className='btn border-danger text-danger' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </li>
          ))
        ) : (
          <li className='text-danger'>No todos available...</li> // Fallback if todos is empty
        )}
      </ul>
      </div>

      </div>
      </div>
    </div>
  );
};

export default Todo;
