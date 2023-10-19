import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="custom-header">
            <h1>
                <Link to="/">NotesThing</Link>
            </h1>
            {/* create menu later :) */}
        </header>
    )
}

export default Header