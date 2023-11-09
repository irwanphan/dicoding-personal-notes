import React from "react"
import { Link } from "react-router-dom"
import ThemeToggler from "../ThemeToggler"

const Header = () => {
    return (
        <header className="custom-header">
            <h1>
                <Link to="/">NotesThing</Link>
            </h1>
            <ThemeToggler />
        </header>
    )
}

export default Header