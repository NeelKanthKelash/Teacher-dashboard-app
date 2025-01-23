import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import Dashboard from './components/DashboardScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            
            name="Dashboard"
            component={Dashboard}
            options={{ title: 'Teacher Dashboard',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#ffe62e',
                shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
                
                 // Set the background color of the header
              },
              headerTitleStyle:{
                fontSize: 25,
                fontWeight:'bold',
              }
             }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );



}
