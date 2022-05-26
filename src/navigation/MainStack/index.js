import react from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

import Greetings from '../../pages/Greetings';
import Home from '../../pages/Home';
import List from '../../pages/List';
import Item from '../../pages/Item';
import Articles from '../../pages/Articles';
import ArticlePage from '../../pages/ArticlePage';

const MainStack = () => {
    return (

        <Stack.Navigator initialRouteName='Greetings'>
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

            <Stack.Screen
                name='List'
                component={List}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Item'
                component={Item}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='ArticlePage'
                component={ArticlePage}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default MainStack