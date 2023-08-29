const db = require("./dataBase");

class Usuario {
    constructor(id, nome, email, senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    static async listarUsuarios() {
        const usuarios = await db.query("SELECT * FROM usuarios");
        return usuarios;
    }

    async salvar() {
        const sql = `INSERT INTO usuarios (nome, senha) VALUES ('${this.nome}','${this.senha}')`;
        await db.query(sql);
        console.log("Usuário salvo com sucesso!");
    }
}

module.exports = Usuario;
