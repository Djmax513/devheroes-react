import React, { useState, useRef, useEffect } from "react";
import { View } from "react-native";
import MapView from 'react-native-maps';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location'
import SearchAutocomplete from "./components/SearchAutocomplete"
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from "../../../enviroment";
import RaceDetails from "./components/RaceDetails"

export default function HomePage() {
    const [location, setLocation] = useState(null);
    const [destination, setDestination] = useState(null);
    const [origin, setOrigin] = useState(null);

    const map = useRef();

    async function fitMapToDirections() {
        map.current.fitToCoordinates([
            origin,
            destination,
        ], {
            edgePadding: {
              top: 20,
              right: 50,
              bottom: 200,
              left: 50,
            },
          });
    }

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
        }
    }

    useEffect(() => {
        requestLocationPermissions();

        watchPositionAsync(
            {
                accuracy: LocationAccuracy.Highest,
                timeInterval: 1000,
                distanceInterval: 1,
            },
            (response) => {
                // console.log("@location response", response)
                setLocation({
                    latitude: response.coords.latitude,
                    longitude: response.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                });
            }
        );
    }, []);

    useEffect(() => {
        setOrigin(location)
    }, [destination]);

    return (
        <View>
        {location !== null && (
            <MapView
                style={{width: "100%", height: "100%"}}
                initialRegion={location}
                loadingEnabled
                showsUserLocation
                userLocationCalloutEnabled={false}
                showsMyLocationButton={false}
                showsCompass={false}
                ref={map}
            >
                {destination !== null && (
                    <>
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={GOOGLE_API_KEY}
                            strokeWidth={4}
                            strokeColor="blue"
                            mode={'TRANSIT'}
                            onReady={() => fitMapToDirections()}
                            />
                    </>
                )}
            </MapView>
        )}

            <SearchAutocomplete setDestination={setDestination} />
            {destination !== null && (
                <>
                    <RaceDetails />
                </>
            )}
        </View>
    );
}
