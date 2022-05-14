const Coordinates = () => {
  return (
    <div className="coordinates-box">
      <div className="coordinates">
          <ul>
            <lh className="list-title">IP ADDRESS</lh>
            <li className="list-item list-border">192.168.100.200</li>
          </ul>

          <ul>
            <lh className="list-title">LOCATION</lh>
            <li className="list-item list-border">BROOKLYN, NY 10001</li>
          </ul>

          <ul>
            <lh className="list-title"> TIMEZONE</lh>
            <li className="list-item list-border">UTC-5:00</li>
          </ul>
          {/*add offset value dynamically using the API*/}

          <ul>
            <lh className="list-title">ISP </lh>
            <li className="list-item">SPACEX STARLINK</li>
          </ul>
      </div>
    </div>
  );
};

export default Coordinates;
