import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet} from 'react-native'
import { Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker'
import DatePicker from 'react-native-datepicker'

export default function Create() {
    const [category, SetCategory] = useState('');
    const [startDate, SetStartDate] = useState('');
    const [endDate, SetEndDate] = useState('');

    return( 
        <>
            <View>
                <Text>Create an Event</Text>
                <TextInput placeholder='Event Name'/>
                <Text>Category</Text>
                <Picker
                    mode="dropdown"
                    selectedValue={category}
                    onValueChange={category => SetCategory(category)}
                >
                    <Picker.Item label="Party" value="Party" />
                    <Picker.Item label="Trip" value="Trip" />
                    <Picker.Item label="Event" value="Event" />
                    <Picker.Item label="Dinner" value="Dinner" />
                </Picker>
                <Text>Start Date</Text>
                <DatePicker
                    style={styles.date}
                    date={startDate}
                    mode="date"
                    placeholder="select date"
                    format="MM-DD-YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                    onDateChange={startDate => SetStartDate(startDate)}
                />
                <Text>End Date</Text>
                <DatePicker
                    style={styles.date}
                    date={endDate}
                    mode="date"
                    placeholder="select date"
                    format="MM-DD-YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                    onDateChange={endDate => SetEndDate(endDate)}
                />
                <Text>Participants</Text>
                <Button
                    style={styles.button}
                    onPress={() => Alert.alert('Event Created')}
                    mode="outlined"
                > Create my Event
                </Button>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'relative',
        width: 200,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    date: {
        height: 10
    }
})