import React, { useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { Controller, useForm } from "react-hook-form";
import { MaskedTextInput} from "react-native-mask-text";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterPage() {
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
            paddingHorizontal: 20,
            marginTop: 25
        },
        formButton: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#643ca3",
            width: "50%",
            height: 50, 
            borderRadius: 15,
            marginBottom: 20
        },
        buttonText: {
            color: "#fff",
            fontWeight: "bold",
            textTransform: "uppercase"
        },
        label: {
            alignSelf: "flex-start",
            marginBottom: 10,
            paddingLeft: 10,
            fontWeight: "bold"
        },
        title: {
            alignSelf: "flex-start",
            marginBottom: 10,
            marginTop: 20,
            paddingLeft: 10,
            fontWeight: "bold",
            height: 40,
            fontSize: 20
        },
        doubleInput: {
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
        },
        inputError: {
            borderWidth: 2,
            borderColor: "red",
        },
        inputErrorMessage: {
            color: "red",
            marginTop: -15,
            marginBottom: 15,
            alignSelf: 'flex-start'
        }
    });

    const { control, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => console.log(errors), [errors])

    const onSubmit = async (data) => {
        await AsyncStorage.setItem("user", JSON.stringify(data));
        navigation.navigate('LoginPage')
    };

    return (
        <SafeAreaView style={{ flexGrow: 1 }}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1, justifyContent: "space-between"}}
            >
                <View/>
                <ScrollView>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Faça seu cadastro</Text>
                    <Text style={styles.label}>Informações pessoais</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: "Nome obrigatório"
                        }}    
                        name="name"
                        render={({field: {value, onChange}}) => (
                            <>
                                <TextInput placeholder="Nome" style={[styles.input, errors?.name ? styles.inputError : null]} value={value} onChangeText={onChange}/>
                                {errors?.name ? <Text style={styles.inputErrorMessage}>{errors.name.message}</Text> : null}
                            </>
                        )}
                    />

                    <Controller
                        control={control}
                        rules={{
                            required: "Sobrenome obrigatório"
                        }}    
                        name="lastname"
                        render={({field: {value, onChange}}) => (
                            <>
                                <TextInput placeholder="Sobrenome" style={[styles.input, errors?.lastname ? styles.inputError : null]} value={value} onChangeText={onChange}/>
                                {errors?.lastname ? <Text style={styles.inputErrorMessage}>{errors.lastname.message}</Text> : null}
                            </>
                        )}
                    />                
                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: "E-mail obrigatório",
                            pattern: {
                                message: "digite o valor corretamente",
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/i
                            }
                        }}           
                        render={({field: {value, onChange}}) => (
                            <>
                                <TextInput placeholder="E-mail" style={[styles.input, errors?.email ? styles.inputError : null]} value={value} onChangeText={onChange} keyboardType="email-address" />
                                {errors?.email ? <Text style={styles.inputErrorMessage}>{errors.email.message}</Text> : null}
                            </>
                        )}
                    /> 
                    <Controller
                        control={control}
                        rules={{
                            required: "Senha obrigatório",
                            pattern: {
                                message: "Senha precisa ter uma maiúscula, um dígito e 8 caracteres",
                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
                            }
                        }}    
                        name="password"
                        render={({field: {value, onChange}}) => (
                            <>
                                <TextInput placeholder="Senha" style={[styles.input, errors?.password ? styles.inputError : null]} value={value} onChangeText={onChange} secureTextEntry={true}/>
                                {errors?.password ? <Text style={styles.inputErrorMessage}>{errors.password.message}</Text> : null}
                            </>
                        )}
                    /> 
                    <Controller
                        control={control}
                        rules={{
                            required: "Número de telefone obrigatória",
                            minLength: {
                                message: "digite o valor corretamente",
                                value: 14
                            }
                        }}  
                        name="telephone"
                        render={({field: {value, onChange}}) => (
                            <>
                                <MaskedTextInput placeholder="Número de telefone" style={[styles.input, errors?.telephone ? styles.inputError : null]} value={value} keyboardType="phone-pad" onChangeText={onChange} mask="(99)99999-9999"/>
                                {errors?.telephone ? <Text style={styles.inputErrorMessage}>{errors.telephone.message}</Text> : null}
                            </>
                        )}
                    /> 

                    <Controller
                        control={control}
                        rules={{
                            required: "CPF obrigatório",
                            minLength: {
                                message: "digite o valor corretamente",
                                value: 14
                            }
                        }}    
                        name="id"
                        render={({field: {value, onChange}}) => (
                            <>
                                <MaskedTextInput placeholder="CPF" style={[styles.input, errors?.id ? styles.inputError : null]} value={value} onChangeText={onChange} keyboardType="numeric" mask="999.999.999-99"/>
                                {errors?.id ? <Text style={styles.inputErrorMessage}>{errors.id.message}</Text> : null}
                            </>
                        )}
                    />

                    <Controller
                        control={control}
                        rules={{
                            required: "Data de nascimento obrigatória",
                            minLength: {
                                message: "digite o valor corretamente",
                                value: 10
                            }
                        }}  
                        name="birth"
                        render={({field: {value, onChange}}) => (
                            <>
                                <MaskedTextInput placeholder="Data de nascimento" style={[styles.input, errors?.birth ? styles.inputError : null]} value={value} keyboardType="numeric" onChangeText={onChange} mask="99/99/9999"/>
                                {errors?.birth ? <Text style={styles.inputErrorMessage}>{errors.birth.message}</Text> : null}
                            </>
                        )}
                    /> 

                    <Text style={styles.label}>Endereço</Text>
                    <Controller
                        control={control}
                        name="street"
                        render={({field: {value, onChange}}) => (
                            <TextInput placeholder="Rua" style={styles.input} value={value} onChangeText={onChange}/>
                        )}
                    /> 
                    <View style={styles.doubleInput}>
                    <Controller
                        control={control}
                        name="neighborhood"
                        render={({field: {value, onChange}}) => (
                            <TextInput placeholder="Bairro" style={[styles.input, {width: "65%"}]} onChangeText={onChange}/>
                        )}
                    /> 
                    <Controller
                        control={control}
                        name="number"
                        render={({field: {value, onChange}}) => (
                            <TextInput placeholder="Número" style={[styles.input, {width: "30%"}]} value={value} keyboardType="numeric" onChangeText={onChange}/>
                        )}
                    />                                     
                    </View>
                    <View style={styles.doubleInput}>
                    <Controller
                        control={control}
                        name="state"
                        render={({field: {value, onChange}}) => (
                            <TextInput placeholder="Estado" style={[styles.input, {width: "30%"}]} onChangeText={onChange}/>
                        )}
                    />  
                    <Controller
                        control={control}
                        name="city"
                        render={({field: {value, onChange}}) => (
                            <TextInput placeholder="Cidade" style={[styles.input, {width: "65%"}]} onChangeText={onChange}/>
                        )}
                    />  
                    </View>
                    <TouchableOpacity style={styles.formButton} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}







