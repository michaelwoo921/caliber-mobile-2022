import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YearComponent from '../batches/YearComponent';
import QuarterComponent from '../batches/QuarterComponent';
import BatchListComponent from '../batches/BatchListComponent';

const Stack = createNativeStackNavigator();
function BatchStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Year">
      <Stack.Screen
        name="Year"
        component={YearComponent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quarter"
        component={QuarterComponent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Batches"
        component={BatchListComponent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default BatchStackNavigator;
