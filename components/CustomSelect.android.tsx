import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface CustomSelectProps {
    placeholder: string;
    options: string[];
    onValueChange: (value: string) => void;
    selectedValue: string;
}

const CustomSelectAndroid: React.FC<CustomSelectProps> = ({ placeholder, options, onValueChange, selectedValue }) => {
    return (
        <View style={styles.container}>
            {selectedValue ? (
                <Text style={styles.label}>{placeholder}</Text>
            ) : null}
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                mode="dropdown"
            >
                <Picker.Item label={placeholder} value="" color="#A9A4A4" />
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                ))}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#A9A4A4',
        marginBottom: 20,
        height: 40,
        justifyContent: 'center',
    },
    label: {
        position: 'absolute',
        top: -10,
        left: 0,
        color: '#A9A4A4',
        fontSize: 12,
    },
    picker: {
        width: '107%',
        height: '100%',
        marginLeft: -15,
        marginRight: -45,
        padding: -100,
        backgroundColor: 'transparent',
    },
    pickerItem: {
        height: 40,
        color: '#000',
    },
});

export default CustomSelectAndroid;