import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../styles/colors';
import userImg from '../assets/oiac.png';
import fonts from '../styles/fonts';

export function Header() {
    const [userName, setUsername] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUsername(user || "");
        }

        loadStorageUserName();

    }, [userName]);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.greeting}>Olá,</Text>
                    <Text style={styles.userName}>
                        {userName}
                        </Text>
                </View>
                <Image source={userImg} style={styles.image} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },

    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,

    },

    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40

    },

})