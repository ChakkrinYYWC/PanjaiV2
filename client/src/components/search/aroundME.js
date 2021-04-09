import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Geocode from "react-geocode";
import Axios from 'axios'

// const fetch = require("isomorphic-fetch");
// const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const { compose, withProps, withHandlers } = require("recompose");
Geocode.setApiKey("AIzaSyC8YoATcEUeQOTMNL6a0V3gDas0yFDV-rg");
Geocode.enableDebug();

function AroundME() {

    var [lat, setLat] = useState(0)
    var [long, setLong] = useState(0)

    class Map extends React.PureComponent {

        state = {
            mapPosition: {
                lat: 13.736717,
                lng: 100.523186,
            }
        }

        around = [];

        componentWillMount() {
            this.setState({ markers: [] })
        }

        componentDidMount() {

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {

                    setLat(position.coords.latitude)
                    setLong(position.coords.longitude)

                    this.setState({
                        mapPosition: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        }
                    })
                }, () => {
                    if (navigator.permissions) {
                        navigator.permissions.query({ name: 'geolocation' }).then(res => {
                            if (res.state === 'denied') {
                                alert('Enable location permissions for this website in your browser settings.')
                            }
                        })
                    } else {
                        alert('Unable to access your location. You can continue by submitting location manually.')
                    }
                });
            } else {
                alert("Sorry, Geolocation is not supported by this browser.");
            }

            Axios.get('/Foundation/', {
            }).then(res => {
                var result_lat = 0
                var result_long = 0
                for (let i = 0; i < res.data.length-6; i++) {

                    result_lat = lat - res.data[i].lat
                    result_long = long - res.data[i].lng

                    if(result_lat > -2 && result_lat < 2 && result_long > -2 && result_long < 2){
                        console.log(res.data[i])
                        this.around.push(res.data[i])
                    }
                    console.log(lat)
                    console.log(long)
                    console.log(res.data[i].lat)
                    console.log(res.data[i].lat)
                    console.log('result   '+result_lat)
                    console.log('result   '+result_lat)
                    console.log(this.around)
                }
                // console.log(this.around)
                console.log(lat)
                console.log(long)
                this.setState({ markers: this.around });
            }).catch(error => console.log(error))
        }

        render() {

            console.log(lat)
            console.log(long)
            console.log('state' + this.state.mapPosition.lat)
            console.log('state' + this.state.mapPosition.lng)
            const MapWithAMarkerClusterer = compose(
                withProps({
                    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8YoATcEUeQOTMNL6a0V3gDas0yFDV-rg&v=3.exp&libraries=geometry,drawing,places",
                    loadingElement: <div style={{ height: `100%` }} />,
                    containerElement: <div style={{ height: `400px` }} />,
                    mapElement: <div style={{ height: `100%` }} />,
                }),
                withScriptjs,
                withGoogleMap
            )(props =>
                <GoogleMap
                    defaultZoom={15}
                    defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                >
                    {props.markers.map(marker => (
                        <Marker
                            position={{ lat: marker.lat, lng: marker.lng }}
                        />
                    ))}
                </GoogleMap>
            );

            return (
                <>
                    {/* <button className="btn btn-lg " onClick={getPosition}>here</button> */}
                    <MapWithAMarkerClusterer markers={this.state.markers} />
                </>
            )
        }
    }

    return (
        <>
            <Map />
            {/* <button className="btn btn-lg " onClick={getPosition}>here</button> */}
        </>
    );
}

// const getPosition = () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, posError);
//     } else {
//         alert("Sorry, Geolocation is not supported by this browser.");
//     }
// }

// const posError = () => {
//     if (navigator.permissions) {
//         navigator.permissions.query({ name: 'geolocation' }).then(res => {
//             if (res.state === 'denied') {
//                 alert('Enable location permissions for this website in your browser settings.')
//             }
//         })
//     } else {
//         alert('Unable to access your location. You can continue by submitting location manually.')
//     }
// }

// const showPosition = (position) => {
//     let lat = position.coords.latitude // You have obtained latitude coordinate!
//     let long = position.coords.longitude // You have obtained longitude coordinate!

//     this.setState({
//         mapPosition: {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//         }
//     })
//     console.log(lat)
//     console.log(long)
// }

export default AroundME;