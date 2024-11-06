import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, editTodo } from '../redux/reducer';

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null); // To track the todo being edited
  const [newText, setnewText] = useState(''); // To store the new text while editing
  const todos = useSelector((state) => state.todos.todos); // Access the todos array correctly
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo); // Set the todo being edited
    setnewText(todo.text); // Set the current text in the input field
  };

  const handleSaveEdit = () => {
    if (newText.trim()) {
      dispatch(editTodo(editingTodo.id, newText));
      setEditingTodo(null); // Clear the editing state
      setnewText(''); // Clear the edited text
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Todo List</h1>
          <div className="w-50">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter new todo"
              />
              <button className="btn border" onClick={handleAddTodo}>
                Add Todo
              </button>
            </div>

            <ul className="mt-4 navbar-nav">
              {Array.isArray(todos) && todos.length > 0 ? (
                todos.map((todo) => (
                  <li className="nav-link d-flex justify-content-between" key={todo.id}>
                    {editingTodo?.id === todo.id ? ( // Check if this todo is being edited
                      <div>
                        <input
                          type="text"
                          value={newText}
                          onChange={(e) => setnewText(e.target.value)}
                          placeholder="Edit todo"
                        />
                        <button className="btn btn-success" onClick={handleSaveEdit}>
                          Save
                        </button>
                      </div>
                    ) : (
                      <span
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick={() => dispatch(toggleTodo(todo.id))}
                      >
                        {todo.text}
                      </span>
                    )}

                    <div>
                      <button
                        className="btn border-info text-info"
                        onClick={() => handleEditTodo(todo)} // Edit button
                      >
                        Edit
                      </button>
                      <button
                        className="btn border-danger text-danger"
                        onClick={() => dispatch(deleteTodo(todo.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-danger">No todos available...</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
