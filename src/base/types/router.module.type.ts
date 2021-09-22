import { ComponentType } from 'react'
import { HOME_SCREEN_NAME } from '../../configs/constants'

export type MemindStackScreenValues = typeof HOME_SCREEN_NAME

export type MemindDrawScreenValues = ''

export enum TypeNavigator {
  tab,
  stack,
  draw
}

export type MemindStackRouter = {
  [key in MemindStackScreenValues]: {
    routeName: MemindStackScreenValues
    component:
      | ComponentType<React.ReactElement>
      | ComponentType<React.ReactNode>
    options: {
      headerShown?: boolean
    }
  }
}

export type MemindRootStackParamList = {
  [key in MemindStackScreenValues]: undefined
  // HomeScreen: undefined
  // Profile: { userId: string } // initial params
  // Feed: { sort: 'latest' | 'top' } | undefined
}
