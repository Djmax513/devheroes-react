import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet } from 'react-native'
import { Box, Text, Image, Flex, Pressable } from "native-base";
import MapView from 'react-native-maps';
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    watchPositionAsync,
    LocationAccuracy
} from 'expo-location'

function HomeHeader() {
    const [nome, setNome] = useState("Amanda")
    return(
        <>
        <Flex direction='row' alignItems='center' bg={`primary.500`} p='6' safeAreaTop>
            <Image size={84} borderRadius={100} source={require("../../../assets/mock-user-profile.png")} alt="Perfil"/>
            <Box ml='5' w='70%' color='white'>
                <Text color='white' fontSize='lg'>Olá {nome},</Text>
                <Text color='white' fontSize='sm'>bem vindo de volta!</Text>
            </Box>
        </Flex>
        {/* <Image size={30} w='100%' source={require("../../../assets/header-shape.png")} alt="Perfil"/> */}
        </>
    )
}

export default function HomePage() {
    const [raceStartPoint, setRaceStartPoint] = useState()
    const [raceEndPoint, setRaceEndPoint] = useState()
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
        <Box>
            <HomeHeader />
        </Box>
        <Box style={styles.container} p={4}>
            {/* <Center mb={24}>
                <Text fontSize={'lg'} color={'#333333'}>Busque pelo seu destino aqui</Text>
                <TextInput placeholder="Partida" />
                <TextInput placeholder="Destino" />
            </Center> */}


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
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    mapContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 20,
        overflow: 'hidden',
    }
  });