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

module.exports = {Autenticar}