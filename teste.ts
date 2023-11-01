import { Produto } from "./src/model/Produto";
import { CarrinhoDeCompra } from "./src/model/CarrinhoDeCompra";

const produto1 = new Produto('Barbeador', 12.90);
const produto2 = new Produto('Desodorante', 10.00);
const produto3 = new Produto('Massa de tomate', 2.50);
const produto4 = new Produto('Trakinas', 3.99);
const produto5 = new Produto('Sukita', 6.00);

const carrinhoDeCompra = new CarrinhoDeCompra();
carrinhoDeCompra.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log(`Quantidade de itens no carrinho: ${carrinhoDeCompra.quantidadeProdutos()}`)
console.log(`Valor Total: ${carrinhoDeCompra.valorTotal()}`);