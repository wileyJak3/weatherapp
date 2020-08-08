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
            console.log("this is date day",dateDay)
            if(dateDay == props.day){
                filteredArray.push(hour)
            }
        });
       
        console.log("this is the filtered array",filteredArray)
        filteredArray.map(hour => {
       
          console.log("this is the hourly array",hour)
          let weatherIconURL = `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`;
          console.log("this is the weatherUrl", weatherIconURL);
          let UNIX_Timestamp = hour.dt;
          console.log(UNIX_Timestamp);
          let date = new Date(UNIX_Timestamp * 1000);
        console.log("This is current date", date);
        let dateDay = weekday[hour.getDay()];
        console.log("this is dateday", dateDay);
        return (
          <DayCard
          title={dateDay}
          subtitle={date.getDate()}
          subtitleMonth={date.getMonth()}
          iconURL={weatherIconURL}
          hiTemp={hour.temp.max}
          loTemp={hour.temp.min}
          link={dateDay}
        />
      );
    })
  }
  return (
    <div>
      <Container>
        <Row>{PrintCardHourly(props.hourly)}</Row>
      </Container>
    </div>
  );
}

export default PrintHour;
