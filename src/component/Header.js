import {LOGO_LINK} from "../utils/constants"

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="image" src={LOGO_LINK} />
            </div>

            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    )
};

export default Header;