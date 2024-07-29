import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, ScrollView, StatusBar, Platform } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomSelectIos from '../components/CustomSelect.ios';
import CustomSelectAndroid from '../components/CustomSelect.android';
import countriesData from '../assets/countries.json';
import CustomButton from '../components/CustomButton';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [age, setAge] = useState('');
    const [identifyAs, setIdentifyAs] = useState('');
    const [country, setCountry] = useState('');
    const [identify, setIdentify] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleSignup = () => {
        // Implementar lógica de registro de usuario aquí
    };
    const handleNavigate = () => {
        // Implementar lógica de navegación aquí
    };
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    type='text'
                    placeholder='Name'
                    onChangeText={setName}
                />
                <CustomInput
                    type='email'
                    placeholder='Email'
                    onChangeText={setEmail}
                />
                <CustomInput
                    type='password'
                    placeholder='Password'
                    onChangeText={setPassword}
                />
                <CustomInput
                    type='password'
                    placeholder='Confirm password'
                    onChangeText={setConfirmPassword}
                />
                <View style={styles.row}>
                    <CustomInput
                        type='number'
                        placeholder='Age'
                        onChangeText={setAge}
                        maxLength={2}
                    />
                    <CustomInput
                        type='number'
                        placeholder='Phone number'
                        onChangeText={setPhoneNumber}
                        maxLength={10}
                    />
                </View>
                {Platform.OS === 'ios' ? (
                    <CustomSelectIos
                        placeholder="I identify as"
                        options={['Male', 'Female', 'Non-binary', 'Prefer not to say']}
                        selectedValue={identify}
                        onValueChange={setIdentify}
                    />
                ) : (
                    <CustomSelectAndroid
                        placeholder="I identify as"
                        options={['Male', 'Female', 'Non-binary', 'Prefer not to say']}
                        selectedValue={identify}
                        onValueChange={setIdentify}
                    />
                )}
                {/* <CustomSelect
                    placeholder="I identify as"
                    options={['Male', 'Female', 'Non-binary', 'Prefer not to say']}
                    selectedValue={identify}
                    onValueChange={setIdentify}
                />
                <CustomSelect
                    placeholder="Country"
                    options={countriesData.countries.map(country => country.name)}
                    selectedValue={country}
                    onValueChange={setCountry}
                /> */}
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <CustomButton type="gradient" title="Signup" onPress={handleSignup} />
                    <Text style={{
                        fontSize: 14,
                        paddingBottom: 10,
                    }}>Already have an Account?</Text>
                    <CustomButton type="transparent" title="Log in" onPress={handleNavigate} color="#FF004F" />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
        paddingHorizontal: 32,
        paddingVertical: 150,
        justifyContent: 'center',
        gap: 12,
    },
    title: {
        color: '#FD1106',
        fontSize: 25,
        fontWeight: '400',
        paddingVertical: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 30,
    },
});

export default Signup;