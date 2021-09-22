import { ComponentType, ReactElement, ReactNode } from 'react'
import {
  REMIND_SCREEN_NAME,
  SETTING_SCREEN_NAME
} from '../../configs/constants'

type HomeTabPages = typeof REMIND_SCREEN_NAME | typeof SETTING_SCREEN_NAME

export type HomeNestedScreen = {
  [key in HomeTabPages]: {
    key?: string | number
    routeName: HomeTabPages
    component: ComponentType<ReactElement> | ComponentType<ReactNode>
    options: {
      label: string
      tabBarIcon:
        | ((props: {
            focused: boolean
            color: string
            size: number
          }) => ReactNode)
        | undefined
    }
  }
}

export type MemindHomeScreenTabList = {
  [key in HomeTabPages]: undefined
}
