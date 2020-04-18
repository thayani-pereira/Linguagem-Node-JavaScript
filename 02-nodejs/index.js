/*
obter usuario
1 obter o numero de telefone a partir do seu id
2 obter o endereco do usuario pelo id
*/
//Quando der algum problema reject(ERRO)
//Quando sucesso -->Resove
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)
function obterUsuario() {
    return new Promise(function resolvePromese(resolve, reject) {
        setTimeout(function () {
            // return reject (new Error ('Deu ruim de verdade'))
            return resolve({
                id: 1,
                nome: 'Thayani da Silva Pereira',
                dataNascimento: new Date(1990, 11, 16)
            })
        }, 1000)
    })
}
function obterTelefone(idUsuario) {
    return new Promise(function resolvePromese(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '99999999',
                ddd: 11
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'NODE ',
            numero: 10
        })
    }, 2000);
}

const usuarioPromise = obterUsuario()
//para manipular sucesso função .then
//para manipular erros,usamos o cath
usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id).then(function (telefone) {
            usuario.telefone = telefone
            return usuario
        })
    })
    .then(function (usuario) {
        return obterEnderecoAsync(usuario.id).then(function (endereco) {
            usuario.endereco = endereco
            return usuario
        })
    })
    .then(function (usuario) {
        console.log(`
        Nome:${usuario.nome}
        Telefone:(${usuario.telefone.ddd})${usuario.telefone.telefone}
        Endereço:${usuario.endereco.rua} ${usuario.endereco.numero}
        `)
    })
    .catch(function (error) {
        console.error('Deu ruim', error)
    })

