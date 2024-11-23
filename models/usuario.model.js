const {GerenciarUsuarios} = require('./banco.usuario')

class Usuario {

    constructor(){

        this.id = null
        this.nome = null
        this.login = null
        this.senha = null
        this.tipo = null

        if(new.target === Usuario){

            throw new Error("Classe Abstrata, não pode ser instanciada.");
            
        }
    }

    criarUsuario(){

    }

    tipoUsuario(){
        
    }

}

class UsuarioCliente extends Usuario {

    constructor(nome, login, senha, tipo){
        super()

        this.nome = nome
        this.login = login
        this.senha = senha
        this.tipo = tipo

       const user = this.criarUsuario(this.nome, this.login, this.senha, this.tipo)
    
       return user
    }

    criarUsuario(nome, login, senha, tipo){
    
        const gerenciarBanco = new GerenciarUsuarios

        const userTemp = gerenciarBanco.adicionarUsuario(this.nome, this.login, this.senha, this.tipo)
        
        return userTemp

    }

    
    tipoUsuario(){

        return {tipo:this.tipo}
    }
}

class UsuarioColaborador extends Usuario {

    constructor(nome, login, senha, tipo){
        super()

        this.nome = nome
        this.login = login
        this.senha = senha
        this.tipo = tipo

       const user = this.criarUsuario(this.nome, this.login, this.senha, this.tipo)
    
       return user
    }

    criarUsuario(nome, login, senha, tipo){
    
        const gerenciarBanco = new GerenciarUsuarios

        const userTemp = gerenciarBanco.adicionarUsuario(this.nome, this.login, this.senha, this.tipo)

        return userTemp

    }

    tipoUsuario(){

        return {tipo:this.tipo}
    }
    
}

class UsuarioADM extends Usuario {

    constructor(nome, login, senha, tipo){

        super()

        this.nome = nome
        this.login = login
        this.senha = senha
        this.tipo = tipo

       const user = this.criarUsuario(this.nome, this.login, this.senha, this.tipo)
    
       return user
    }

    criarUsuario(nome, login, senha, tipo){
    
        const gerenciarBanco = new GerenciarUsuarios

        const userTemp = gerenciarBanco.adicionarUsuario(this.nome, this.login, this.senha, this.tipo)

        return userTemp

    }


    tipoUsuario(){

        return {tipo:this.tipo}
    }
}

class Fabrica_Usuario {

    criarTipoUser(nome, login, senha, tipo){

        if(tipo == '1'){

            return new UsuarioCliente(nome, login, senha, tipo)
            
        }else
        if(tipo == '2'){

            return new UsuarioColaborador(nome, login, senha, tipo)
        }
        else
        if(tipo == '3'){

            return new UsuarioADM(nome, login, senha, tipo)
        }
    }

}

module.exports = {Fabrica_Usuario}