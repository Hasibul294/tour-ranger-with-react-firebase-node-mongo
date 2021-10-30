import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import AuthProvider from "./context/AuthProvider";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./pages/Shared/Header";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Register/Register";
import Packages from "./pages/Home/Packages/Packages";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/package">
              <Packages></Packages>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            {/* <PrivateRoute exact path="/details/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
             */}
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
