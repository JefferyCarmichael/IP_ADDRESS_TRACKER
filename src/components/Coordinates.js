const Coordinates = ({location}) => {
  return (
    <div className="coordinates-box">
      <div className="coordinates">
          <ul>
            <lh className="list-title">IP ADDRESS</lh>
            <li className="list-item list-border">{location.ip}</li>
          </ul>

          <ul>
            <lh className="list-title">LOCATION</lh>
            <li className="list-item list-border">{location.place}</li>
          </ul>

          <ul>
            <lh className="list-title"> TIMEZONE</lh>
            <li className="list-item list-border">UTC{location.timezone}</li>
          </ul>
          {/*add offset value dynamically using the API*/}

          <ul>
            <lh className="list-title">ISP </lh>
            <li className="list-item">{location.isp}</li>
          </ul>
      </div>
    </div>
  );
};

export default Coordinates;
