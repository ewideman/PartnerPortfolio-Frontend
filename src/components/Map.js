import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import Geocode from "react-geocode";

const key = 'AIzaSyBKapTzkA3PwlgOMdUgJ49IoVsTNOh-Mjk'; //Key Input

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(key);

// set response language. Defaults to english.
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const Map = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`, //Input unique Key
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => (
    <GoogleMap
        defaultZoom={8}
        //defaultCenter={{ lat: -34.397, lng: 150.644 }}

        //Create object to match to address in models
        defaultCenter={{ lat: props.address.lat, lng: props.address.lng }}
    >
        {props.isMarkerShown && <Marker position={{ lat: props.address.lat, lng: props.address.lng }} onClick={props.onMarkerClick} />}
    </GoogleMap>
))

class MapView extends React.PureComponent {
    state = {
        isMarkerShown: false,
        address: null
    }

    componentDidMount() {
        this.delayedShowMarker()

        Geocode.fromAddress(this.props.address).then(
            (response) => {
                console.log('response', response)
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                this.setState({
                    address: {lat, lng}
                });
            },
            (error) => {
                console.error(error);
            }
        );
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        const { address } = this.state;

        if (!address) return null;

        return (
            <Map
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
                address={address}
            />
        )
    }
}

export default MapView;
