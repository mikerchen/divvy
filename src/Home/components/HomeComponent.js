import React from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, FAB } from 'react-native-paper';
import EventList from '../../Events/components/EventListComponent';

export default function Home({navigation}) {

    return(
        <>
            <Text style={styles.title}>Hi Michael,</Text>
            <Text style={styles.welcome}>Welcome to Divvy</Text>
            <Text style={styles.title}>My Events</Text>
            <EventList />
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
        fontSize: 25,
        marginTop: 20,
        marginBottom: 5
    }, 
    welcome: {
        fontSize: 16
    },
    card: {
        height: 150,
        marginTop: 10,
        marginBottom: 10,
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
})