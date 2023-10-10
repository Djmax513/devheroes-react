import React from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from "@react-navigation/native"


export default function LoginPage() {
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
            
        }
      });

    const handleLogin = () => {

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
                <TextInput placeholder="Usuário" style={styles.input}/>
                <TextInput placeholder="Senha" style={styles.input}/>
                <TouchableOpacity style={styles.formButton}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HomePage')} >
                    <Text style={styles.textLink}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
            <Button title="Provisorio (faz login)" onPress={() => navigation.navigate('HomePage')}/>
        </KeyboardAvoidingView>
    );
}