
const mysql = require('mysql2')
let array_usuarios = []

class GerenciarUsuarios{

    constructor(){

        this.connection = null
        
        
    }

    consultarUsuario(){
        
        
    }

    adicionarUsuario(nome, login, senha, tipo){


        this.abrirconexao()

            const sql = 'INSERT INTO usuario (nome, login, senha, tipo) VALUES (?, ?, ?, ?)';

            this.connection.query(sql, [nome, login, senha, tipo], (err, results) => {

                if (err) {

                    console.log('Erro ao adicionar usuário', err.message)
                }
                
            });

            this.fecharConexao()
            
            //Corrigir validação
            return {
                status: true,
                user: { nome, login, senha, tipo }
            }


        

    }



    alterarUsuario(){

    }

    excluirUsuaro(){

    }

    abrirconexao(){

        this.connection = mysql.createConnection({

            host: 'mysql-quinteto-adm.alwaysdata.net', 
            user: '386281',
            password: 'quinteto_2024', 
            database: 'quinteto-adm_3011'

          })

          this.connection.connect((err) => {

            if (err) {

                console.error('Erro ao conectar ao banco de dados:', err.stack);

                return;
            }

            console.log('Conexão estabelecida com sucesso. ID da conexão:', this.connection.threadId);

        });

        

    }

    fecharConexao(){

        if (this.connection) {

            this.connection.end(err => {

                if (err) {

                    console.error('Erro ao encerrar a conexão:', err.message);

                } else {

                    console.log('Conexão encerrada com sucesso!');
                }
            });

        } else {

            console.error('Conexão não encontrada.');
        }
    }

    async carregarUsuarios() {

        try {

            this.abrirconexao(); 
            
            const sql = 'SELECT * FROM usuario';

            let [results] = await this.connection.promise().query(sql);
    
            
            results = results.map(x => ({

                id: x.id, 
                nome: x.nome,
                login: x.login,
                senha: x.senha,
                tipo: x.tipo

            }));

            this.gravar(results)
            console.log('Usuários carregados com sucesso!');
            
    
        } catch (err) {

            console.error('Erro ao carregar usuários:', err.message);
            
        } finally {

            this.fecharConexao(); 
            
        }

    }

    gravar(array){

        array_usuarios = array
        console.log(array_usuarios)
        
    }

    getAllUsers(){
        
        this.carregarUsuarios()
        return array_usuarios
    }

    

    
}




module.exports = {GerenciarUsuarios}