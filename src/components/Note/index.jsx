import React from 'react';
import { showFormattedDate } from '../../utils';
import { FiArchive, FiTrash, FiUpload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const Note = ({item, onDeleteNote, onToggleArchive  }) => {
    // console.log(item)
    const onDeleteHandler = () => {
        onDeleteNote(item.id);
    };

    const onArchiveHandler = () => {
        onToggleArchive(item.id);
    };

    return (
        <div className="note-item" key={item.id}>
            <div className="note-item__title">
                <Link to={`/detail/${item.id}`}>
                    {item.title}
                </Link>
            </div>
            <div className="note-item__date">{showFormattedDate(item.createdAt)}</div>
            <div className="note-item__body">{item.body}</div>
            <div className='note-item__action'>
                <button className='note-item__button' onClick={onArchiveHandler}>
                    {item.archived ? <FiUpload/> : <FiArchive/>}
                </button>
                <button className='note-item__button' onClick={onDeleteHandler}>
                    <FiTrash/>
                </button>
            </div>
        </div>
    )
}

Note.propTypes = {
    item: propTypes.shape({
        id: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        body: propTypes.string.isRequired,
        archived: propTypes.bool.isRequired,
        createdAt: propTypes.string.isRequired,
    }),
    onDeleteNote: propTypes.func.isRequired,
    onToggleArchive: propTypes.func.isRequired,
};

export default Note