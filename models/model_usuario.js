
let arrayUser = []

class Usuario {
    constructor(){

        this.name = null
        this.email = null
        this.senha = null
        this.tipo = null

        if(new.target === Usuario){
            throw new Error("Classe Abstrata, não pode ser instanciada.");
            
        }
    }

    criarUsuario(nome, login, senho, tipo){

    }

    tipoUsuario(){
        
    }



}

class UsuarioCliente extends Usuario {

    constructor(){
        super()
        
    }

    criarUsuario(nome, email, senha){
        
        const UserTemp = {
            nome:nome,
            email:email,
            senha:senha,
            tipo:"1"
        }

        arrayUser.push(UserTemp)

    }

    

    tipoUsuario(){

        return {tipo:this.tipo}
    }
}

class UsuarioColaborador extends Usuario {

    constructor(){
        super()
        
    }

    criarUsuario(nome, email, senha){

        const UserTemp = {
            nome:nome,
            email:email,
            senha:senha,
            tipo:"2"
        }

        arrayUser.push(UserTemp)

    }



    tipoUsuario(){
        return {tipo:this.tipo}
    }
}

class UsuarioADM extends Usuario {

    constructor(){
        super()
        
    }

    criarUsuario(nome, email, senha){

        const UserTemp = {
            nome:nome,
            email:email,
            senha:senha,
            tipo:"3"
        }

        arrayUser.push(UserTemp)

    }

    

    tipoUsuario(){
        return {tipo:this.tipo}
    }
}

class Fabrica_Usuario {

    criarTipoUser(tipo){
        if(tipo == '1'){
            return new UsuarioCliente()
        }else
        if(tipo == '2'){
            return new UsuarioColaborador()
        }
        else
        if(tipo == '3'){
            return new UsuarioADM()
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

module.exports = {Fabrica_Usuario, Autenticar}