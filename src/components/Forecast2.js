import React, { useState, useEffect } from "react";
import axios from "axios";
import DayCard from "./DayCard.js";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "../styles/Forecast2.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrintHour from "./PrintHour";
import Forecast2 from "./Forecast2";
const API_KEY = process.env.REACT_APP_EXAMPLE_API_KEY;
const URL =
  "http://api.openweathermap.org/data/2.5/onecall?lat=33.753746&lon=-84.386330&units=imperial&exclude=minutely&appid=";
const apiKey = API_KEY;

const Forecast = () => {
  const [data, setData] = useState(null);
  const apiLink = URL + apiKey;

  async function getAnswer() {
    try {
      const response = await axios.get(apiLink);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("!!Señor!! PROBLEMA:", error.message);
    }
  }
  useEffect(() => {
    getAnswer();
  }, []); // This bracket here is to prevent onUpdate behavior. So we're telling it to re-render when [] (nothing) updates

  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let printCard = (day) => {
    let weatherIconURL = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
    console.log("this is the weatherUrl", weatherIconURL);
    let UNIX_Timestamp = day.dt;
    console.log(UNIX_Timestamp);
    let date = new Date(UNIX_Timestamp * 1000);
    console.log("This is current date", date);
export default Forecast;
