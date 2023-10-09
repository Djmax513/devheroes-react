import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import ProfilePage from "../pages/Profile";
import HistoryPage from "../pages/History";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "blue"
        }}>
            <Tab.Screen
                name="HistoryPage"
                component={HistoryPage}
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons  name="clock-time-five-outline" size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    tabBarIcon: ({ size, color }) => <Octicons name="home" size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="ProfilePage"
                component={ProfilePage}
                options={{
                    tabBarIcon: ({ size, color }) => <FontAwesome5 name="user" size={size} color={color} />,
                }}
            />
        </Tab.Navigator>
    )
}

export default function Routes() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="LoginPage"
                component={LoginPage}
            />
            <Stack.Screen
                name="HomePage"
                component={TabNavigation}
            />
        </Stack.Navigator>
    )
}