import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

// import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

import { StackParamsList } from './src/references/types/navigation'
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';

const Stack = createStackNavigator<StackParamsList>()

const App = () => {
    React.useEffect(() => {
        StatusBar.setHidden(true)
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions = {{
                    headerShown: false,
                    // ...TransitionPresets.FadeFromBottomAndroid
                }}
            >
                <Stack.Screen
                    name = 'Home'
                    component = {Home}
                />
                <Stack.Screen
                    name = 'Detail'
                    component = {Detail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App