import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import { Box, Image, Text, Flex, Pressable, Center, VStack, Stack } from "native-base";
import MapView from 'react-native-maps';
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    watchPositionAsync,
    LocationAccuracy
} from 'expo-location'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "../../../enviroment";

function HomeHeader() {
    return(
        <>
        <Flex direction='row' alignItems='center' bg={`primary.500`} p='6' safeAreaTop>
            <Image size={84} borderRadius={100} source={require("../../../assets/mock-user-profile.png")} alt="Perfil"/>
            <Box ml='5' w='70%' color='white'>
                <Text color='white' fontSize='lg' numberOfLines={1}>Olá Amanda,</Text>
                <Text color='white' fontSize='sm'>bem vindo de volta!</Text>
            </Box>
        </Flex>
        {/* <Image size={30} w='100%' source={require("../../../assets/header-shape.png")} alt="Perfil"/> */}
        </>
    )
}

function RaceSearchInput({ title }) {
    return (
        <Box flex={1}>
            <GooglePlacesAutocomplete
                placeholder={title}
                style={styles.searchContainer}
                fetchDetails
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: GOOGLE_API_KEY,
                    language: 'pt-BR',
                }}
            />
        </Box>
    )
}

export default function HomePage() {
    // const [raceStartPoint, setRaceStartPoint] = useState()
    // const [raceEndPoint, setRaceEndPoint] = useState()
    const [location, setLocation] = useState(null)

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync()

        if(granted) {
            const currentPosition = await getCurrentPositionAsync()
        }
    }

    useEffect(() => {
        requestLocationPermissions();

        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) => {
            setLocation(response)
        })
    }, [])

    return (
        <> 
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Box>
                    <HomeHeader />
                </Box>
                <VStack>
                    <Box width={'100%'} elevation={4} bg={'red.100'}>
                        <RaceSearchInput title="title 1" />
                        <RaceSearchInput title="title 2" />
                    </Box>
                </VStack>
                <Box p={5}>
                    <Pressable style={styles.mapContainer}>
                        {location && (
                            <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005
                            }}
                            />
                        )}
                    </Pressable>
                </Box>
            </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 250
    },
    mapContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // elevation: 5,
        borderRadius: 20,
        overflow: 'hidden',
    },
    searchContainer: {
        backgroundColor: 'red',
    },
    container: {
        flex: 1,
      },
    scrollView: {
    },
  });