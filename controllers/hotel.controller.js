const {GerenciarHotel} = require('../models/banco.hotel')

const adicionarhotel = async function (req, res) {

    gerenciarhotel = new GerenciarHotel

        const {nome, id_dono, url_img} = req.body
        console.log(nome, id_dono, url_img)

        const resp = gerenciarhotel.adicionar(nome, id_dono, url_img)
        res.status(200).json(resp)
    
}

const retornarTodosHotel = async function (req, res) {

    gerenciarhotel = new GerenciarHotel
    let hotels = gerenciarhotel.getAllhotel()
    res.json(hotels)


    
}

module.exports = {adicionarhotel, retornarTodosHotel}