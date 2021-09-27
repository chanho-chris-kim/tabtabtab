import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import "./App.scss";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Support from "./components/Support/Support";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/support" exact component={Support} />
{/*           
          <Route
            path="/inventory/:id/edit"
            exact
            render={(routerProps) => <EditInventory {...routerProps} />}
          /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;