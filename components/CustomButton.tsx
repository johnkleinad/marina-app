import React from 'react';
import { Pressable, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CustomButtonProps {
    type: 'gradient' | 'transparent';
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    color?: string; // Color para el borde y texto en botones transparentes
}

const CustomButton: React.FC<CustomButtonProps> = ({ type, title, onPress, color }) => {
    if (type === 'gradient') {
        return (
            <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
                <LinearGradient
                    colors={['#FE6F00', '#FD1106', '#FF004F']}
                    style={styles.gradientBackground}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <Text style={[styles.buttonText, styles.whiteText]}>{title}</Text>
                </LinearGradient>
            </Pressable>
        );
    } else if (type === 'transparent') {
        return (
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    styles.button,
                    styles.transparentButton,
                    { borderColor: color || '#FFFFFF' },
                    pressed && styles.buttonPressed
                ]}
            >
                <Text style={[styles.buttonText, { color: color || '#FFFFFF' }]}>{title}</Text>
            </Pressable>
        );
    }
    return null;
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        width: '100%',
    },
    gradientBackground: {
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 32,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        fontSize: 22,
        fontWeight: '500',
    },
    whiteText: {
        color: '#FFFFFF',
    },
    transparentButton: {
        borderWidth: 2,
    },
    buttonPressed: {
        opacity: 0.8,
    },
});

export default CustomButton;