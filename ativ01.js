class Usuario {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    apresentacao() {
        console.log(`O nome do(a) cachorro(a) é ${this.nome}, ele(a) tem ${this.idade} anos, e é do sexo ${this.sexo}.`);
    }
}

const cliente00 = new Usuario("Kevin Nino", 2, "Macho");
const cliente01 = new Usuario("Lolla", 5, "Fêmea");

cliente00.apresentacao();

//console.log(cliente00);
//console.log(cliente01);

