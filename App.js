import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home/components/HomeComponent';
import AccountStack from './src/navigators/AccountNavigator';
import HomeStack from './src/navigators/HomeNavigator';
import Icon from '@mdi/react';
import { mdiAccountCircleOutline } from '@mdi/js';

const Tab = createBottomTabNavigator();

const bgImage = { uri: 'divvy/Images.xcassets/bg.png'}

export default function App() {
  return (
    <>
      <View style={styles.container}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              <Tab.Screen 
                name="Home" 
                component={HomeStack} 
              />
              <Tab.Screen 
                name="Account" 
                component={AccountStack}
              />       
            </Tab.Navigator>
          </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f1e3'
  }
});
