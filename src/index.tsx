import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import { FoodProvider } from "./context/FoodContext";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <FoodProvider>
            <App />
        </FoodProvider>
    </BrowserRouter>
);
