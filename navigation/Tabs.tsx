import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/Cart";
import OrderScreen from "../screens/Order";
import SettingsScreen from "../screens/Settings";
import { CategoriesScreenNavigator } from "../navigation/Stacks";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Shop"
        component={CategoriesScreenNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;
            iconName = focused ? "ios-home" : "ios-home-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;
            iconName = focused ? "ios-cart" : "ios-cart-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;
            iconName = focused ? "ios-wallet" : "ios-wallet-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;
            iconName = focused ? "ios-settings" : "ios-settings-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
