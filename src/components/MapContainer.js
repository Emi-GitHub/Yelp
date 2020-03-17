import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import '../Style/Map.css';

class MapContainer extends Component {
  render() {
    const list = this.props.businesses.map( (item,i) => {
      return <Marker
              title="Location"
              name={'Current location'}
            id={1}
            position={{lat: item.coordinates.latitude, lng: item.coordinates.longitude}}
            key={i} 
            />
      
  });
    return (
          <div className="yelp-child-2">
              <Map 
            className="mapa"
              google={this.props.google}
              center={{
                lat: this.props.lat, 
                lng: this.props.lng 
              }}
              zoom={12}>
                {list}
            </Map>
          </div>
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