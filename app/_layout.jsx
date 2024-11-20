import { View, Text } from 'react-native'
import React from 'react'
import { SplashScreen, Stack, Tabs } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'


// SplashScreen.preventAutoHideAsync();


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
      <Stack.Screen name="(auth)" options={{ headerShown: false }}/>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="login" options={{ headerShown: false }}/>
      <Stack.Screen name="signup" options={{ headerShown: false }}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>

      
       <Tabs> <Tabs.Screen options={{ headerShown:false}} /> </Tabs>

   </Stack>
  
//   <Stack>
//   <Stack.Screen name="index" options={{ headerShown: false }}/>


// </Stack>


  )
}

export default MainLayout