import { MapContainer, TileLayer, Marker,Popup ,useMap } from 'react-leaflet'

const IpMap = ({location}) => {
  const {lat, lng} = location

  const position = [lat,lng]
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