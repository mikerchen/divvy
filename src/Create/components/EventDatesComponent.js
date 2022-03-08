import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, Switch, useWindowDimensions} from 'react-native';
import { ProgressBar, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function EventDates() {
    const window = useWindowDimensions();
    const [oneDay, setOneDay] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    const dateChange = (event, date, val) => {
        if (val === 'start' && oneDay === false) {
            (date <= endDate ? setStartDate(date) : Alert.alert('Start Date cannot be later than End Date'))
        } else if (val === 'end') {
            (date >= startDate ? setEndDate(date) : Alert.alert('End Date cannot be earlier than Start Date'))
        }
    }

    const toggleOneDay = () => {
        setOneDay(prevState => !prevState)
    }

    return(
        <View>
            <ProgressBar progress={.75} color="#559BB4" />
            <Text>Event Dates</Text>
            <Text>One-Day Event</Text>
            <Switch value={oneDay} onValueChange={toggleOneDay} />
            <View>
                <Text>Start Date</Text>
                    <DateTimePicker 
                        testID='dateTimePicker'
                        value={startDate}
                        display="default"
                        name='startDate'
                        onChange={(event, date) => dateChange(event, date, "start")}
                    />
            </View>
            {!oneDay ?
                <View>
                    <Text>End Date</Text>
                        <DateTimePicker 
                            testID='dateTimePicker'
                            value={endDate}
                            display="default"
                            name='endDate'
                            onChange={(event, date) => dateChange(event, date, "end")}
                        />
                </View> :
                null
            }
            <Text>{JSON.stringify(endDate)}</Text>
            <Button
                style={styles.button}
                onPress={() => Alert.alert('Test')}
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