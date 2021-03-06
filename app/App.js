import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tutorial1 from './pages/Tutorial1';
import Tutorial2 from './pages/Tutorial2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tutorial2" screenOptions={{gestureEnabled: false}}>
        <Stack.Screen name="Tutorial1" component={Tutorial1} options={{headerShown: false}}/>
        <Stack.Screen name="Tutorial2" component={Tutorial2} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
