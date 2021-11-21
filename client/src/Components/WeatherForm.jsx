import React, {Component} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";

import axios from 'axios';

class WeatherForm extends Component {
    state = {
        address: "",
        weatherData : ""
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    saveFormData = (event) => {
        event.preventDefault();
        axios.post("/api/weather", {
            address: this.state.address,
        }).then(response => {
            let weatherData = response.data;
            this.setState({weatherData: weatherData});
        });
    }

    render() {
        return (
            <div>
                <Form className="weather-form" onSubmit={this.saveFormData}>

                <Row type="flex" justify="center" align="center" className="address">
                    <Col>
                        <span>Location </span>
                        <Form.Control name="address"
                                      type="text"
                                      placeholder="Enter your location"
                                      onChange={this.onChange}
                                      className="address"/>
                    </Col>
                </Row>

                <Row type="flex" justify="center" align="center">
                    <Col span={4}>
                        <Button className="save-btn" variant="primary" type="submit">
                            Search
                        </Button>
                    </Col>
                </Row>

            </Form>
            <section id="about">
      <div className="row">
         <div className="nine columns main-col">
            <h2>Weather Info</h2>

            <p>{this.state.weatherData.forecast}</p>
            <p>{this.state.weatherData.location}</p>
         </div>
      </div>

   </section>
            
            </div>
            
        );
    }
}

export default WeatherForm;