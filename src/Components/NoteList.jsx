import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete, onUpdate }) => {
  return (
    <ul className="list-group">
      {notes.map((note, index) => (
        <Note
          key={index}
          note={note}
          onDelete={() => onDelete(index)}
          onUpdate={(updatedNote) => onUpdate(index, updatedNote)}
        />
      ))}
    </ul>
  );
};

export default NoteList;
