import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// Conta 1
const cliente1 = new Cliente("Refel", 11122233309, "Perfil1");

const contaCorrente1 = new ContaCorrente(cliente1, 1001);
contaCorrente1.depositar(100);

// Conta 2
const cliente2 = new Cliente("Pedro", 22211122208, "Perfil2");

const contaCorrente2 = new ContaCorrente(cliente2, 2007);
contaCorrente2.depositar(100);

//transferência
contaCorrente1.tranferir(10, contaCorrente2);
contaCorrente2.tranferir(50, contaCorrente1);

//visualização
console.log(contaCorrente1);
console.log(contaCorrente2);
