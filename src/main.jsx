import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "swiper/css";

import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./service/redux/store.js";

createRoot(document.getElementById("root")).render(
  <>
    <HelmetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </>
);
