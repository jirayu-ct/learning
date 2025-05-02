import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from "react-native";
import * as Speech from 'expo-speech';

const MockCaptionApp = () => {
    const [text, setText] = useState('');

    const speak = () => {
        if (text.trim() !== '') {
            Speech.speak(text, {
                rate: 0.8, // กำหนดความเร็วเสียงพูด
            });
        } else {
            Speech.speak('กรุณาป้อนข้อความ', {
                rate: 0.8,
            });
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="พิมพ์ข้อความที่นี่"
                placeholderTextColor="#888"
                value={text}
                onChangeText={setText}
                accessibilityLabel="ช่องป้อนข้อความ"
                accessibilityHint="พิมพ์ข้อความที่คุณต้องการให้ระบบอ่านออกเสียง"
            />
            <Button
                title="อ่านข้อความ"
                onPress={speak}
                accessibilityLabel="ปุ่มอ่านข้อความ"
                accessibilityHint="กดปุ่มนี้เพื่อให้ระบบอ่านข้อความที่คุณพิมพ์"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
        backgroundColor: '#fff',
        fontSize: 16,
    },
});

export default MockCaptionApp;