import "./Header.scss";
import refresh_button from "../../assets/refresh_button.svg"

const Header = () => {
    return (
        <header>
            <img src={refresh_button} alt="Refresh button" className="refresh_btn" />
        </header>
    );
};

export default Header;
