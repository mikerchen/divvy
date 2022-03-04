import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/components/HomeComponent';
import Create from '../Create/components/CreateComponent';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: 'false',
        headerMode: 'screen',
        headerTintColor: 'black',
        headerStyle: { backgroundColor: '#FDFFEA' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="Create"
        component={Create}
        options={{
          title: 'Create',
        }}
      />
    </Stack.Navigator>
  );
}