import React from "react";
import { StyleSheet, View } from "react-native";
import { Box, Button, Image, Center, Pressable, Flex, Text, Stack, VStack, HStack } from "native-base";

const carOptionsArray = [
    {
        optionName: 'Carro Padrão',
        optionPrice: 'R$25,35',
        imageSrc: '../../../../../assets/logo.png'
    },
    {
        optionName: 'Cyber Bag',
        optionPrice: 'R$43,80',
        imageSrc: '../../../../../assets/logo.png'
    },
    {
        optionName: 'Cyber Moto',
        optionPrice: 'R$12,90',
        imageSrc: '../../../../../assets/logo.png'
    },
]

function CarOptions ({ optionName, optionPrice, imageSrc }) {
    return (
        <VStack w={'33%'} space={1} textAlign={'center'} justifyContent={'center'} alignItems={'center'}>
            <Image size={85} borderRadius={100} source={require('../../../../../assets/logo.png')} alt={optionName}/>
            <Center>
                <Text fontWeight={600} fontSize={16} color={'gray.600'}>{optionName}</Text>
                <Text fontWeight={700} fontSize={14} color={'gray.500'} textAlign={'center'}>{optionPrice}</Text>
            </Center>
        </VStack>
    )
}

export default function RaceDetails() {
    return (
        <View style={styles.detailsContainer}>
            <Center my={4}>
                <Text fontSize='xl' fontWeight={700}>Resumo da Corrida</Text>
                <HStack mt={5} justifyContent={'center'} alignItems={'center'}>
                    {carOptionsArray.map((i) => {
                        return (
                            <CarOptions optionName={i.optionName} optionPrice={i.optionPrice} imageSrc={i.imageSrc}/>
                            )
                        })}
                </HStack>
                <Pressable textAlign={'center'} bg={'black'} mx={'auto'} w={'80%'} mt={5} borderRadius={7}>
                    {/* <Text mx={'auto'} fontSize={18} color={'white'} p={3}>Confirmar Corrida</Text> */}
                    <Button height={46}>Confirmar Corrida</Button>
                </Pressable>
            </Center>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        position: 'absolute',
        elevation: 10,
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        // borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
    },
    
});