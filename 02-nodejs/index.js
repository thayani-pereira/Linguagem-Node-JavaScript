/*
obter usuario
1 obter o numero de telefone a partir do seu id
2 obter o endereco do usuario pelo id
*/
function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Thayani',
            dataNascimento: new Date(1990, 11, 16)
        })
    }, 1000)
}
function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback (null, {
            telefone: '99999999',
            ddd: 11
        })
    }, 2000);
}


function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'NODE ',
            numero: 10
        })
    }, 2000);
}
function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}
obterUsuario(function resolverUsuario(error, usuario) {
    //null || "" || 0=== false
    if (error) {
        colose.error('Deu ruim em Usuario', error)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            colose.error('Deu ruim em Telefone', error1)
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('Deu ruim no Endereço', error2)
                return;
            }
            console.log(`
            Nome:${usuario.nome}, Data de Nascimento ${new Date( usuario.dataNascimento).toLocaleDateString()}
            Endereco:${endereco.rua},${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}            
            `)
        })
    })
})
//const telefone = obterTelefone(usuario.id)


//console.log ('telefone' ,telefone);