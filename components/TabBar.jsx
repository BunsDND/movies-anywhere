import { View, Text, ImageBackground } from "react-native"; // import ImageBackground
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const TabBar = ({ state, descriptors, navigation }) => {
  const primaryColor = "#262626";
  const greyColor = "#262626";
  const containerColor = "lightblue"; 

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
    <ImageBackground 
      source={require('../assets/tabBG.png')} // add the background image here
      style={styles.tabbar} // apply styles to the tabbar container
      imageStyle={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }} // ensure the image follows the rounded corners
    >
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
            <ImageBackground 
              source={require('../assets/iconBG.png')} // require local image
              style={styles.iconContainer} 
              imageStyle={{ borderRadius: 500 }} // ensure the image has rounded corners
            >
              {icons[route.name] ? icons[route.name]({
                color: isFocused ? primaryColor : greyColor,
                isFocused: isFocused,
              }) : null}
            </ImageBackground>
            <Text style={{ color: isFocused ? primaryColor : greyColor }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    height: 70,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  focusedTabbarItem: {
    marginBottom: 35,
  },
  iconContainer: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 500,
    shadowColor: "#000",  // Shadow color remains black
    shadowOpacity: 0.8,   // Increases the opacity for a darker shadow
    shadowRadius: 10,     // Increases the radius to make the shadow more pronounced
    shadowOffset: { width: 0, height: 5 },  // Adds a slight offset for depth
    elevation: 3,
    overflow: 'hidden', // Add this line
}





});

export default TabBar;
