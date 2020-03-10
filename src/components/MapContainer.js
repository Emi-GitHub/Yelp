import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
class MapContainer extends Component {
  render() {
    const list = this.props.businesses.map( (item) => {
      //return console.log('lat:', item.coordinates.latitude, 'lng:', item.coordinates.longitude)
      return <Marker
              title="Location"
              name={'Current location'}
          id={1}
            position={{lat: item.coordinates.latitude, lng: item.coordinates.longitude}} 
            />
      
  });
    return (
          <Map 
            google={this.props.google}
            style={{width:"650px", height:"650px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
            initialCenter={{
              lat: this.props.lat,
              lng: this.props.lng
            }}
            zoom={10}>
              {list}
              <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
          </Map>
    );
  }
}

const mapStateToProps = (state) => ({
  businesses: state.businesses,
  lat: state.lat,
  lng: state.lng
});

const WrappedContainer = GoogleApiWrapper({
  apiKey: ("AIzaSyCvBM6Ku8NBrtdgIUwd3iUfu1cU-mk1q6g")
  })(MapContainer);
  
  export default connect(mapStateToProps)(WrappedContainer);