import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Image} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, FAB } from 'react-native-paper';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { eventSample } from '../list/event_sample';
import moment from 'moment';

export default function EventList() {
    const [event, setEvent] = useState(eventSample)

    return(
        <View style={{height: '80%'}}>
            <FlatList 
                data={event}
                renderItem={( {item: event}) => {
                    return(
                        <View style={{alignItems: 'center'}}>
                            <Card style={styles.card} elevation={8}>
                                <View style={{width: 150, height: 200, alignItems: 'center',  display: 'flex', justifyContent:'center'}}>
                                    <Text style={styles.cardName}>{event.name}</Text>
                                    <Text style={styles.date}>{moment(event.startDate).format('MM/DD/YYYY')}</Text>
                                </View>
                                <View style={{position: 'absolute', left:148}}>
                                <ImageBackground source={{uri: event.img}} style={{width: 200, height: 198}} imageStyle={{borderTopRightRadius: 14, borderBottomRightRadius: 14, resizeMode:'cover'}}></ImageBackground>
                                </View>
                            </Card>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => index}
            />
        </View>
        
    )
}

const styles = StyleSheet.create ({
    card: {
        height: 200,
        width: 350,
        marginBottom: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(221,219,203,.5)',
        borderColor: 'rgba(255,255,255,.7)',
        borderWidth: 1
    },
    cardName: {
        fontSize: 18
    },
    date: {
        fontSize: 10
    }
})

