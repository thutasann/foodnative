import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-url-polyfill/auto'
import RestaurantScreen from './screens/RestaurantScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Restaurant' component={RestaurantScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
