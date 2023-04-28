import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./infrastructure/routes";
import { store } from "./infrastructure/redux/store";
import Notification from "./infrastructure/components/Notification/Notification";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Notification />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
};

export default App;
