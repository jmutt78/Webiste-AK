import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const API = "AIzaSyCKvxdQKLewJXfA55mlYiNRPFbbcBX6fes";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
          bootstrapURLKeys={{ key: API }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
