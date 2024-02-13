import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.js";
import { AppProvider } from "./context/AppContext.js";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
