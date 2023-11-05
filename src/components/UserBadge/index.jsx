import React, {useState} from "react"
import { FiUser } from 'react-icons/fi';
import logout from "../../utils/logout";

const UserBadge = ({ user }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    // console.log(user)

    const handleToggle = () => {
        setIsOpen(!isOpen);
        // console.log(isOpen)
    }

    return (
        <div className="user-badge">
            <div className="user-avatar" onClick={() => handleToggle()}>
                <FiUser/>
            </div>
            {
                isOpen && (
                    <div className="user-info">
                        <p className="user-name">{user.name}</p>
                        <p className="user-email">{user.email}</p>
                        <hr/>
                        <button className="logout" type="button" onClick={() => logout()}>Logout</button>
                    </div>
                )
            }
        </div>
    )
}

export default UserBadge