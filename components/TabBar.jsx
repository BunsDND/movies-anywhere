import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';  // Make sure to import Ionicons

const TabBar = ({ state, descriptors, navigation }) => {
  const primaryColor = "#624E88";
  const greyColor = "#737373";
  const containerColor = "lightblue"; // Define the container color

  // Log the route names to see what they are
  console.log('Routes:', state.routes.map(route => route.name));

  const icons = {
    home: (props) => (
      <Ionicons name={props.isFocused ? "home" : "home-outline"} size={35} color={props.color} />
    ),
    location: (props) => (
      <Ionicons name={props.isFocused ? "location" : "location-outline"} size={35} color={props.color} />
    ),
    ticket: (props) => (
      <Ionicons name={props.isFocused ? "ticket" : "ticket-outline"} size={35} color={props.color} />
    ),
    profile: (props) => (
      <Ionicons name={props.isFocused ? "person" : "person-outline"} size={35} color={props.color} />
    ),
  };

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={[styles.tabbarItem, isFocused && styles.focusedTabbarItem]}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <View style={styles.iconContainer}>
              {
                icons[route.name] ? icons[route.name]({
                  color: isFocused ? primaryColor : greyColor,
                  isFocused: isFocused,
                }) : null
              }
            </View>
            <Text style={{ color: isFocused ? primaryColor : greyColor }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    height: 70,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4F75FF",
    marginHorizontal: 10,
    paddingVertical: 10,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderCurve: "continuous",
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  focusedTabbarItem: {
    marginBottom: 35,
  },
  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: "lightblue", // Background color for the container
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 500, 
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,// Optional: If you want a rounded container
  },
});

export default TabBar;