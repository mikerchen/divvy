import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
import { ProgressBar, Button } from 'react-native-paper';

export default function EventName({navigation}) {

    const window = useWindowDimensions();

    return(
        <View>
            <ProgressBar progress={.25} color="#559BB4" />
            <TextInput style={styles.input} name="name" placeholder='name your event' />
            <Button
                style={styles.button}
                onPress={() => navigation.navigate("Category")}
                mode="outlined"
            >Next

            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 40,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        marginTop: 40,
        position: 'relative',
        width: 200,
        alignSelf: 'flex-end',
        justifyContent: 'center'
    }
})