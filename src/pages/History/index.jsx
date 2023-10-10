import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Box, Center, Pressable, Flex, Text, Stack, VStack } from "native-base";


const raceList = [
    {
        date: '08h45, 25 Jun',
        price: 13.85,
        status: 'finished',
        destination: 'Rua do Destino',
        driversName: 'Andre Santos',
        ratingScore: 5
    },
    {
        date: '12h23, 26 Jun',
        price: 25.50,
        status: 'finished',
        destination: 'Rua Sapopemba',
        driversName: 'Juliana Barreiro',
        ratingScore: 4
    },
    {
        date: '13h07, 29 Jun',
        price: 14.90,
        status: 'finished',
        destination: 'Avenida Washington Luiz',
        driversName: 'Victor Antunes',
        ratingScore: 5
    },
    {
        date: '22h15, 31 Jun',
        price: 16.40,
        status: 'finished',
        destination: 'Rua Ipê',
        driversName: 'Amanda da Silva',
        ratingScore: 3
    },
]

function RaceList() {

    return (
        <Box mt={4} w={'100%'}>
            {raceList.map((item) => {
                return (
                    <Center key={item.date}>
                        <Pressable my={1} bg={'muted.200'} w={'90%'} p={3} borderRadius={7}>
                            <Flex direction="row" justifyContent={'space-between'} alignItems={'center'}>
                                <VStack space={2.5} width={'100%'}>
                                    <Stack>
                                        <Flex direction="row" justifyContent={'space-between'} alignItems={'center'}>
                                            <Text direction='row' fontSize={"md"} fontWeight={600} color={"#333333"}>{item.destination}</Text>
                                            <Text fontSize={"sm"} fontWeight={400} color={"#333333"}>
                                                <AntDesign name="star" size={13} color="black" />
                                                {item.ratingScore}
                                            </Text>
                                        </Flex>
                                    </Stack>
                                    <Stack>
                                        <Flex direction="row" justifyContent={'space-between'} alignItems={'center'}>
                                                <Text fontSize={"sm"} fontWeight={400} color={"#333333"}>{item.date}</Text>
                                                <Text fontSize={"sm"} fontWeight={900} color={"#333333"}>R$ {item.price}</Text>
                                        </Flex>
                                    </Stack>
                                </VStack>
                            </Flex>
                        </Pressable>
                    </Center>
                )
            })}
        </Box>
    )
}

export default function HistoryPage() {
    return (
        <Box safeAreaTop>
            <Center my={4}>
                <Text fontSize='xl' fontWeight={700}>Histórico de corridas</Text>
                <RaceList />
            </Center>
        </Box>
    )
}