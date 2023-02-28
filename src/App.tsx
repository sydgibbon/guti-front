import { RouterProvider } from "react-router-dom";
import router from "./migrate/infrastructure/routes";
import { Provider } from "react-redux";
import { store } from "./migrate/infrastructure/redux/store";
import Notification from "./migrate/infrastructure/components/Notification/Notification";
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
