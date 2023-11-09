import React, {useState} from "react"
import { FiUser } from 'react-icons/fi';
import logout from "../../utils/logout";
import { useLocale } from "../../contexts/LocaleContext";
import propTypes from 'prop-types';

const UserBadge = ({ user }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const { isIndonesiaLocale } = useLocale();
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
                        <button className="logout" type="button" onClick={() => logout()}>
                            {isIndonesiaLocale ? 'Keluar' : 'Logout'}
                        </button>
                    </div>
                )
            }
        </div>
    )
}

UserBadge.propTypes = {
    user: propTypes.shape({
        id: propTypes.string,
        name: propTypes.string,
        email: propTypes.string
    })
}

export default UserBadge