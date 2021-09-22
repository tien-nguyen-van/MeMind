import React, { ReactElement } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  HomeNestedScreen,
  MemindHomeScreenTabList
} from '../../base/types/home.module.type'
import { map } from 'lodash'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RemindScreen } from '../../pages/remind'
import {
  REMIND_SCREEN_NAME,
  SETTING_SCREEN_NAME
} from '../../configs/constants'
import { SettingScreen } from '../setting'

const nestedRouter: HomeNestedScreen = {
  RemindScreen: {
    routeName: REMIND_SCREEN_NAME,
    component: RemindScreen,
    options: {
      label: 'Remind',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      )
    }
  },
  SettingScreen: {
    routeName: SETTING_SCREEN_NAME,
    component: SettingScreen,
    options: {
      label: 'Setting',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
      )
    }
  }
}

const Tab = createBottomTabNavigator<MemindHomeScreenTabList>()

const HomeScreen = (): ReactElement => {
  return (
    <Tab.Navigator
      backBehavior={'history'}
      detachInactiveScreens={true}
      screenOptions={{
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#000',
          position: 'absolute',
          borderTopColor: 'rgba(0, 0, 0, .2)'
        }
      }}
    >
      {map(nestedRouter, (screen, index) => {
        const { routeName, component, key, options } = screen
        return (
          <Tab.Screen
            name={routeName}
            component={component}
            key={key ?? index}
            options={{
              tabBarLabel: options.label,
              tabBarIcon: options.tabBarIcon
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export { HomeScreen }
