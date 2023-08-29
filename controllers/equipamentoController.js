
const Equipamento = require('../models/equipamentoModel');

let equipamentos = [];

async function getEquipamento(req, res) {
    equipamentos = await Equipamento.listarEquipamentos();
    console.log(equipamentos);
    res.render('equipamentos', { equipamentos });
}

function addEquipamento(req, res) {
    const { title } = req.body;

    const equipamento = new Equipamento(null, title, false);
    equipamento.salvar();
    res.redirect('/equipamentos');
}

async function deleteEquipamento(req, res) { 
    if(await Equipamento.deleteEquipamento(req.params.id)){
        res.redirect('/equipamentos');
    }
    else{
        res.redirect('/equipamentos');
    }
}

module.exports = { getEquipamento, addEquipamento, deleteEquipamento};
