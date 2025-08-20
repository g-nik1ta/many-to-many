import { useEffect, useState } from "react";
import { useFood } from "../../context/FoodContext";
import { useFoodsApi } from "../../hooks/useFoodsApi";
import "./FoodDetail.scss";
import { useParams } from "react-router";
import ULoader from "../../components/UComponents/ULoader/ULoader";

const FoodDetail = () => {
    const { id } = useParams<{ id: string | undefined }>();
    const { loading, foodDetail } = useFood();
    const { fetchFoodById } = useFoodsApi();
    const [loadedImg, setLoadedImg] = useState(false);

    useEffect(() => {
        if (!id) return;
        fetchFoodById(id);
    }, []);

    if (loading)
        return (
            <section className="food-list">
                <ULoader width="75px" height="75px" />
            </section>
        );

    if (!id || !foodDetail) return <p className="no-data">No data available.</p>;
        
    return (
        <div
            className="food-detail"
            style={{ backgroundColor: `#${foodDetail.color}` }}
        >
            <span className="food-title">{foodDetail.text}</span>
            {foodDetail.image && process.env.REACT_APP_API_URL && (
                <>
                    {!loadedImg && <div className="skeleton" />}
                    <img
                        className="food-image"
                        src={process.env.REACT_APP_API_URL + foodDetail.image}
                        alt={foodDetail.name + " image"}
                        loading="lazy"
                        onLoad={() => setLoadedImg(true)}
                    />
                </>
            )}
        </div>
    );
};

export default FoodDetail;
