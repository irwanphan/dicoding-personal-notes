import React from "react";

const FormCreateNote = () => {
    return (
        <div className="form-create-note">
            <form>
                <input type="text" placeholder="Title" />
                <textarea placeholder="Body" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormCreateNote;