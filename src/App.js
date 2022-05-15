import Header from "./components/Header";
import Footer from "./components/Footer";
import IpMap from "./components/IpMap";
import Coordinates from "./components/Coordinates";
import { useState } from "react";
import "./App.css";

function App() {
  let data = {
    ip: "192.168.100.200",
    place: "Brooklyn, Ny 10001",
    timezone: "-7:00",
    isp: "SpaceX Starlink",
  };
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState(data);
  return (
    <div className="App">
      <Header address={address} setAddress={setAddress} >
        <Coordinates location={location} />
      </Header>
      <IpMap />
      <Footer />
    </div>
  );
}

export default App;
