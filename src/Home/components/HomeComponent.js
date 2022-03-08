import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, useWindowDimensions} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, FAB } from 'react-native-paper';
import EventList from '../../Events/components/EventListComponent';

export default function Home({navigation}) {
    const window = useWindowDimensions();
    return(
        <>
            <View style={{height: window.height-90}}>
                {console.log(window.height, window.width)}
                <Text style={styles.title}>Hi Michael,</Text>
                <Text style={styles.welcome}>Welcome to Divvy</Text>
                <Text style={styles.eventsText}>My Events</Text>
                <EventList />  
            </View>
            <FAB
                    style={styles.fab}
                    icon="plus"
                    label="Create an Event"
                    onPress={() => navigation.navigate("Create")}
                />
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 3,
        textAlign: 'center'
    }, 
    eventsText: {
        fontSize: 16,
        marginTop: 3,
        marginBottom: 5,
    },
    welcome: {
        fontSize: 16,
        textAlign: 'center'
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff'
    },
})