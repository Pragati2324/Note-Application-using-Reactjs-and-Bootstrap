import React, { useState } from 'react'

const Note = ({ note, onDelete, onUpdate }) => {
    const [isEdit,setIsEdit]=useState(false);
    const [editVal,setEditVal]=useState(note);
    const handleEdit = () => {
        setIsEdit(true);
      };
    
      const handleUpdate = () => {
        setIsEdit(false);
        onUpdate(editVal);
      };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
         {isEdit ? (
        <input
          type="text"
          className="form-control"
          value={editVal}
          onChange={(e) => setEditVal(e.target.value)}
        />
      ) : (
        note
      )}
      <div>
        {isEdit ? (
          <button className="btn btn-success btn-sm me-2" onClick={handleUpdate}>
            Update
          </button>
        ) : (
          <button className="btn btn-primary btn-sm me-2" onClick={handleEdit}>
            Edit
          </button>
        )}
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default Note;
