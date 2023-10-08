import React from "react";
import { getInitialData } from "../../utils";

const FormCreateNote = () => {
    const lastNumber = getInitialData().length;
    const onSubmiteHandler = (e) => {
        e.preventDefault();
        const data = {
            id: lastNumber + 1,
            title: e.target.title.value,
            body: e.target.body.value,
            archived: false,
            createdAt: new Date().toISOString()
        }
        console.log(data);
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