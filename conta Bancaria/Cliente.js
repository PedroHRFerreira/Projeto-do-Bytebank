export class Cliente {
  name;
  _cpf;
  myProfile(profile) {
    let perfil = profile;
    if (perfil === String) {
      return perfil;
    }
  }

  get cpf() {
    return this._cpf;
  }

  constructor(nome, cpf, perfil) {
    this.name = nome;
    this._cpf = cpf;
    this.myProfile = perfil;
  }
}
