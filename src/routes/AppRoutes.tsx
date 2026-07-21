// Importa o componente responsável pela navegação em pilha.
// Ele permite navegar entre telas colocando uma tela sobre a outra.
import { NavigationContainer } from '@react-navigation/native';


// Importa o navegador Stack.
// Ele controla a sequência de telas do aplicativo.
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Importa as telas que serão utilizadas nas rotas.
import Login from '../screens/Login';

import Home from '../screens/Home';


// Cria uma instância do navegador.
// O Stack é como uma pilha de telas:
// Login -> Home -> Detalhes, por exemplo.
const Stack = createNativeStackNavigator();


export default function AppRoutes() {

    return (

        // NavigationContainer mantém o estado da navegação.
        // Ele deve envolver todas as rotas do aplicativo.
        <NavigationContainer>

            <Stack.Navigator

                // Define qual tela abre primeiro.
                initialRouteName="Login"

                screenOptions={{
                    // Remove o cabeçalho padrão.
                    headerShown: false,
                }}

            >

                <Stack.Screen
                    name="Login"
                    component={Login}
                />




                <Stack.Screen
                    name="Home"
                    component={Home}
                />


            </Stack.Navigator>

        </NavigationContainer>

    );
}