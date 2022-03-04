import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home/components/HomeComponent';
import Create from './src/Create/components/CreateComponent';
import HomeStack from './src/navigators/HomeNavigator';

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
              <Tab.Screen name="Home" component={HomeStack} />
              <Tab.Screen name="Profile" component={Create} />       
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
    backgroundColor: '#FDFFEA'
  }
});
