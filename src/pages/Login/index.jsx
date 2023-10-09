import React from "react";
import { View, Text, Button } from 'react-native'
import { useNavigation } from "@react-navigation/native"


export default function LoginPage() {
    const navigation = useNavigation()

    return (
        <View>
            <Text>Login</Text>
            <Button title="Entrar" onPress={() => navigation.navigate('HomePage')} />
        </View>
    )
}