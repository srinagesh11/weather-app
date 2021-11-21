import React, {Component} from "react";
import WeatherForm from "./WeatherForm";

class Container extends Component {
    render() {
        return(
            <section className="weather container">
                <WeatherForm />
            </section>
        );
    }
}

export default Container;