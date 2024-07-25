import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface CustomSelectProps {
    placeholder: string;
    options: string[];
    onValueChange: (value: string) => void;
    selectedValue: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ placeholder, options, onValueChange, selectedValue }) => {
    const [isPickerVisible, setIsPickerVisible] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;

    const handlePickerOpen = () => {
        if (Platform.OS === 'ios') {
            setIsPickerVisible(true);
            Animated.timing(animation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }).start();
        } else {
            setIsPickerVisible(!isPickerVisible);
        }
    };

    const handlePickerClose = (value: string) => {
        if (Platform.OS === 'ios') {
            Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start(() => {
                setIsPickerVisible(false);
                onValueChange(value);
            });
        } else {
            setIsPickerVisible(false);
            onValueChange(value);
        }
    };

    const pickerHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200],
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.input}
                onPress={handlePickerOpen}
            >
                <Text style={selectedValue ? styles.text : styles.placeholderText}>
                    {selectedValue || placeholder}
                </Text>
            </TouchableOpacity>
            {isPickerVisible && Platform.OS === 'ios' && (
                <Animated.View style={[styles.pickerContainer, { height: pickerHeight }]}>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={handlePickerClose}
                        mode="dialog"
                    >
                        {options.map((option, index) => (
                            <Picker.Item key={index} label={option} value={option} />
                        ))}
                    </Picker>
                </Animated.View>
            )}
            {isPickerVisible && Platform.OS === 'android' && (
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={handlePickerClose}
                    mode="dropdown"
                >
                    {options.map((option, index) => (
                        <Picker.Item key={index} label={option} value={option} />
                    ))}
                </Picker>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 5,
        marginBottom: 20,
        position: 'relative',
        flex: 1,
    },
    input: {
        height: 40,
        fontSize: 16,
        color: '#000',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
    placeholderText: {
        fontSize: 16,
        color: '#aaa',
    },
    pickerContainer: {
        overflow: 'hidden',
    },
});

export default CustomSelect;