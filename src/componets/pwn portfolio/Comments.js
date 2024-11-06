import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, deleteComment, editComment, toggleComment } from '../../redux/reducer';

const Comments = () => {
  const [newComment, setNewComment] = useState('');
  const [editingComment, setEditingComment] = useState(null); // To track the comment being edited
  const [newText, setNewText] = useState(''); // To store the new text while editing
  const comments = useSelector((state) => state.comments.comments); // Access the comments array correctly
  const dispatch = useDispatch();

  const handleAddComment = () => {
    if (newComment.trim()) {
      dispatch(addComment(newComment));
      setNewComment('');
    }
  };

  const handleEditComment = (comment) => {
    setEditingComment(comment); // Set the comment being edited
    setNewText(comment.text); // Set the current text in the input field
  };

  const handleSaveEdit = () => {
    if (newText.trim()) {
      dispatch(editComment(editingComment.id, newText));
      setEditingComment(null); // Clear the editing state
      setNewText(''); // Clear the edited text
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="form-heading text-white" style={{ wordSpacing: '10px', letterSpacing: '10px' }}>
            ADD <span className="text-danger">COMMENT</span>
          </h1>
          <div>
            <div className="input-group">
              <input
                type="text"
                className="form-control input"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add comment"
              />
              <button className="btn border p-2" onClick={handleAddComment}>
                <i className="bi bi-plus-square-fill fs-5 text-primary"></i>
              </button>
            </div>

            <ul
              className={`mt-4 navbar-nav  comment-list ${
                comments.length >= 2 ? 'show-scroll' : ''
              }`}
            >
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <li className="nav-link border p-2 mb-3 d-flex justify-content-between" key={comment.id}>
                    {editingComment?.id === comment.id ? (
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control input"
                          value={newText}
                          onChange={(e) => setNewText(e.target.value)}
                          placeholder="Edit comment"
                        />
                        <button className="btn btn-success input" onClick={handleSaveEdit}>
                          <i className="bi bi-cloud-download-fill text-success"></i>
                        </button>
                      </div>
                    ) : (
                      <span
                        style={{ textDecoration: comment.completed ? 'line-through' : 'none' }}
                        className="text-white"
                        onClick={() => dispatch(toggleComment(comment.id))}
                      >
                        {comment.text}
                      </span>
                    )}

                    <div className="d-flex">
                      <button
                        className="btn text-success"
                        onClick={() => handleEditComment(comment)} // Edit button
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </button>
                      <button
                        className="btn text-danger"
                        onClick={() => dispatch(deleteComment(comment.id))}
                      >
                        <i className="bi bi-trash3"></i>
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-danger">No comments available...</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
