import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@/components/screens/LoginScreen';
import RegisterScreen from '@/components/screens/RegisterScreen';
import HomeScreen from '@/components/screens/HomeScreen';
import ModeSelection from '@/components/screens/ModeSelectionScreen';
import ProfileScreen from '@/components/screens/ProfileScreen';
import { UserProvider } from '@/components/screens/UserContext';
import DrawerNavigator from '@/components/screens/DrawerNavigator';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  ModeSelection: undefined;
  Profile: undefined;
  Drawer: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // עוטף את כל האפליקציה, מספק מידע אודות החיבור של המשתמש
    <UserProvider>
        <Stack.Navigator initialRouteName="Register" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ModeSelection" component={ModeSelection} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
        </Stack.Navigator>
    </UserProvider>
  );
}

