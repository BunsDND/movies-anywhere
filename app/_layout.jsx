import { View, Text } from 'react-native'
import React from 'react'
import { SplashScreen, Stack, Tabs } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'


SplashScreen.preventAutoHideAsync();


const MainLayout = () => {

  

  // const [fontsLoaded, error] = useFonts({
  //   "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  //    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
   
  // });
  
  // useEffect(() => {
  //   if (error) throw error;
  
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, error]);
  
  // if (!fontsLoaded && !error) {
  //   return null;
  // }
  


  return (
   <Stack>
      <Stack.Screen name="index"/>
       {/* <Tabs> <Tabs.Screen options={{ headerShown:false}} /> </Tabs> */}

   </Stack>
  
  )
}

export default MainLayout