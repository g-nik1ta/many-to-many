import "./Header.scss";
import refresh_button from "../../assets/refresh_button.svg";
import { useFood } from "../../context/FoodContext";
import { useFoodsApi } from "../../hooks/useFoodsApi";

const Header = () => {
    const { loading, foods } = useFood();
    const { fetchRandomFoods } = useFoodsApi();

    const refreshHandler = async () => {
        if (loading) return;
        fetchRandomFoods();
    };

    return (
        <header>
            {foods?.title && <h1 className="food-title">{foods.title}</h1>}
            <div
                className={"refresh_btn" + (loading ? " disabled" : "")}
                onClick={refreshHandler}
            >
                <img src={refresh_button} alt="Refresh button" />
            </div>
        </header>
    );
};

export default Header;
