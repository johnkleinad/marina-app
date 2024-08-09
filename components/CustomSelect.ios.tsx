import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated, Platform, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons'; // Usando expo/vector-icons

interface CustomSelectProps {
    placeholder: string;
    options: string[];
    onValueChange: (value: string) => void;
    selectedValue: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ placeholder, options, onValueChange, selectedValue }) => {
    const [isPickerVisible, setIsPickerVisible] = useState(false);
    const placeholderPosition = useRef(new Animated.Value(10)).current;
    const placeholderScale = useRef(new Animated.Value(1)).current;
    const placeholderOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isPickerVisible || selectedValue) {
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
            Animated.timing(placeholderOpacity, {
                toValue: 1,
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
            Animated.timing(placeholderOpacity, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }, [isPickerVisible, selectedValue]);

    const handlePickerOpen = () => {
        setIsPickerVisible(true);
    };

    const handlePickerClose = (value: string) => {
        setIsPickerVisible(false);
        onValueChange(value);
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
                        opacity: placeholderOpacity,
                    },
                ]}
            >
                {placeholder}
            </Animated.Text>
            <TouchableOpacity
                style={styles.input}
                onPress={handlePickerOpen}
                activeOpacity={1}
            >
                <Text style={selectedValue ? styles.text : styles.placeholderText}>
                    {selectedValue || placeholder}
                </Text>
                <MaterialIcons
                    name="arrow-drop-down"
                    size={24}
                    color="#aaa"
                    style={styles.icon}
                />
            </TouchableOpacity>
            {isPickerVisible && Platform.OS === 'ios' && (
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={isPickerVisible}
                    onRequestClose={() => setIsPickerVisible(false)}
                >
                    <View style={styles.modalContainerIOS}>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={handlePickerClose}
                            >
                                {options.map((option, index) => (
                                    <Picker.Item key={index} label={option} value={option} />
                                ))}
                            </Picker>
                            <TouchableOpacity onPress={() => setIsPickerVisible(false)} style={styles.doneButton}>
                                <Text style={styles.doneButtonText}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
            {isPickerVisible && Platform.OS === 'android' && (
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={isPickerVisible}
                    onRequestClose={() => setIsPickerVisible(false)}
                >
                    <View style={styles.modalContainerAndroid}>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={(itemValue) => {
                                    handlePickerClose(itemValue);
                                }}
                            >
                                {options.map((option, index) => (
                                    <Picker.Item key={index} label={option} value={option} />
                                ))}
                            </Picker>
                            <TouchableOpacity onPress={() => setIsPickerVisible(false)} style={styles.doneButton}>
                                <Text style={styles.doneButtonText}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
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
        flex: 1,
    },
    input: {
        height: 40,
        fontSize: 16,
        color: '#000',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#000',
        flex: 1,
    },
    placeholderText: {
        fontSize: 16,
        color: '#aaa',
        flex: 1,
    },
    placeholder: {
        position: 'absolute',
        left: 0,
        top: 0,
        color: '#aaa',
        fontSize: 16,
    },
    modalContainerIOS: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainerAndroid: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    pickerContainer: {
        backgroundColor: 'white',
        paddingVertical: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    doneButton: {
        alignItems: 'center',
        padding: 10,
    },
    doneButtonText: {
        fontSize: 16,
        color: '#007AFF',
    },
    icon: {
        marginLeft: 10,
    },
});

export default CustomSelect;