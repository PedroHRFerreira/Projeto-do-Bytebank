import { Fucionario } from "./Funcionario.js";

export class Diretor extends Fucionario {
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf);
    this._bonificacao = 2;
  }
}
