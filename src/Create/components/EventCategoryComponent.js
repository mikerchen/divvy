import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
import { ProgressBar, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

export default function EventCategory({navigation}) {
    const window = useWindowDimensions();
    const [category, setCategory] = useState('');

    return(
        <View>
            <ProgressBar progress={.50} color="#559BB4" />
            <Text>Event Category</Text>
            <Picker
                mode="dropdown"
                selectedValue={category}
                onValueChange={category => setCategory(category)}
            >
                <Picker.Item label="Party" value="Party" />
                <Picker.Item label="Trip" value="Trip" />
                <Picker.Item label="Event" value="Event" />
                <Picker.Item label="Dinner" value="Dinner" />
            </Picker>


            <Button
                style={styles.button}
                onPress={() => navigation.navigate('Dates')}
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