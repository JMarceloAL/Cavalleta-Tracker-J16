// Importa os componentes visuais do React Native.
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';


// useState permite guardar valores que mudam na tela.
// Exemplo: texto digitado no input.
import { useState } from 'react';


// Importa os estilos separados.
import { styles } from './styles';


// Importa nosso serviço de autenticação.
import { login } from '../../services/auth';


// O navigation vem automaticamente do React Navigation.
// Ele permite trocar de tela.
export default function Login({ navigation }: any) {


    // Guarda o username digitado.
    const [username, setUsername] = useState('');


    // Guarda a senha digitada.
    const [password, setPassword] = useState('');



    async function handleLogin() {


        // Chama o serviço que verifica usuário e senha.
        const success = await login(
            username,
            password
        );


        // Caso esteja correto.
        if (success) {


            // Navega para a Home.
            navigation.navigate('Home');


        } else {


            // Mostra uma mensagem de erro.
            Alert.alert(
                'Erro',
                'Usuário ou senha incorretos.'
            );


        }

    }



    return (

        <View style={styles.container}>


            <Text style={styles.title}>
                Login
            </Text>



            <TextInput

                style={styles.input}

                placeholder="Usuario"

                // O valor mostrado no campo.
                value={username}

                // Atualiza o estado quando o usuário digita.
                onChangeText={setUsername}



            />



            <TextInput

                style={styles.input}

                placeholder="Senha"

                value={password}

                onChangeText={setPassword}

                // Esconde os caracteres digitados.
                secureTextEntry

            />



            <TouchableOpacity

                style={styles.button}

                onPress={handleLogin}

            >

                <Text style={styles.buttonText}>
                    Entrar
                </Text>


            </TouchableOpacity>





        </View>

    );

}