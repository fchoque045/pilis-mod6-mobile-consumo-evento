import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/home/HomeScreen'
import { ProfileScreen } from '../screens/profile/ProfileScreen'
import { ActivityScreen } from '../screens/activity/ActivityScreen'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SPACING } from '../utils/theme'
import { StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Inicio: 'home',
  Actividad: 'bar-chart',
  Perfil: 'person'
}

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.text,
    headerShown: false,
    tabBarStyle: styles.tabBar
  }
}

export const MainStackScreen = () => {
  return (
    <>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Inicio' component={HomeScreen} />
        <Tab.Screen name='Actividad' component={ActivityScreen} />
        <Tab.Screen name='Perfil' component={ProfileScreen} />
      </Tab.Navigator>
    </>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    backgroundColor: COLORS.white,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs,
    borderTopColor: COLORS.text
  }
})
