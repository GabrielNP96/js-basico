const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf : '123456789111',
    turma: 'Javascript'
}

console.log(`nome: ${estudante.nome}`)
console.log(`3 primeiros digitos do cpf: ${estudante.cpf.substring(0,3)}`)