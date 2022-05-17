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
