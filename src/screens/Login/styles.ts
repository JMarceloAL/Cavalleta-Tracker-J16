// Importa o StyleSheet do React Native.
// Ele transforma nosso objeto de estilos em um formato otimizado.
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({

    // Estilo principal da tela.
    container: {

        // Faz a tela ocupar todo o espaço disponível.
        flex: 1,

        // Centraliza os componentes verticalmente.
        justifyContent: 'center',

        // Espaçamento interno da tela.
        padding: 90,

    },


    // Título da tela.
    title: {
        alignSelf: 'center',
        // Tamanho da fonte.
        fontSize: 28,

        // Texto em negrito.
        fontWeight: 'bold',

        // Espaço abaixo do título.
        marginBottom: 30,

    },


    // Campos de texto.
    input: {

        // Altura do campo.
        height: 50,

        // Cria uma borda ao redor do campo.
        borderWidth: 1,

        // Espaçamento interno do texto.
        paddingHorizontal: 15,

        // Espaço entre os campos.
        marginBottom: 15,

        // Arredonda a borda.
        borderRadius: 8,

    },


    // Botão de entrar.
    button: {

        // Espaçamento vertical.
        padding: 15,

        // Arredondamento.
        borderRadius: 8,

        // Centraliza o texto do botão.
        alignItems: 'center',

    },


    buttonText: {

        // Tamanho do texto do botão.
        fontSize: 18,

        // Texto em negrito.
        fontWeight: 'bold',

    },


    error: {

        // Espaço acima da mensagem.
        marginBottom: 15,

    },


});