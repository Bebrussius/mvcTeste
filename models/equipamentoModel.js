const { deleteEquipamento } = require("../controllers/equipamentoController");
const { query } = require("./dataBase");

class Equipamento {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    static async listarEquipamentos() {
        const db = require("./dataBase");
        const equipamentos = await db.query("SELECT * FROM equipamentos");
        return equipamentos;
    }

    async salvar() {
        const db = require("./dataBase");
        const sql = `INSERT INTO equipamentos (nome) VALUES ('${this.title}')`;
        await db.query(sql);
        console.log("Tarefa salva com sucesso!");
    }

    static async deleteEquipamento(id){
        const db = require('./dataBase');
        if(await db.query("DELETE FROM equipamentos WHERE id = "+id)){
            return true;
        }
        else{
            return false;
        }
    }
}

module.exports = Equipamento;
