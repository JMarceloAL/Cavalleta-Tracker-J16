// Importa os Hooks do React.
import React, { useState } from 'react';

// Componentes visuais do React Native.
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

// Importa os estilos.
import { styles } from './styles';

// Serviço responsável pela autenticação.
import { login } from '../../services/auth';

export default function Login({ navigation }: any) {

    /*
        Armazena o usuário digitado.
    */
    const [username, setUsername] = useState('');

    /*
        Armazena a senha digitada.
    */
    const [password, setPassword] = useState('');

    /*
        Realiza o login.
    */
    async function handleLogin() {

        const success = await login(

            username,

            password

        );

        if (success) {

            navigation.replace('Home');

            return;

        }

        Alert.alert(

            'Erro',

            'Usuário ou senha inválidos.'

        );

    }

    return (

        <View style={styles.container}>

            <Text style={styles.title}>

                Cavalleta Connect

            </Text>

            <Text style={styles.subtitle}>

                Sistema de Rastreamento J16

            </Text>

            <TextInput

                style={styles.input}

                placeholder="Usuário"

                autoCapitalize="none"

                value={username}

                onChangeText={setUsername}

            />

            <TextInput

                style={styles.input}

                placeholder="Senha"

                secureTextEntry

                value={password}

                onChangeText={setPassword}

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