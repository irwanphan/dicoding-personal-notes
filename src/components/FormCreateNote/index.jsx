import React from "react";

const FormCreateNote = () => {
    return (
        <div className="form-create-note">
            <form>
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