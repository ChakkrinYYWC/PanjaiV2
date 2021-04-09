import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import Geocode from "react-geocode";
import Axios from 'axios'
import { BrowserRouter as Router, Link, } from "react-router-dom";
import { compose, withProps, withHandlers, withStateHandlers, withState } from "recompose";


// const { compose, withProps, withHandlers, withStateHandlers, withState } = require("recompose");
Geocode.setApiKey("AIzaSyC8YoATcEUeQOTMNL6a0V3gDas0yFDV-rg");
Geocode.enableDebug();

function AroundME() {

    class Map extends React.PureComponent {

        state = {
            mapPosition: {
                lat: 13.736717,
                lng: 100.523186,
            }
        }

        around = [];
        result_kg = [];

        componentWillMount() {
            this.setState({ markers: [] })
        }

        componentDidMount() {

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {

                    // setLat(position.coords.latitude) //lat current
                    // setLong(position.coords.longitude) //long current

                    this.setState({
                        mapPosition: {
                            lat: position.coords.latitude,  //lat current
                            lng: position.coords.longitude, //long current
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
                for (let i = 0; i < res.data.length; i++) {

                    result_lat = this.state.mapPosition.lat - res.data[i].lat
                    result_long = this.state.mapPosition.lng - res.data[i].lng

                    if (result_lat > -0.25 && result_lat < 0.25 && result_long > -0.25 && result_long < 0.25) {
                        // console.log('****************')
                        // console.log(res.data[i])
                        this.around.push(res.data[i])
                    }

                    // console.log(res.data[i].lat)
                    // console.log(res.data[i].lng)
                    // console.log('result   ' + result_lat)
                    // console.log('result   ' + result_lat)
                    // console.log(this.around)
                }
                // console.log(this.around)
                this.setState({ markers: this.around });
            }).catch(error => console.log(error))
        }

        render() {

            console.log('state' + this.state.mapPosition.lat) //x1
            console.log('state' + this.state.mapPosition.lng) //y1
            console.log(this.state.markers)
            var c = 0
            var dlat = 0
            var dlong = 0
            var kg = 0

            this.state.markers.map(marker => (

                console.log(marker.lat),
                dlat = this.state.mapPosition.lat - marker.lat,
                dlong = this.state.mapPosition.lng - marker.lng,
                c = Math.sqrt(dlat * dlat + dlong * dlong),
                kg = c / (1 / 108.4),
                this.result_kg.push({ kg, marker })

            ))
            console.log(this.result_kg)

            this.result_kg.sort((a, b) => (a.kg > b.kg) ? 1 : -1) //sortระยะทาง

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
                <>
                    <GoogleMap
                        defaultZoom={14}
                        //defaultCenter={{ lat: 0, lng: 0 }}
                        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                    >
                        {props.markers.map(marker => (
                            <Marker
                                position={{ lat: marker.lat, lng: marker.lng }}
                                onClick={props.onToggleOpen}
                            >
                                {/* <InfoWindow onCloseClick={props.onToggleOpen}>
                                    <div>
                                        {"" + marker.title}
                                    </div>
                                </InfoWindow> */}
                            </Marker>
                        ))}
                    </GoogleMap>
                    <h1>มูลนิธิใกล้ฉัน</h1><br/>
                    {
                        this.result_kg.map(mark => (
                            <>
                                <Link to={"/Foundation/" + mark.marker.category + "/" + mark.marker._id} >{mark.marker.title}</Link>
                                <h1>ระยะห่าง : {mark.kg.toFixed(3)} กิโลเมตร</h1>
                                <br />
                            </>
                        ))
                    }
                </>
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