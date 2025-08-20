import "./styles/main.css";
import Header from "./components/Header/Header";
import FoodList from "./pages/FoodList/FoodList";
import { Route, Routes } from "react-router";
import FoodDetail from "./pages/FoodDetail/FoodDetail";

const App = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<FoodList />} />
                    <Route path="/food/:id" element={<FoodDetail />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
