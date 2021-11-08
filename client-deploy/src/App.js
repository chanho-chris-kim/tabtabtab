import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Support from "./components/Support/Support";
import "./App.scss";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LoggedIn from "./components/HomePage/LoggedIn/LoggedIn";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render={(props)=> < Home {...props}/>}/>
          <Route path="/about" exact component={ AboutUs }/>
          <Route path="/contact" exact component={ ContactUs } />
          <Route path="/support" exact component={ Support} />
          <PrivateRoute path="/protected" component={ LoggedIn } />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
}
export default App;