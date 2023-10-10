import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function LoginPage() {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    }) 
    const navigation = useNavigation()
    const styles = StyleSheet.create({
        input: {
            width: "100%", 
            backgroundColor: "#DDD", 
            color: "#000", 
            height: 50, 
            marginBottom: 20, 
            paddingHorizontal: 20,
            borderRadius: 10
        },
        formContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingHorizontal: 20
        },
        formButton: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#643ca3",
            width: "50%",
            height: 50, 
            borderRadius: 15
        },
        buttonText: {
            color: "#fff",
            fontWeight: "bold",
            textTransform: "uppercase"
        },
        image: {
            borderRadius: 999,
            width: 250,
            height: 250
        },
        imageContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 100,
            marginBottom: 0
        },
        label: {
            alignSelf: "flex-start",
            marginBottom: 10,
            paddingLeft: 10,
            fontWeight: "bold"
        },
        textLink: {
            marginTop: 10,
            fontSize: 15,
            textDecorationLine: "underline"
        },
        inputError: {
            borderWidth: 2,
            borderColor: "red",
        },
        errorMessage: {
            marginBottom: 15,
            marginTop: -8,
            color: "red"
        }
      });

    const handleLogin = async () => {
        setLoading(true);

        const loggedUser = await AsyncStorage.getItem("user");
        const cleanUser = JSON.parse(loggedUser);
        if (cleanUser?.email === formData?.email) {
            if (cleanUser?.password === formData?.password) {
                setError(false);
                navigation.navigate('HomePages')
            }
        } 

        setError(true);
        setLoading(false);
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1, justifyContent: "space-between"}}>
            <View style={styles.imageContainer}>
                <Image source={require("../../../assets/logo.png")} style={styles.image}/>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Faça seu Login</Text>
                <TextInput placeholder="E-mail" style={[styles.input, error ? styles.inputError : null]} value={formData?.email} onChangeText={(text) => setFormData({...formData, email: text})}/>
                <TextInput placeholder="Senha" style={[styles.input, error ? styles.inputError : null]} secureTextEntry={true} value={formData?.password} onChangeText={(text) => setFormData({...formData, password: text})}/>
                {error ? <Text style={styles.errorMessage}>E-mail ou senha errados</Text> : null}
                <TouchableOpacity style={styles.formButton} onPress={() => handleLogin()} disabled={loading}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')} >
                    <Text style={styles.textLink}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
            <View />
        </KeyboardAvoidingView>
    );
}