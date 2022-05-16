import { MapContainer, TileLayer, Marker,Popup ,useMap } from 'react-leaflet'

const IpMap = () => {
  const position = [51.505, -0.09]
  return (

    <MapContainer center={position} zoom={13} scrollWheelZoom={false} id="map">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>

  
    )
}

export default IpMap