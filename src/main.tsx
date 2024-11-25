import { StrictMode } from "react"; // Ensures React is running in strict mode for catching errors
import { createRoot } from "react-dom/client"; // ReactDOM API for rendering React apps
import { Provider } from "react-redux"; // Provides the Redux store to your React app
import { store } from "./Redux/store"; // Import the configured Redux store
import App from "./App"; // Import the main App component
import "./index.css"; // Import global CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles for design

// Attach the React application to the root element in index.html
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Redux Provider wraps the App to give access to the Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
