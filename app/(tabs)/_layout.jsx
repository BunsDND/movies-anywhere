import { View, Text } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import {icons} from '../../constants'


const TabIcon = ({icon, color, name, focused}) => {
  return(
    <View> 
      <Image  
      source = {icon}
      resizeMode = "contain"
      style={{ width: 24, height: 24, tintColor: color}}
      />

    </View>
  )
}

const TabLayout = () => {



  return (
    <>
    <Tabs> 

      <Tabs.Screen
        name='Home'
        option={{
          title: 'Home',
          headerShown:false,
          tabBarIcon:({})=>(
              <TabIcon
              icon =  {icons.home}
              color = {color}
              name = 'Home'
              focused  = {focused}           
              /> 
          )
        }}
      />

      <Tabs.Screen
        name='Location'
        option={{
          title: 'Location',
          headerShown:false,
          tabBarIcon:({})=>(
              <TabIcon
              icon =  {icons.location}
              color = {color}
              name = 'Location'
              focused  = {focused}           
              /> 
          )
        }}
      />

      <Tabs.Screen
        name='Ticket'
        option={{
          title: 'Ticket',
          headerShown:false,
          tabBarIcon:({})=>(
              <TabIcon
              icon =  {icons.ticket}
              color = {color}
              name = 'Ticket'
              focused  = {focused}           
              /> 
          )
        }}
      />

      <Tabs.Screen
        name='Profile'
        option={{
          title: 'Profile',
          headerShown:false,
          tabBarIcon:({})=>(
              <TabIcon
              icon =  {icons.profile}
              color = {color}
              name = 'Profile'
              focused  = {focused}           
              /> 
          )
        }}
      />  


    </Tabs>
    
    </>
  )
}

export default TabLayout