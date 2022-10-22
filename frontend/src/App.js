import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainRoutes from "./routes/MainRoutes";
import store from "./Redux/store";
import { loadUser } from "./Redux/actions/userAction";
import User from "./pages/User/User";
import { useSelector } from "react-redux";

const App = () => {
  // const { isAuthen, user } = useSelector((state) => state.user);
  React.useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <Header {...props} />
            <div className="container">
              <div className="main">
                <MainRoutes />
              </div>
            </div>
            <Footer />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
