import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numberAccount = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numberAccount += 1;
  }

  //sobrescrevendo o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  }
}
