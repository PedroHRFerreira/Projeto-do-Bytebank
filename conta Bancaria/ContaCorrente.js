import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
  _cliente;
  _saldo = 0;
  static numberAccount = 0;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  constructor(cliente, agencia) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numberAccount += 1;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }
  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }
  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);

    if (isNaN(this.saldo)) {
      return console.log("existe resultado NaN nessas contas.");
    }
  }
}
