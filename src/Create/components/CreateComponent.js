import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function Create() {
    const [eventBody, setEventBody] = useState({
        name: '',
        category: '',
        startDate: new Date(),
        endDate: new Date()
    })
    const [category, setCategory] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [startOpen, setStartOpen] = useState(false)
    const [endDate, setEndDate] = useState(new Date());
    const [endOpen, setEndOpen] = useState(false)

    const handleChange = (text, name) => {
        console.log(text)
        console.log(name)
    }

    return( 
        <>
            <View>
                <View>
                    <Text>Create an Event</Text>
                    <TextInput name="name" placeholder='Event Name' onChangeText={(text, name) => handleChange(text, 'name')}/>
                </View>
                <View>
                    <Text>Category</Text>
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
                </View>
                <View>
                    <Text>Start Date</Text>
                        <DateTimePicker 
                            testID='dateTimePicker'
                            value={eventBody.startDate}
                            display="default"
                            name='startDate'
                            onChange={(event, date) => {
                                setEventBody({...eventBody,
                                    startDate: date    
                                })
                            }}
                        />
                </View>
                <View>
                    <Text>End Date</Text>
                        <DateTimePicker 
                            testID='dateTimePicker'
                            value={eventBody.endDate}
                            display="default"
                            name='endDate'
                            onChange={(event, date) => {
                                setEventBody({...eventBody,
                                    endDate: date    
                                })
                            }}
                        />
                </View>
                <View>
                    <Text>Participants</Text>
                </View>
                <Text>{JSON.stringify(eventBody)}</Text>
                <Text>{JSON.stringify(startDate)}</Text>
                <Text>{JSON.stringify(eventBody.startDate <= eventBody.endDate)}</Text>
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
        height: 50
    }
})