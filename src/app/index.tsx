import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { map } from 'lodash'
import React from 'react'
import { MemindThemeContext, navigationRef } from '../base/singleton'

import { HomeScreen } from '../pages/home'
import {
  MemindStackRouter,
  MemindRootStackParamList
} from '../base/types/router.module.type'
import { HOME_SCREEN_NAME } from '../configs/constants'
import { SplashScreen } from '../pages/splash'

const router: MemindStackRouter = {
  HomeScreen: {
    routeName: HOME_SCREEN_NAME,
    component: HomeScreen,
    options: {
      headerShown: false
    }
  }
}

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ['memind://'],
  config: {
    screens: {
      HomeScreen: {
        path: 'home',
        screens: {
          RemindScreen: {
            path: 'remind'
            // parse: {
            //   params: (params: string) => {
            //     console.log(params)
            //     return JSON.parse(params)
            //   }
            // }
          } // routeName => path
        }
      }
    }
  }
}

const Stack = createNativeStackNavigator<MemindRootStackParamList>()
export const App = () => {
  const [background, setBackground] = React.useState('#ffff')
  const [isSigned, setIsSigned] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => {
      setIsSigned(true)
    }, 1000)
  })
  if (!isSigned) {
    return <SplashScreen />
  }
  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <MemindThemeContext.Provider value={{ background, setBackground }}>
        <Stack.Navigator>
          {map(router, (screen, name) => {
            return (
              <Stack.Screen
                key={name}
                name={screen.routeName}
                component={screen.component}
                options={screen.options}
              />
            )
          })}
        </Stack.Navigator>
      </MemindThemeContext.Provider>
    </NavigationContainer>
  )
}
