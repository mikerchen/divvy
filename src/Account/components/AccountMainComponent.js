import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


export default function AccountMain() { 
    return(
        <View>
            <Text>
                <Icon
                    path={mdiAccountCircle}
                    title="User Profile"
                    size={1}
                    horizontal
                    vertical
                    rotate={90}
                    color="red"
                    spin
                />
            </Text>
        </View>
    )
}