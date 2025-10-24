import * as React from 'react';
import { Tab, HomeStack } from './App';
import ProfileScreen from './screens/ProfileScreen';

export function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: "Home" }} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
