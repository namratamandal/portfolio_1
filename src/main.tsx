import { StrictMode } from "react"; // Ensures React runs in strict mode to catch potential issues
import { createRoot } from "react-dom/client"; // API for rendering React apps
import { Provider } from "react-redux"; // Provides the Redux store to the app
import { store } from "./Redux/store"; // Import the configured Redux store
import App from "./App"; // Main App component
import "./index.css"; // Global CSS for the app
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles for consistent UI design

// Attach the React application to the root element in the index.html file
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* Wrap the app with Redux Provider to share the Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
