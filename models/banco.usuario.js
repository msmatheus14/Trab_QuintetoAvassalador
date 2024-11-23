
const mysql = require('mysql2')
let array_usuarios = []

class GerenciarUsuarios{

    constructor(){

        this.connection = null
        
        
    }

    async consultarUsuario(nome) {

        this.abrirconexao()

        return new Promise((resolve, reject) => {
            

            const sql = 'SELECT * FROM usuario where nome = ?';
    
            this.connection.query(sql, [nome], (err, results) => {

                if (err) {

                    console.log('Erro ao consultar usuário:', err.message);

                    reject(err);

                } else {
                   
                    resolve(results);
                    
                }
            });
        });
    }

    async adicionarUsuario(nome, login, senha, tipo){


        this.abrirconexao()

            const sql = 'insert into usuario (nome, login, senha, tipo) values (?, ?, ?, ?)';

            this.connection.query(sql, [nome, login, senha, tipo], (err, results) => {

                if (err) {

                    console.log('Erro ao adicionar usuário', err.message)
                }
                
            });

            this.fecharConexao()
            
            //RealizarValidação realizar confirmação se usuário foi criado corretamente
            return {

                nome:nome, login:login, senha:senha, tipo:tipo
                
            }


    }

    async alterarUsuario(tipo, id){

        this.abrirconexao()

        const sql = 'update usuario set tipo = ? where id = ?'

        this.connection.query(sql, [tipo, id], (err, results) => {
            if(err){
                console.log('Erro ao realizar update:', err.message)
            }else
            {
                console.log('Atualizado com sucesso!')
            }
        })

        this.fecharConexao()


    }

    async excluirUsuario(id) {


        this.abrirconexao()

        const sql = 'DELETE FROM usuario WHERE id = ?'

        return new Promise((resolve, reject) => {

            this.connection.query(sql, [id], (err, results) => {

                if (err) {

                    reject(err); // Retorna erro em caso de falha

                } else if (results.affectedRows === 0) {

                    resolve({ message: "Nenhum usuário encontrado com esses critérios." });

                } else {

                    resolve({ message: "Usuário excluído com sucesso." });
                }
            });

        }).finally(() => {

            this.fecharConexao();
        });

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
            
            const sql = 'SELECT * FROM usuario'

            let [results] = await this.connection.promise().query(sql)
    
            
            results = results.map(x => ({

                id: x.id, 
                nome: x.nome,
                login: x.login,
                senha: x.senha,
                tipo: x.tipo

            }));

            this.gravar(results)
            console.log('Usuários carregados com sucesso!')
            
    
        } catch (err) {

            console.error('Erro ao carregar usuários:', err.message)
            
        } finally {

            this.fecharConexao(); 
            
        }

    }

    gravar(array){

        array_usuarios = array
        
    }

    getAllUsers(){
        
        this.carregarUsuarios()
        return array_usuarios
    }



    

    
}




module.exports = {GerenciarUsuarios}