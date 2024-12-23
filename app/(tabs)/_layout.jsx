import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { Tabs, Stack, Redirect } from "expo-router";
import { icons } from "../../constants";
import TabBar from "../../components/TabBar";

// const TabIcon = ({icon, color, name, focused}) => {
//   return(
//     <View>
//       <Image style={{width: 30}}
//       source={icon}
//       resizeMode="contain"
//       classname="w-1 h-1"

//       />
//     </View>
//   )
// }

const TabLayout = () => {
  return (
    <>
      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen name="home" options={{ headerShown: false, title: "" }} />

        <Tabs.Screen
          name="location"
          options={{ title: "", headerShown: false }}
        />

        <Tabs.Screen
          name="ticket"
          options={{ title: "", headerShown: false }}
        />

        <Tabs.Screen
          name="profile"
          options={{ title: "", headerShown: false }}
        />
      </Tabs>
    </>
  );
};
const styles = StyleSheet.create({
  tab: {
    backgroundColor: "transparent",
  },
});
export default TabLayout;
