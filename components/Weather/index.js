import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { API } from './../../API';
import styled from 'styled-components';
import { breakPoints, colorOptions } from '../../src/theme';
import WIcon from './WIcon';
import {keyframe_flip} from './../../src/KeyFrames'
const ipLookup = async () => {
    try {
        const res = await Axios.get(API.IPLOOKUP_API_PATH);
        const data = res.data;

        return data;
    } catch (error) {
        console.error(error);
    }
}

const Wrapper = styled.div`
    position: relative;
    border-radius: 30px;
    box-shadow: 15px 20px 85px #d7c4bd;
    overflow: hidden;
    background: linear-gradient(141deg,#f9ebe2 30%, #e7c3bb 75%);
`;

const Card = styled.div`
    z-index: 1;
    background: #fff;
    position: relative;
    padding: 15px;
`;

const CityText = styled.span`
    left: 1em;
    position: absolute;
    font-size: 1.5em;
    color: ${colorOptions.gray.PRIMARY_COLOR_BOLD};
    font-weight: 600;
`;

const TempText = styled.span`
    color: ${colorOptions.gray.PRIMARY_COLOR_BOLD};
    font-size: 4em;
    font-weight: 700;
    display: block;
    position: relative;

    @media screen and (min-width: ${breakPoints.md}px){
        text-align: right;
        margin-right: 10px;
    }
    small {
        font-size: 70%;
        animation: ${keyframe_flip} 4s linear infinite;
        &.degree {
            position: absolute;
            top: -5px;
        }
    }
`;

const TempSwitcher = styled.div`
    position: absolute;
    left: 15px;
    bottom: 30px;
    line-height: 30px;
    vertical-align: middle;
    width: 60px;
    display: flex;
    border-radius: 3px;
    overflow: hidden;
    z-index: 2;
    span {
        width: 50%;
        text-align: center;
        color: #fff;
        font-weight: 700;
        text-align: center;
        text-shadow: 1px 1px 1px #191b1e;
        background-color: #2d3035;
        cursor: pointer;
        &.active {
            background-color: ${colorOptions.blue.PRIMARY_COLOR_BOLD};
            cursor: default;
        }
    }
`;

const WeatherText = styled.div`
    position: absolute;
    right: -2em;
    top: -2em;
    text-align: right;
    img {
        width: 80px;
    }
    p {
        margin: 0;
    }

    @media screen and (max-width: ${breakPoints.md}px){
        top: -3em;
        right: -3em;
    }
`;

const Wave = styled.div`
    height: 40px;
    background-image: url("/static/images/sin.png");
    background-position: -115px 0px;
    background-size: cover;
    width: 100%;
    position: relative;
    top: 2px;
    display: none;
`;

const WType = {
    200: "thunder-storm",
    300: "sun-shower",
    500: "rainy",
    600: "snow",
    700: "mist",
    800: "sunny",
    801: "cloudy"
}

const getCurrentWeather = (query, units) => Axios.get(`${API.WEATHER_API_PATH}?appid=${API.WEATHER_API_ACCESS_KEY}&q=${query}&units=${units}`);

const Weather = (props) => {

    const [longitude, setLongitude] = useState(-122.33);
    const [latitude, setLatitude]   = useState(47.6);
    const [city, setCity]           = useState("Seattle");
    const [country, setCountry]     = useState("United State");
    const [weather, setWeather]     = useState({});
    const [wunit, setWunit]         = useState('imperial');
    const [wtemp, setWtemp]         = useState(0);

    const wunit_change = (e) => {
        let el = e.target;
        let id = el.id;
        
        if (id !== wunit) {
            let temp = id === "metric" ? (wtemp-32)/1.8: wtemp*1.8+32;
            setWunit(id);
            setWtemp(temp);
        }

        return false;
    }

    const getWType = (id) => {
        var type;

        if (id > 800) {
            type = WType[801]
        } else if (id === 800) {
            type = WType[800]
        } else if (id >= 700 && id < 800) {
            type = WType[700]
        } else if (id >= 600 && id < 700) {
            type = WType[600]
        } else if (id >= 500 && id < 600) {
            type = WType[500]
        } else if (type >= 300 && id < 400) {
            type = WType[300]
        } else {
            type = WType[200]
        }

        return type;
    }

    const lookupLoc = () => {
        ipLookup()
        .then(success => {
            
            let data = !!success ? 
            {
                ...success,
                longitude: success.lon,
                latitude: success.lat
            } :
            {
                latitude: latitude,
                longitude: longitude,
                city: city,
                country: country
            };

            setLatitude(data.latitude);
            setLongitude(data.longitude);
            setCity(data.city);
            setCountry(data.country);
            getCurrentWeather(`${city},${country}`, wunit)
            .then(success => {
                let {data} = success;
                //console.log(data)
                setWtemp(data.main.temp);
                setWeather({
                    ...data.main,
                    name: data.name,
                    weatherMain: data.weather[0].main,
                    weatherText: data.weather[0].description,
                    icon: `${API.WEATHER_API_ICON_PATH}/${data.weather[0].icon}@2x.png`,
                    id: data.weather[0].id
                })
            })
            .catch(error => {
                console.error("Current Weather Error: ", error);
            })
        })
    }

    useEffect(() => {
        lookupLoc();
    }, [])

    return (
        <Wrapper>
            <WeatherText>
                <WIcon type={getWType(weather.id)} text={weather.weatherText}></WIcon>
            </WeatherText>
            {props.children}
            <Wave/>
            <Card>
                <CityText>{city}</CityText>
                <TempSwitcher>
                    <span id="metric" className={wunit === "metric"? "active":""} onClick={wunit_change}>°C</span>
                    <span id="imperial" className={wunit === "imperial"? "active":""} onClick={wunit_change}>°F</span>
                </TempSwitcher>
                <TempText>
                    {Math.round(wtemp)}
                    <small className="degree">o</small>
                </TempText>
                
            </Card>
        </Wrapper>
    )
}

export default Weather;

Weather.defaultProps = {
    
}