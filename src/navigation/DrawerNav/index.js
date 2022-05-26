import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator();

import Greetings from '../../pages/Greetings'
import MainStack from '../MainStack';
import Favorites from '../../pages/Favorites';
import Articles from '../../pages/Articles';

const DrawerNav = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName='MainStack'
                screenOptions={{ drawerPosition: 'right' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={MainStack}
                    options={{
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name='Favoritos'
                    component={Favorites}
                    options={{
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name='Artigos'
                    component={Articles}
                    options={{
                        headerShown: false
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNav