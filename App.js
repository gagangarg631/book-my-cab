import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import ChooseCab from './src/components/ChooseCab';
import 'bootstrap/dist/css/bootstrap.min.css';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Book your cab'}}
        /> */}
        <Stack.Screen name="CHOOSECAB" component={ChooseCab} options={{
          title: 'Choose your Cab'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}