import * as React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

export default function index() {
    return (
        <>
            <View style={styles.container}>
                <LinearGradient
                    colors={['#FE6F00', '#FD1106', '#FF004F']}
                    style={styles.background}
                >
                    <View style={styles.container}>
                        <Image source={require('@/assets/images/d344c5ac0560a10262c9d3cf4e21a679.png')} style={{ width: 194, height: 71 }} />
                        <Image source={require('@/assets/images/imagetest.png')} style={{ width: 195, height: 240, marginVertical: 34 }} />
                        <View style={{ display: 'flex', gap: 20 }}>
                            <Text style={{ color: 'white', fontWeight: 400, fontSize: 30, textAlign: 'center', width: 261 }}>
                                Welcome to your healing journey
                            </Text>
                            <Text style={{ color: 'white', fontWeight: 300, fontSize: 20, textAlign: 'center', width: 261 }}>
                                Sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
                            </Text>
                        </View>
                        <View style={{ display: 'flex', marginTop: 42, gap: 30, width: '100%', maxWidth: 350, justifyContent: 'center' }}>
                            <Link asChild href={'/signup '} style={[styles.buttonsStyle, { backgroundColor: 'white', marginRight: 10 }]}>
                                <Pressable>
                                    <Text style={{ textAlign: 'center', color: '#000', fontSize: 22 }}>
                                        Sign Up
                                    </Text>
                                </Pressable>
                            </Link>
                            <Link asChild href={'/signup '} style={[styles.buttonsStyle, { borderWidth: 1, borderBlockColor: '#FFFDFD' }]}>
                                <Pressable>
                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 22 }}>
                                        Login
                                    </Text>
                                </Pressable>
                            </Link>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    buttonsStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: 999,
    },
})