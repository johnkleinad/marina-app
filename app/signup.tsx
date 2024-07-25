import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomSelect from '../components/CustomSelect';

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
                    />
                    <CustomInput
                        type='number'
                        placeholder='Phone number'
                        onChangeText={setPhoneNumber}
                    />
                </View>
                <CustomSelect
                    placeholder="I identify as"
                    options={['Male', 'Female', 'Non-binary', 'Prefer not to say']}
                    selectedValue={identify}
                    onValueChange={setIdentify}
                />
                <CustomSelect
                    placeholder="Select an option"
                    options={['Option 1', 'Option 2', 'Option 3']}
                    selectedValue={selectedOption}
                    onValueChange={setSelectedOption}
                />
                <Button title="Signup" onPress={handleSignup} />
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
    input: {
        marginBottom: 12,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
});

export default Signup;