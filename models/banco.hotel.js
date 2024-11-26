const mysql = require('mysql2')
let array_hotel = []

class GerenciarHotel {

    constructor(){

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


        });
    }


    async consultarUserHotel(id_dono) {


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

            this.fecharConexao()
        });

        
    }



    async adicionar(nome_hotel, id_dono) {
;
    
        return new Promise((resolve, reject) => {

            const sql = 'INSERT INTO hotel (nome_hotel, id_dono) VALUES (?, ?)'
    
            this.connection.query(sql, [nome_hotel, id_dono], (err, results) => {

                if (err) {

                    console.log('Erro ao adicionar hotel:', err.message);

                    reject(err); 

                } else {

                    console.log('Hotel adicionado com sucesso!');

                    resolve({

                        id_hotel: results.insertId, 
                        nome_hotel:nome_hotel,
                        
                    });
                }
            });

        }).finally(() => {

            this.fecharConexao()

        });
    }

    abrirconexao(){

        

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

; 
            
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

             this.fecharConexao()
            
        }

    }

    gravar(array){

        array_hotel = array
        
    }

    getAllhotel(){
        
        this.carregarHotel()
        return array_hotel
    }


}

module.exports = {GerenciarHotel}
