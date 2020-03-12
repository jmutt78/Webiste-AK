import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
console.log(process.env.GOOGLE);
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.40733,
      lng: -81.94113
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: "40vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
