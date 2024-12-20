
const mysql = require('mysql2')
let array_usuarios = []

class GerenciarUsuarios{

    constructor(){

        this.connection = mysql.createConnection({

            host: 'mysql-quinteto-adm.alwaysdata.net', 
            user: '386281',
            password: 'quinteto_2024', 
            database: 'quinteto-adm_3011'

          })

          this.connection.connect((err) => {

            if (err) {

                console.error('Erro ao conectar ao banco de dados:', err.stack)

                
            }

        })

        
    }

    async consultarUsuario(login) {

        return new Promise((resolve, reject) => {
            
            const sql = 'SELECT * FROM usuario where login = ?'
    
            this.connection.query(sql, [login], (err, results) => {

                if (err ) {

                    console.log('Erro ao consultar usuário:', err.message)

                    reject(err)

                } else
                if(results.length == 0) {
                    console.log('Nenhum usuário encontrado')
                }else
                {
                   
                    resolve(results[0])
                    
                }
            })
        })

        this.fecharConexao()
    }

    async adicionarUsuario(nome, login, senha, tipo){
        

        return new Promise((resolve, reject) => {

            const sql = 'insert into usuario (nome, login, senha, tipo) values (?, ?, ?, ?)'

            this.connection.query(sql, [nome, login, senha, tipo], (err, results) => {

                if (err || results.affectedRows == 0) {

                    console.log('Erro ao adicionar usuário', err.message)
                    resolve(false)
                }
                else
                {
                    resolve(true)
                }
                
                
                
            })


        })
            
        this.fecharConexao()

    }

    async alterarUsuario(tipo, login){

        try{

            return new Promise((resposta, reject) => {
        
                const sql = 'update usuario set tipo = ? where login = ?'
        
                this.connection.query(sql, [tipo, login], (err, results) => {
                    
                    if(err || results.affectedRows == 0){
        
                        resposta(false)
        
                    }else
                    {   
                        resposta(true)
                    }
                })
                    
                })
            
        } catch(erro){

            console.log("Erro ao alterar o usuário")
        }

        this.fecharConexao()

    }

    async excluirUsuario(id) {

    
        const sql = 'DELETE FROM usuario WHERE id = ?'

        return new Promise((resolve, reject) => {

            this.connection.query(sql, [id], (err, results) => {

                if (err) {

                    reject(err)

                } else if (results.affectedRows === 0) {

                    resolve({ message: "Nenhum usuário encontrado com esses critérios." })

                } else {

                    resolve({ message: "Usuário excluído com sucesso." })
                }
            })

        }).finally(() => {

           
        })

        this.fecharConexao()

    }


    fecharConexao(){

        if (this.connection) {

            this.connection.end(err => {

                if (err) {

                    console.error('Erro ao encerrar a conexão:', err.message)

                } else {

                    return true
                }
            })

        } else {

            return false
        }
    }


    async carregarUsuarios() {

        try {

            const sql = 'SELECT * FROM usuario'
        
            const [results] = await this.connection.promise().query(sql);

            return results

        } catch (error) {

            return false
        }
    }
    

    

    async autenticarUser(login, senha) {

            
        
            
            const sql = 'SELECT id, nome, login, tipo FROM usuario WHERE login = ? AND senha = ?'
            const [results] = await this.connection.promise().query(sql, [login, senha])
    
            
            if (results.length === 0) {

                return { autenticado: false, usuario: 'Problema ao realizar autenticação.'}

            }else{

                return { autenticado:true, usuario: results[0]}
            }

            this.fecharConexao()
    

        
    }

    
}




module.exports = {GerenciarUsuarios}