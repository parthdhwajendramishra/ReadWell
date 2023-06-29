import { createStackNavigator } from "@react-navigation/stack";
import Sample from "../components/Sample";
import Example from "../components/Example";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (

    
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Sample" component={Sample} />
            <Stack.Screen name="Example" component={Example} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
