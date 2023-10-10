import React from "react";
import { Box, Button, Pressable, Text, Image, Divider, Flex, Center } from "native-base";

import { Entypo } from '@expo/vector-icons';

function OptionButton({children}) {
    return (
        <Pressable my={1} bg={'muted.200'} w={'80%'} p={3} borderRadius={7}>
            <Flex direction="row" justifyContent={'space-between'} alignItems={'center'}>
                <Text fontSize={"sm"} fontWeight={600} color={"#333333"}>{children}</Text>
                <Entypo name="chevron-small-right" size={29} color="#333333" />
            </Flex>
        </Pressable>
    )
}

export default function ProfilePage() {
    return (
        <Box safeAreaTop>
            <Center mt={10}>
                <Image size={130} borderRadius={100} source={require("../../../assets/mock-user-profile.png")} alt="Perfil"/>
                <Text fontSize='lg' color={"gray.700"} mt={2} fontWeight={600}>Amanda Nunes Santos, 21</Text>
                <Text color={"gray.500"} fontSize={"sm"}>amanda.nunes235@gmail.com</Text>
            </Center>
            <Center p={5}>
                <Button colorScheme={"red"} w={"32"}>Sair</Button>
            </Center>

            <Divider mt={8} w={'64'} mx={"auto"} />

            <Box my={5}>
                <Center>
                    <OptionButton>Dados Pessoais</OptionButton>
                    <OptionButton>Favoritos</OptionButton>
                    <OptionButton>Cartões</OptionButton>
                    <OptionButton>Tema e Idioma</OptionButton>
                </Center>
            </Box>
        </Box>
    )
}