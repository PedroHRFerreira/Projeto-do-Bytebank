import { Fucionario } from "./Funcionario.js";

export class Gerente extends Fucionario {
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf);
    this._bonificacao = 1.1;
  }
}
