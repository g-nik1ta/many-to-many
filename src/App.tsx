import "./styles/main.css";
import Header from "./components/Header/Header";
import FoodList from "./components/FoodList/FoodList";

const App = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <FoodList />
            </main>
        </div>
    );
};

export default App;
