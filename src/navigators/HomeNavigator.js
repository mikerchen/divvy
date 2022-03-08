import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/components/HomeComponent';
import Create from '../Create/components/CreateComponent';
import EventName from '../Create/components/EventNameComponent';
import EventCategory from '../Create/components/EventCategoryComponent';
import EventDates from '../Create/components/EventDatesComponent';

const Stack = createStackNavigator();

export default function HomeStack() {
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
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="Create"
        component={EventName}
        options={{
          title: 'Create an Event',
        }}
      />
      <Stack.Screen
        name="Category"
        component={EventCategory}
        options={{
          title: 'Create an Event',
        }}
      />
      <Stack.Screen
        name="Dates"
        component={EventDates}
        options={{
          title: 'Create an Event',
        }}
      />
    </Stack.Navigator>
  );
}