import { Conta } from "./Conta.js";

export class ContaPoupacao extends Conta {
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
  }
  sacar(valor) {
    const taxa = 1.02;
    return this._sacar(valor, taxa);
  }
}
