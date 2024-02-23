export function ValidarEmail(email) {
    const temArroba = email.includes('@');
    const temPonto = email.includes('.');
    return temArroba && temPonto;
}

export function ValidarSenha(senha) {
    return senha.length >= 6;
}