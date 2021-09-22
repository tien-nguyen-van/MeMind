import React from 'react'
import { createNavigationContainerRef } from '@react-navigation/core'

export const navigationRef = createNavigationContainerRef()
export const MemindThemeContext = React.createContext({
  background: '#fff',
  setBackground: (_: string): void => {}
})
