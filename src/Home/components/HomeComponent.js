import React from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, FAB } from 'react-native-paper';

export default function Home({navigation}) {

    return(
        <>
            <Text style={styles.title}>Hi Michael, Welcome to Divvy</Text>
            <Card style={styles.card} onPress={() => navigation.navigate("Create")}>
                <Card.Title title="Input Expenses" />
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Settle" />
            </Card>
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
        marginBottom: 20,
       

    }, 
    card: {
        height: 150,
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