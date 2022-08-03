import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/Categories";
import ProductScreen from "../screens/Product";

const Stack = createStackNavigator();

const CategoriesScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={CategoriesScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export { CategoriesScreenNavigator };
