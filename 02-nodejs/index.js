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


//para manipular sucesso função .then
//para manipular erros,usamos o cath
async function main() {
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario()
        //const telefone = await obterTelefone(usuario.id)
        //const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
        Nome: ${usuario.nome}
        Telefone: (${telefone.ddd}) ${telefone.telefone}
        Endereço:${endereco.rua} ${endereco.numero}
        `)
        console.timeEnd('medida-promise')

    } catch (error) {
        console.error('Deu Ruim', error)

    }

}
main()

