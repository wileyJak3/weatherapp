import React from "react";
//import ReactDOM from 'react-dom'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "../styles/DayCard.css";

import { BrowserRouter as Router, Switch, Route, Link } from 
"react-router-dom";

function DayCard(props) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  let currMonth = months[props.subtitleMonth];

  let path = "/"+props.link 
  console.log("this is the path",path)

  return (
    <div>
      <div className="card-align">
        <Col>
          <Card style={{ width: "10rem" }}>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <h6>
                {`${currMonth}
                ${props.subtitle}`}
              </h6>
              <a className="nav-link">
                <Link to={path}>
                {/* <Link to={`/${props.link}`}> */}
                  <Button variant="primary">
                    <Card.Img
                      variant="top"
                      src={props.iconURL}
                      // src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
                    />
                  </Button>
                </Link>
              </a>