import "./Header.scss";
import refresh_button from "../../assets/refresh_button.svg";

const Header = () => {
    return (
        <header>
            <div className="refresh_btn">
                <img src={refresh_button} alt="Refresh button" />
            </div>
        </header>
    );
};

export default Header;
