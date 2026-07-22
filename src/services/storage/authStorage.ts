// Importa o AsyncStorage.
import AsyncStorage from '@react-native-async-storage/async-storage';

/*
    Chave utilizada para armazenar
    a sessão do usuário.
*/
const SESSION_KEY = '@cavalleta:session';

/*
    Salva a sessão do usuário.

    Será chamado após um login válido.
*/
export async function saveSession(): Promise<void> {

    await AsyncStorage.setItem(

        SESSION_KEY,

        'true'

    );

}

/*
    Verifica se existe uma sessão salva.

    Retorna:

    true  -> usuário logado.

    false -> usuário não logado.
*/
export async function getSession(): Promise<boolean> {

    const session = await AsyncStorage.getItem(

        SESSION_KEY

    );

    return session === 'true';

}

/*
    Remove a sessão do usuário.

    Será chamado quando o usuário
    realizar o logout.
*/
export async function logout(): Promise<void> {

    await AsyncStorage.removeItem(

        SESSION_KEY

    );

}