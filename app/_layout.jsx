import { View, Text } from 'react-native'
import React from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'



SplashScreen.preventAutoHideAsync();


const MainLayout = () => {



  return (
   <Stack>
      <Stack.Screen name="index"/>
   </Stack>
  )
}

export default MainLayout