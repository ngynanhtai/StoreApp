import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/Categories";
import CategoryScreen from "../screens/Category";

const Stack = createStackNavigator();

const CategoriesScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={CategoriesScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export { CategoriesScreenNavigator };
