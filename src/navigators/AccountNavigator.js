import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/components/HomeComponent';
import AccountMain from '../Account/components/AccountMainComponent';

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: 'false',
        headerMode: 'screen',
        headerTintColor: 'black',
        headerStyle: { backgroundColor: '#dddbcb' },
      }}
    >
      <Stack.Screen
        name="Account"
        component={AccountMain}
        options={{
          title: 'Account',
        }}
      />
      
    </Stack.Navigator>
  );
}