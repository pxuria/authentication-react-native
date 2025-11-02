import AddPlace from '@/components/AddPlace';
import AllPlaces from '@/components/AllPlaces';
import IconButton from '@/components/ui/IconButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      <Stack.Navigator
      // screenOptions={{
      //   headerStyle: { backgroundColor: Colors.primary500 },
      //   headerTintColor: 'white',
      //   contentStyle: { backgroundColor: Colors.primary100 },
      // }}
      >
        <Stack.Screen name="AllPlaces" component={AllPlaces}
          options={({ navigation }) => ({
            headerRight: ({ tintColor }) => <IconButton icon="add" size={24} color={tintColor} onPress={() => navigation.navigate('AddPlace')} />
          })} />
        <Stack.Screen name="AddPlace" component={AddPlace} />
      </Stack.Navigator>
    </>
  );
}
