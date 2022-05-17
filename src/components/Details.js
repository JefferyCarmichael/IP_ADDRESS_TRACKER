const Details = ({location}) => {
  return (
    <summary className="details-box" >
    {/* Displays info from Ipify API*/}
      <div className="details">
          <ul>
            <li className="list-title">IP ADDRESS</li>
            <li className="list-item list-border">{location.ip}</li>
          </ul>

          <ul>
            <li className="list-title">LOCATION</li>
            <li className="list-item list-border">{location.city}, {location.region}, {location.postalCode}</li>
          </ul>

          <ul>
            <li className="list-title"> TIMEZONE</li>
            <li className="list-item list-border">UTC{location.timezone}</li>
          </ul>

          <ul>
            <li className="list-title">ISP </li>
            <li className="list-item">{location.isp}</li>
          </ul>
      </div>
    </summary>
  );
};

export default Details;
