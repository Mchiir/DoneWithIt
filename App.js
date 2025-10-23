import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library

// Import screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen.js';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator Component
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="DetailsTab" 
        component={DetailsScreen}
        options={{
          title: 'Details',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Drawer Navigator Component
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#007AFF',
        drawerInactiveTintColor: 'gray',
      }}
    >
      <Drawer.Screen 
        name="Main" 
        component={TabNavigator}
        options={{
          title: 'Main App',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="apps" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="ProfileDrawer" 
        component={ProfileScreen}
        options={{
          title: 'Profile',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Stack Navigator (Main App)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }} // Hide header since Drawer has its own
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Detail Screen" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}