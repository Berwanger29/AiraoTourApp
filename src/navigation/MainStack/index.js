import react from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

import Greetings from '../../pages/Greetings';
import Home from '../../pages/Home';

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Greetings'
                    component={Greetings}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack