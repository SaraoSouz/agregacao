"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa3 = void 0;
class Pessoa3 {
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
            CPF: ${this.cpf}
            Data: ${this.data_nascimento}
            Telefone: ${this.telefone}
            Endereço: ${this.endereco}
            Altura: ${this.altura}
            Peso: ${this.peso}`);
    }
    falar() {
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        console.log(`${this.nome} fala: ${_frase}`);
    }
    comer() {
        console.log(`${this.nome} está comendo`);
    }
    comerPrato(_prato) {
        console.log(`${this.nome} come: ${_prato}`);
    }
    andar() {
        console.log(`${this.nome} está andando`);
    }
    andarRapido(_rapido) {
        console.log(`${this.nome} anda: ${_rapido}`);
    }
}
exports.Pessoa3 = Pessoa3;
//# sourceMappingURL=pessoa3.js.map