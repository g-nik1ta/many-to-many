import "./Header.scss";
import refresh_button from "../../assets/refresh_button.svg";
import { useFood } from "../../context/FoodContext";
import { useFoodsApi } from "../../hooks/useFoodsApi";
import { useLocation } from "react-router";

const Header = () => {
    const location = useLocation();
    const isFoodPage = location.pathname.startsWith("/food/");

    const { loading, foods, foodDetail } = useFood();
    const { fetchRandomFoods } = useFoodsApi();

    const refreshHandler = async () => {
        if (loading) return;
        fetchRandomFoods();
    };

    return (
        <header>
            {isFoodPage && (
                <div
                    className="back-button"
                    onClick={() => window.history.back()}
                >
                    <span>&#60;</span>
                </div>
            )}
            {foods?.title && (
                <h1 className="food-title">
                    {isFoodPage ? foodDetail?.name : foods.title}
                </h1>
            )}
            {!isFoodPage && (
                <div
                    className={"refresh_btn" + (loading ? " disabled" : "")}
                    onClick={refreshHandler}
                >
                    <img src={refresh_button} alt="Refresh button" />
                </div>
            )}
        </header>
    );
};

export default Header;
