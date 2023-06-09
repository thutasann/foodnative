import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-url-polyfill/auto'
import RestaurantScreen from './screens/RestaurantScreen'
import { Provider } from 'react-redux'
import { store } from './store'
import BasketScreen from './screens/BasketScreen'
import PreparingScreen from './screens/PreparingScreen'
import DeliveryScreen from './screens/DeliveryScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name='Basket'
            component={BasketScreen}
            options={{
              presentation: 'modal',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Preparing'
            component={PreparingScreen}
            options={{
              presentation: 'fullScreenModal',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Delivery'
            component={DeliveryScreen}
            options={{
              presentation: 'fullScreenModal',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}
