import React from 'react';
import { showFormattedDate } from '../../utils';

const Note = ({item}) => {
    // console.log(item)
    return (
        <div className="note-item" key={item.id}>
            <div className="note-item__title">{item.title}</div>
            <div className="note-item__date">{showFormattedDate(item.createdAt)}</div>
            <div className="note-item__body">{item.body}</div>
        </div>
    )
}

export default Note