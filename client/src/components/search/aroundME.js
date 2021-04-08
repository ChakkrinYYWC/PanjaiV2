import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Geocode from "react-geocode";
import Axios from 'axios'

// const fetch = require("isomorphic-fetch");
// const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const { compose, withProps, withHandlers } = require("recompose");
Geocode.setApiKey("AIzaSyC8YoATcEUeQOTMNL6a0V3gDas0yFDV-rg");
Geocode.enableDebug();

function aroundME() {

    class Map extends React.PureComponent {

        state = {
            mapPosition: {
                lat: 0,
                lng: 0,
            }
        }

        componentWillMount() {
            this.setState({ markers: [] })
        }

        componentDidMount() {

            Axios.get('/Foundation/', {
            }).then(res => {
                this.setState({ markers: res.data });
            }).catch(error => console.log(error))

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
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

        }

        render() {

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

            console.log(this.state.mapPosition.lat)
            console.log(this.state.mapPosition.lng)
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
            <h2>Hello555555</h2>
        </>
    );
}

export default aroundME;