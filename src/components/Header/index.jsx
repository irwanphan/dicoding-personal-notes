import React from "react"
import { Link } from "react-router-dom"
import ThemeToggler from "../ThemeToggler"
import LocaleToggler from "../LocaleToggler"

const Header = () => {
    return (
        <header className="custom-header">
            <h1>
                <Link to="/">NotesThing</Link>
            </h1>
            <div className="flexing">
                <ThemeToggler />
                <LocaleToggler />
            </div>
        </header>
    )
}

export default Header