import React from 'react';
import { showFormattedDate } from '../../utils';

const Note = ({item, onDeleteNote }) => {
    // console.log(item)
    const onDeleteHandler = () => {
        onDeleteNote(item.id);
    };
    return (
        <div className="note-item" key={item.id}>
            <div className="note-item__title">{item.title}</div>
            <div className="note-item__date">{showFormattedDate(item.createdAt)}</div>
            <div className="note-item__body">{item.body}</div>
            <button onClick={onDeleteHandler}>Delete</button>
        </div>
    )
}

export default Note