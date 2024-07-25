import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Animated, StyleSheet, Text, TextInputProps, KeyboardTypeOptions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface CustomInputProps extends TextInputProps {
    placeholder: string;
    type: 'text' | 'email' | 'password' | 'number';
    onChangeText: (text: string) => void;
    maxLength?: number;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, type, onChangeText, maxLength, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const placeholderPosition = useRef(new Animated.Value(10)).current;
    const placeholderScale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (isFocused || inputValue) {
            Animated.timing(placeholderPosition, {
                toValue: -20,
                duration: 200,
                useNativeDriver: true,
            }).start();
            Animated.timing(placeholderScale, {
                toValue: 0.8,
                duration: 200,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(placeholderPosition, {
                toValue: 10,
                duration: 200,
                useNativeDriver: true,
            }).start();
            Animated.timing(placeholderScale, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }, [isFocused, inputValue]);

    const getKeyboardType = (): KeyboardTypeOptions => {
        if (type === 'email') return 'email-address';
        if (type === 'number') return 'numeric';
        return 'default';
    };

    const handleChangeText = (text: string) => {
        if (type === 'number') {
            // Filtrar caracteres no numéricos
            const numericText = text.replace(/[^0-9]/g, '');
            if (maxLength) {
                if (numericText.length <= maxLength) {
                    setInputValue(numericText);
                    onChangeText(numericText);
                }
            } else {
                setInputValue(numericText);
                onChangeText(numericText);
            }
        } else {
            setInputValue(text);
            onChangeText(text);
        }
    };

    return (
        <View style={styles.container}>
            <Animated.Text
                style={[
                    styles.placeholder,
                    {
                        transform: [
                            { translateY: placeholderPosition },
                            { scale: placeholderScale },
                        ],
                    },
                ]}
            >
                {placeholder}
            </Animated.Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={handleChangeText}
                    value={inputValue}
                    secureTextEntry={type === 'password' && !isPasswordVisible}
                    keyboardType={getKeyboardType()}
                    {...props}
                />
                {type === 'password' && (
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <MaterialIcons
                            name={isPasswordVisible ? 'visibility-off' : 'visibility'}
                            size={20}
                            color="#aaa"
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#A9A4A4',
        paddingBottom: 5,
        marginBottom: 20,
        position: 'relative',
        flex: 1
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    placeholder: {
        position: 'absolute',
        left: 0,
        top: 0,
        color: '#aaa',
        fontSize: 16,
    },
    input: {
        height: 40,
        fontSize: 16,
        color: '#000',
        flex: 1,
    },
    icon: {
        marginLeft: 10,
    },
});

export default CustomInput;