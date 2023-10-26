export class Cliente {
  myProfile(profile) {
    let perfil = profile;
    if (perfil === String) {
      return perfil;
    }
  }

  get cpf() {
    return this._cpf;
  }

  constructor(nome, cpf, perfil, senha) {
    this.name = nome;
    this._cpf = cpf;
    this.myProfile = perfil;
    this._senha = senha;
  }
  autenticar() {
    return true;
  }
}
