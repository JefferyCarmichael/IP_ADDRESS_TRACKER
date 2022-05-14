import Header from "./components/Header";
import Footer from "./components/Footer";
import IPMAP from "./components/IPMAP";
import Coordinates from "./components/Coordinates";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header>
        <Coordinates />
      </Header>
      <IPMAP />
      <Footer />
    </div>
  );
}

export default App;
