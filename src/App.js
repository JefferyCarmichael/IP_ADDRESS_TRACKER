import Header from "./components/Header";
import Footer from "./components/Footer";
import IpMap from "./components/IpMap";
import Details from "./components/Details";
import { useState } from "react";
import "./App.css";

function App() {
  let data = {
    ip: "8.8.8.8",
    place: "Mountain View, California, 94035",
    timezone: "-7:00",
    isp: "Google LLC",
    lat: 37.38605,
    lng: -122.08385
  };
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState(data);
  return (
    <div className="App">
      <Header address={address} setAddress={setAddress} >
        <Details location={location} />
      </Header>
      <IpMap location={location} />
      <Footer />
    </div>
  );
}

export default App;
