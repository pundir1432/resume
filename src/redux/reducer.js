// Reducer for todos
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const ADD_COMMENT = 'ADD_COMMENT';
const TOGGLE_COMMENT = 'TOGGLE_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';

// Load todos and comments from localStorage if available
const loadTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
};

const loadCommentsFromLocalStorage = () => {
  const storedComments = localStorage.getItem('comments');
  return storedComments ? JSON.parse(storedComments) : [];
};

// Initial states
const initialState = {
  todos: loadTodosFromLocalStorage()
};

const initialStateComment = {
  comments: loadCommentsFromLocalStorage()
};

// Reducer function for todos
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodosAdd = [...state.todos, { id: Date.now(), text: action.payload, completed: false }];
      localStorage.setItem('todos', JSON.stringify(newTodosAdd)); // Save to localStorage
      return { ...state, todos: newTodosAdd };

    case TOGGLE_TODO:
      const newTodosToggle = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(newTodosToggle)); // Save to localStorage
      return { ...state, todos: newTodosToggle };

    case DELETE_TODO:
      const newTodosDelete = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(newTodosDelete)); // Save to localStorage
      return { ...state, todos: newTodosDelete };

    case EDIT_TODO: // Handle the edit action correctly
      const updatedTodos = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Save to localStorage
      return { ...state, todos: updatedTodos };

    default:
      return state;
  }
}

// Reducer function for comments
function commentReducer(state = initialStateComment, action) {
  switch (action.type) {
    case ADD_COMMENT:
      const newCommentAdd = [...state.comments, { id: Date.now(), text: action.payload, completed: false }];
      localStorage.setItem('comments', JSON.stringify(newCommentAdd)); // Save to localStorage
      return { ...state, comments: newCommentAdd };

    case TOGGLE_COMMENT:
      const newCommentToggle = state.comments.map(comment =>
        comment.id === action.payload ? { ...comment, completed: !comment.completed } : comment
      );
      localStorage.setItem('comments', JSON.stringify(newCommentToggle)); // Save to localStorage
      return { ...state, comments: newCommentToggle };

    case DELETE_COMMENT:
      const newCommentDelete = state.comments.filter(comment => comment.id !== action.payload);
      localStorage.setItem('comments', JSON.stringify(newCommentDelete)); // Save to localStorage
      return { ...state, comments: newCommentDelete };

    case EDIT_COMMENT: // Handle the edit action correctly
      const updatedComment = state.comments.map(comment =>
        comment.id === action.payload.id ? { ...comment, text: action.payload.newComment } : comment
      );
      localStorage.setItem('comments', JSON.stringify(updatedComment)); // Save to localStorage
      return { ...state, comments: updatedComment };

    default:
      return state;
  }
}

export { todoReducer, commentReducer };

// Action Creators
export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const editTodo = (id, newText) => ({ type: EDIT_TODO, payload: { id, newText } }); // Correct action
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });

export const addComment = (text) => ({ type: ADD_COMMENT, payload: text });
export const editComment = (id, newComment) => ({ type: EDIT_COMMENT, payload: { id, newComment } }); // Correct action
export const toggleComment = (id) => ({ type: TOGGLE_COMMENT, payload: id });
export const deleteComment = (id) => ({ type: DELETE_COMMENT, payload: id });
