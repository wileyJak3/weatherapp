import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import DayCard from "./DayCard.js";

function PrintHour(props) {

    console.log(props.hourly)


    let weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let PrintCardHourly = (hour) => {
        const filteredArray = []
        hour.forEach(hour => {
           
            console.log(props.day)
            let UNIX_Timestamp = hour.dt;
            console.log(UNIX_Timestamp);
            let date = new Date(UNIX_Timestamp * 1000);
            console.log("This is current date", date.getDay());
            let dateDay = weekday[date.getDay()];