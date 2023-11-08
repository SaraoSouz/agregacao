"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./src/model/Produto");
const CarrinhoDeCompra_1 = require("./src/model/CarrinhoDeCompra");
const produto1 = new Produto_1.Produto('Barbeador', 12.90);
const produto2 = new Produto_1.Produto('Desodorante', 10.00);
const produto3 = new Produto_1.Produto('Massa de tomate', 2.50);
const produto4 = new Produto_1.Produto('Trakinas', 3.99);
const produto5 = new Produto_1.Produto('Sukita', 6.00);
const carrinhoDeCompra = new CarrinhoDeCompra_1.CarrinhoDeCompra();
carrinhoDeCompra.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log(`Quantidade de itens no carrinho: ${carrinhoDeCompra.quantidadeProdutos()}`);
console.log(`Valor Total: ${carrinhoDeCompra.valorTotal()}`);
//# sourceMappingURL=teste.js.map