import arrow from "../images/icon-arrow.svg";

const Header = ({ children, address, setAddress, setLocation,location }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(`address: `, address);
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_KEY}&ipAddress=8.8.8.8https://geo.ipify.org/api/v2/country,city?apiKey=at_pBf27CHDSGjAmSIIz4bYnuSCQ5oVm&ipAddress=${address}`
    )
      .then((response) => response.json())
      .then((data) => {
      console.log(data)
      setLocation({
        ...location,
        ip: data.ip,
        city: data.location.city,
        region: data.location.region, 
        postalCode:data.location.postalCode,
        timezone: data.location.timezone,
        isp: data.isp,
        lat: data.location.lat,
        lng: data.location.lng
        })
        .catch((error)=>console.log(error.message))
        console.log(`location next:`,location)

      });   
  };

  return (
    <header className="header">
      <p className="title">IP Address Tracker</p>
      <form action="" className="ip-form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="ip-address"
          className="ip-address-box"
          placeholder="Search of any IP address or domain"
          value={address}
          required
          onChange={(e) => {
            const { value } = e.target;
            setAddress(value);
          }}
        />
        <button type="submit" className="ip-button">
          <img alt="arrow" src={arrow} className="arrow" />
        </button>
      </form>
      {children}
    </header>
  );
};

export default Header;
