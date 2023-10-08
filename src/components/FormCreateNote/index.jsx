import React from "react";

const FormCreateNote = ({ onCreateNote }) => {
    const onSubmiteHandler = (e) => {
        e.preventDefault();
        const data = {
            id: new Date().getTime(),
            title: e.target.title.value,
            body: e.target.body.value,
            archived: false,
            createdAt: new Date().toISOString()
        }
        // console.log(data);
        onCreateNote(data);

        e.target.title.value = '';
        e.target.body.value = '';
    }
    
    return (
        <div className="form-create-note">
            <form onSubmit={(e) => onSubmiteHandler(e)}>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" placeholder="Title" />

                <label htmlFor="body">Body</label>
                <textarea id="body" placeholder="Body" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormCreateNote;