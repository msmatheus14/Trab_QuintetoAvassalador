//Banco de Dados db4free
 //Nome do Banco: quinteto_trum
 //Nome do Usuário: quinteto_adm
 //Senha do Banco: quinteto


const mysql = require ('mysql')

let arrayUser = []

class Usuario {

    constructor(){

        this.id = null
        this.nome = null
        this.email = null
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

    constructor(nome, email, senha, tipo){
        super()


        this.nome = nome
        this.email = email
        this.senha = senha
        this.tipo = tipo

       const user =  this.criarUsuario(this.nome, this.email, this.senha, this.tipo)
        
        arrayUser.push(user)
    }

    criarUsuario(nome, email, senha, tipo){
    

        const UserTemp = {
            nome:this.nome,
            email:this.email,
            senha:this.senha,
            tipo:this.tipo
        }

        return UserTemp

    }

    

    tipoUsuario(){

        return {tipo:this.tipo}
    }
}

class UsuarioColaborador extends Usuario {

    constructor(nome, email, senha, tipo){
        super()


        this.nome = nome
        this.email = email
        this.senha = senha
        this.tipo = tipo

       const user =  this.criarUsuario(this.nome, this.email, this.senha, this.tipo)
        
        arrayUser.push(user)
    }

    criarUsuario(nome, email, senha, tipo){
    

        const UserTemp = {
            nome:this.nome,
            email:this.email,
            senha:this.senha,
            tipo:this.tipo
        }

        return UserTemp

    }

    tipoUsuario(){
        return {tipo:this.tipo}
    }
    
}

class UsuarioADM extends Usuario {

    constructor(nome, email, senha, tipo){
        super()


        this.nome = nome
        this.email = email
        this.senha = senha
        this.tipo = tipo

       const user =  this.criarUsuario(this.nome, this.email, this.senha, this.tipo)
        
        arrayUser.push(user)
    }

    criarUsuario(nome, email, senha, tipo){
    

        const UserTemp = {
            nome:this.nome,
            email:this.email,
            senha:this.senha,
            tipo:this.tipo
        }

        return UserTemp

    }


    tipoUsuario(){
        return {tipo:this.tipo}
    }
}

class Fabrica_Usuario {

    criarTipoUser(nome, email, senha, tipo){
        if(tipo == '1'){
            return new UsuarioCliente(nome, email, senha, tipo)
            
        }else
        if(tipo == '2'){
            return new UsuarioColaborador(nome, email, senha, tipo)
        }
        else
        if(tipo == '3'){
            return new UsuarioADM(nome, email, senha, tipo)
        }
    }

    
}

class Autenticar{
    constructor(email, senha){

        return autenticar(email, senha)

    }

    static autenticar(email, senha){
        
        let autenticar = false

        arrayUser.map(n => {
            
            if(n.email == email){
                if(n.senha == senha){
                    autenticar = true
                }
            }
        })

        return autenticar
    }

    
}


class Reserva {

}


class Hotel {

    constructor(nome, endereco, valor){

    }

}

//Adiconar Esse crud alterações no banco de dados

class GerenciarUsuarios{


    constructor(){

        const connection = mysql.createConnection({

            host: 'db4free.net', 
            user: 'quinteto_adm',
            password: 'quinteto', 
            database: 'qunteto_trum'

          })
    }

    consultarUsuario(){
        
        
    }
    adicionarUsuario(){

    }

    alterarUsuario(){

    }

    excluirUsuaro(){

    }

    
}


module.exports = {Fabrica_Usuario, Autenticar, GerenciarUsuarios}