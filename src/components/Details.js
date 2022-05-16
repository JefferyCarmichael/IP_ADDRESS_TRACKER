const Details = ({location}) => {
  return (
    <div className="details-box">
      <div className="details">
          <ul>
            <li className="list-title">IP ADDRESS</li>
            <li className="list-item list-border">{location.ip}</li>
          </ul>

          <ul>
            <li className="list-title">LOCATION</li>
            <li className="list-item list-border">{location.place}</li>
          </ul>

          <ul>
            <li className="list-title"> TIMEZONE</li>
            <li className="list-item list-border">UTC{location.timezone}</li>
          </ul>
          {/*add offset value dynamically using the API*/}

          <ul>
            <li className="list-title">ISP </li>
            <li className="list-item">{location.isp}</li>
          </ul>
      </div>
    </div>
  );
};

export default Details;
