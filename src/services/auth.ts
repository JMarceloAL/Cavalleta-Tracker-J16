// Usuário fixo do sistema.
const USER = 'Root';

// Senha fixa do sistema.
const PASSWORD = 'Root';


// Função responsável por validar o login.
export function login(
    username: string,
    password: string
): boolean {

    // Retorna verdadeiro apenas se usuário e senha estiverem corretos.
    return (
        username === USER &&
        password === PASSWORD
    );

}