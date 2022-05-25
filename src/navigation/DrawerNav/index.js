import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator();

import Greetings from '../../pages/Greetings'
import MainStack from '../MainStack';

const DrawerNav = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='MainStack'>
                <Drawer.Screen
                    name='MainStack'
                    component={MainStack}
                    options={{
                        headerShown: false
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNav