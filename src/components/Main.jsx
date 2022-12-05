import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import moment from "moment"
import { MdFavorite } from "react-icons/md"

const Main = () => {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("search")
  const [cityCordSystem, setCityCordSystem] = useState(null)

  const fetchWeatherCity = async (e) => {
    if (e.key === "Enter") {
      let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=1b77fa4dfe04d5ebfcd16598cd8fd05f`
      )
      let data = await response.json()
      let latitude = data[0].lat
      let longitude = data[0].lon
      setCityCordSystem({ lat: latitude, lon: longitude })
    }
  }

  const fetchWeather = async () => {
    if (cityCordSystem !== null) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityCordSystem.lat}&lon=${cityCordSystem.lon}&appid=1b77fa4dfe04d5ebfcd16598cd8fd05f`
      )
      if (response.ok) {
        const data = await response.json()
        setWeather(data)
      } else {
        alert("Error fetching results")
      }
    }
  }

  useEffect(() => {
    fetchWeather()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityCordSystem])

  const tempConverter = (valueNum) => {
    valueNum = parseFloat(valueNum)
    let celsius = valueNum - 273.15
    return celsius.toFixed()
  }

  return (
    <Container className="home-container fluid">
      <Row>
        <div className="overlay ">
          <Col className=" col-xs col-sm col-md col-lg justify-content-center">
            <div className="input-div mt-5 ">
              <h1>What's the Weather in your City?</h1>

              <input
                className="input-search "
                type="text"
                placeholder="Search City"
                onChange={(e) => {
                  setCity(e.target.value)
                }}
                onKeyUp={fetchWeatherCity}
              ></input>
            </div>
          </Col>
          {weather && (
            <Col className=" info-card">
              <div className="main col-xs col-md col-lg">
                <h1 className="city mt-4 mb-0">
                  {city}, {weather.sys.country}
                </h1>

                <h3>{city.pressure}</h3>
                <div className="flex">
                  <p className="date">{moment().format("dddd LL")}</p>
                  <p className="date">{weather.weather[0].main}</p>
                </div>

                <div className="flex">
                  <p className="temp-c mt-0 pl-3">
                    Temperature{" "}
                    <span className="temp-data d-flex pr-2 ">
                      {" " + tempConverter(weather.main.temp)}°{" "}
                    </span>
                  </p>
                  <p className="temp-c pr-2">
                    Feels like{" "}
                    <span className="feels-data d-flex">
                      {"" + tempConverter(weather.main.feels_like)}°
                    </span>
                  </p>
                </div>

                <div className="flex">
                  <p className="sunrise pl-3">
                    Sunrise:
                    <span className="sunrise-data d-flex">
                      {"" +
                        new Date(weather.sys.sunrise * 1000).toLocaleTimeString(
                          "en-IN"
                        )}
                    </span>
                  </p>
                  <p className="sunset pr-3">
                    Sunset:{" "}
                    <span className="sunrise-data d-flex pr-2">
                      {"" +
                        new Date(weather.sys.sunset * 1000).toLocaleTimeString(
                          "en-IN"
                        )}
                    </span>
                  </p>
                </div>
                <Button variant="danger">
                  Add To Favorites <MdFavorite />
                </Button>
              </div>
            </Col>
          )}
        </div>
      </Row>
    </Container>
  )
}

export default Main
