const mysql = require('mysql2')
let array_hotel = []

class GerenciarHotel {

    async consultarHotel(nome_hotel) {

        this.abrirconexao()

        return new Promise((resolve, reject) => {
            

            const sql = 'SELECT * FROM hotel where nome_hotel = ?';
    
            this.connection.query(sql, [nome], (err, results) => {

                if (err) {

                    console.log('Erro ao consultar hotel:', err.message);

                    reject(err);

                } else {
                   
                    resolve(results);
                    
                }
            });
        });
    }

    async consultarUserHotel(id_dono) {

        this.abrirconexao()

        return new Promise((resolve, reject) => {
            

            const sql = 'SELECT * FROM hotel where id_dono = ?';
    
            this.connection.query(sql, [id_dono], (err, results) => {

                if (err) {

                    console.log('Erro ao consultar hootel vinculado a usuários:', err.message);

                    reject(err);

                } else {
                   
                    resolve(results);
                    
                }
            });
        });
    }



    async adicionar(nome, id_dono, url_img){


        this.abrirconexao()

            const sql = 'insert into usuario (nome_hotel, id_dono, url_img) values (?, ?, ?, ?)';

            this.connection.query(sql, [nome, id_dono, url_img], (err, results) => {

                if (err) {

                    console.log('Erro ao adicionar hotel', err.message)
                }
                
            });

            this.fecharConexao()
            
            //RealizarValidação realizar confirmação se usuário foi criado corretamente
            return {

                nome:nome, login:login, senha:senha, tipo:tipo
                
            }


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

    async carregarHotel() {

        try {

            this.abrirconexao(); 
            
            const sql = 'SELECT * FROM  hotel'

            let [results] = await this.connection.promise().query(sql)
    
            
            results = results.map(x => ({

                id_hotel: x.id_hotel, 
                nome_hotel: x.nome_hotel,
                id_dono:x.id_dono,
                url_img:x.url_img
                
            }));

            this.gravar(results)
            console.log('Hotels carregados com sucesso!')
            
    
        } catch (err) {

            console.error('Erro ao carregar Hotels:', err.message)
            
        } finally {

            this.fecharConexao(); 
            
        }

    }

    gravar(array){

        array_hotel = array
        
    }

    getAllUsers(){
        
        this.carregarUsuarios()
        return array_hotel
    }

    

    
}




module.exports = {GerenciarHotel}


