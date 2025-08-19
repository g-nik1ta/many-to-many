import loader from "../../../assets/loader.png";
import "./ULoader.scss";

interface ULoaderProps {
    width?: string;
    height?: string;
}

const ULoader: React.FC<ULoaderProps> = ({
    width = "50px",
    height = "50px",
}) => {
    return (
        <div className="loader">
            <img src={loader} alt="Loading" width={width} height={height} />
        </div>
    );
};

export default ULoader;
