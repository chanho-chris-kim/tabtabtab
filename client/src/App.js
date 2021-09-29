import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Support from "./components/Support/Support";
import "./App.scss";

function App() {
  const [status, setStatus] = useState("LoggedOut");
  const [userData, setUserData] = useState(null);


    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render={()=> <Home status={status} setStatus={setStatus} userData={userData} setUserData={setUserData}/>}/>
          <Route path="/about" exact component={AboutUs}/>
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/support" exact component={Support}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
}
export default App;