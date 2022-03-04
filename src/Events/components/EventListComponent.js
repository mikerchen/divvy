import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, FAB } from 'react-native-paper';
import { eventSample } from '../list/event_sample';

export default function EventList() {
    const [event, setEvent] = useState(eventSample)

    return(
        <FlatList 
            horizontal
            data={event}
            renderItem={( {item: event}) => {
                return(
                    <Card style={styles.card} elevation={4}>
                        <Text style={{fontSize: 20}}>{event.name}</Text>
                        <Text>{event.category}</Text>
                        <Text>{event.startDate}</Text>
                        <Text>{event.endDate}</Text>
                    </Card>
                )
            }}
            keyExtractor={(item, index) => index}
        />
        
    )
}

const styles = StyleSheet.create ({
    card: {
        height: 150,
        width: 250,
        marginRight: 10,
        padding: 10
    }
})

