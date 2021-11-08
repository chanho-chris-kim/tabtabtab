import Greeting from "../Greeting/Greeting";
import "./Home.scss";

function Home() {
    const Token = sessionStorage.getItem('TabTabTabToken');
    if(Token){
      window.location.href = `/protected`;
    } else {
      return <Greeting/>
    }
}

export default Home;
