class Pizza {
    constructor(base, molho, cobertura, queijo) {
        this.base = base;
        this.molho = molho;
        this.cobertura = cobertura;
        this.queijo = queijo;
    }
    comoFicou() {
        console.log(`A sua pizza ficou com Base de ${this.base}, Molho de ${this.molho}, Cobertura de ${this.cobertura} e o Queijo é ${this.queijo}.`);
    }
}

const cliente00 = new Pizza("Massa fina", "Tomate", "Bacon", "Mussarela");

cliente00.comoFicou();