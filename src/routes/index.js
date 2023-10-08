import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginPage"
                component={LoginPage}
            />
            <Stack.Screen
                name="HomePage"
                component={HomePage}
            />
        </Stack.Navigator>
    )
}