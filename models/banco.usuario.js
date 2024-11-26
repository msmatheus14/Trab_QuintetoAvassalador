
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
    }

    async adicionarUsuario(nome, login, senha, tipo){

            const sql = 'insert into usuario (nome, login, senha, tipo) values (?, ?, ?, ?)'

            this.connection.query(sql, [nome, login, senha, tipo], (err, results) => {

                if (err) {

                    console.log('Erro ao adicionar usuário', err.message)
                }
                
            })

           

            //RealizarValidação realizar confirmação se usuário foi criado corretamente
            return {

                nome:nome, login:login, senha:senha, tipo:tipo
                
            }


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

    }


    fecharConexao(){

        if (this.connection) {

            this.connection.end(err => {

                if (err) {

                    console.error('Erro ao encerrar a conexão:', err.message)

                } else {

                    console.log('Conexão encerrada com sucesso!')
                }
            })

        } else {

            console.error('Conexão não encontrada.')
        }
    }


    async carregarUsuarios() {

        try {

             
            
            const sql = 'SELECT * FROM usuario'

            let [results] = await this.connection.promise().query(sql)
    
            
            results = results.map(x => ({

                id: x.id, 
                nome: x.nome,
                login: x.login,
                senha: x.senha,
                tipo: x.tipo

            }))

            this.gravar(results)
            console.log('Usuários carregados com sucesso!')
            
    
        } catch (err) {

            console.error('Erro ao carregar usuários:', err.message)
            
        } finally {


        }

    }

    gravar(array){

        array_usuarios = array
        
    }

    getAllUsers(){
        
        this.carregarUsuarios()
        return array_usuarios
    }

    async autenticarUser(login, senha) {

            
        
            
            const sql = 'SELECT id, nome, login FROM usuario WHERE login = ? AND senha = ?'
            const [results] = await this.connection.promise().query(sql, [login, senha])
    
            
            if (results.length === 0) {

                return { autenticado: false, usuario: 'Problema ao realizar autenticação.'}

            }else{

                return { autenticado:true, usuario: results[0]}
            }
    

        
    }

    
}




module.exports = {GerenciarUsuarios}