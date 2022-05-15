import arrow from "../images/icon-arrow.svg";

const Header = ({ children, address, setAddress,}) => {
  return (
    <div className="header">
      <p className="title">IP Address Tracker</p>
      <form action="" className="ip-form">
        <input
          type="text"
          name="ip-address"
          className="ip-address-box"
          placeholder="Search of any IP address or domain"
          value={address}
          onChange={(e) =>{
            const {value} =e.target
            console.log(`value: `,value)
            setAddress(value)
          }}
          />
        <button type="button" className="ip-button">
          <img alt="arrow" src={arrow} className="arrow" />
        </button>
      </form>
      {children}
    </div>
  );
};

export default Header;
