// Importa o React.
import React from 'react';

// Importa o navegador de abas.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importa os ícones.
import { MaterialIcons } from '@expo/vector-icons';

// Importa as telas.
import Home from '../screens/Home';

// Cria o Bottom Tab Navigator.
const Tab = createBottomTabNavigator();

export default function BottomTabs() {

    return (

        <Tab.Navigator

            screenOptions={{

                headerShown: false,

                tabBarActiveTintColor: '#1976D2',

                tabBarInactiveTintColor: '#757575',

                tabBarStyle: {

                    height: 60,

                    paddingBottom: 6,

                    paddingTop: 6,

                },

            }}

        >

            <Tab.Screen

                name="Home"

                component={Home}

                options={{

                    title: 'Início',

                    tabBarIcon: ({ color, size }) => (

                        <MaterialIcons

                            name="home"

                            color={color}

                            size={size}

                        />

                    ),

                }}

            />

        </Tab.Navigator>

    );

}