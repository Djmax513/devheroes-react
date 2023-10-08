import React from "react";
import { View, Text, Button } from 'react-native'
import { useNavigation } from "@react-navigation/native"


export default function LoginPage() {
    const navigation = useNavigation()

    return (
        <View>
            <Text>Login page!!</Text>
            <Button title="Press Me!" onPress={() => navigation.navigate('HomePage')} />
        </View>
    )
}