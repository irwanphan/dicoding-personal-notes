import React, {useState} from "react";
import { addNote, getActiveNotes } from "../../utils/network-data";
import propTypes from 'prop-types';
import { useLocale } from "../../contexts/LocaleContext";

const FormCreateNote = ({ onCreateNote }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [remainingCharacters, setRemainingCharacters] = useState(50);
    const {isIndonesiaLocale} = useLocale();

    const onTitleChange = (e) => {
        const inputValue = e.target.value;
        const remaining = 50 - inputValue.length;
        if (remaining >= 0) {
            setTitle(inputValue);
            setRemainingCharacters(remaining);
        }
    };

    const onSubmiteHandler = async (e) => {
        e.preventDefault();
        const response = await addNote({ title: title, body: body })
        const newData = await getActiveNotes();
        onCreateNote(newData.data);
        setTitle('');
        setBody('');
    }
    
    return (
        <div className="form-create-note">
            <form onSubmit={(e) => onSubmiteHandler(e)}>
                <label htmlFor="title">{isIndonesiaLocale ? 'Judul' : 'Title'}</label>
                <small>{isIndonesiaLocale ? 'karakter tersisa' : 'remaining characters: '}{remainingCharacters}</small>
                <input 
                    id="title" 
                    type="text" 
                    placeholder="Title" 
                    value={title}
                    onChange={(e) => onTitleChange(e)}
                />

                <label htmlFor="body">{isIndonesiaLocale ? 'Isi' : 'Body'}</label>
                <textarea 
                    id="body" 
                    placeholder="Body" 
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <button type="submit">{isIndonesiaLocale ? 'Kirim' : 'Submit'}</button>
            </form>
        </div>
    )
}

FormCreateNote.propTypes = {
    onCreateNote: propTypes.func,
}

export default FormCreateNote;