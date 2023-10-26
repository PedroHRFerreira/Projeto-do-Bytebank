// index.js
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";

// Diretor
const diretor = new Diretor("rodrigo", 10000, 12345678900);
diretor.cadastraSenha(123);

// Gerente
const gerente = new Gerente("pedro", 5000, 14725836912);
gerente.cadastraSenha(222);

//cliente
const cliente = new Cliente("pedro", 12345678911, "perfil1", 223);

//login
const diretorLogado = SistemaAutenticacao.login(diretor, 123);
const gerenteLogado = SistemaAutenticacao.login(gerente, 222);
const clienteLogado = SistemaAutenticacao.login(cliente, 223);

console.log(diretorLogado);
console.log(gerenteLogado);
console.log(clienteLogado);
