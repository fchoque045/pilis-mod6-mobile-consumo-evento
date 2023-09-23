import { StatusBar } from 'expo-status-bar'
import { COLORS } from './src/utils/theme'
import { WelcomeScreen } from './src/screens/welcome/WelcomeScreen'
import { SignInScreen } from './src/screens/sign-in/SignInScreen'
import { SignUpScreen } from './src/screens/sign-up/SignUpScreen'
import { MainStackScreen } from './src/navigations/MainStackScreen'
import { ActivityDetailScreen } from './src/screens/activity-detail/ActivityDetailScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UserProvider } from './src/contexts/UserContext'

const ListaStack = createNativeStackNavigator()

export default function App () {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <ListaStack.Navigator screenOptions={{ headerShown: false }}>
            <ListaStack.Screen name='Welcome' component={WelcomeScreen} />
            <ListaStack.Screen name='SignIn' component={SignInScreen} />
            <ListaStack.Screen name='SignUp' component={SignUpScreen} />
            <ListaStack.Screen name='Main' component={MainStackScreen} />
            <ListaStack.Screen name='ActivityDetail' component={ActivityDetailScreen} />
          </ListaStack.Navigator>
        </NavigationContainer>
        <StatusBar backgroundColor={COLORS.inactivePri} />
      </UserProvider>
    </>
  )
}
