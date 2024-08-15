const livro = new Object();

livro.titulo = "Eu e esse meu coração";
livro.autor = "C.C. Hunter";
livro.ano = 2018;

const aluno = new Object();

aluno.nome = "Kevin";
aluno.turma = "2TDS1";
aluno.nota = 10;

const carro = new Object();

carro.cor = "Azul Meia Noite";
carro.modelo = "Celta";
carro.ano = 2005;

const filme = new Object();

filme.titulo = "É assim que acaba";
filme.diretor = "Justin Baldoni";
filme.lancamento = 2024;

const cachorro = new Object();

cachorro.nome = "Nino";
cachorro.raca = "Salsicha";
cachorro.cor = "Preto";

const produto = new Object();

produto.descricao = "Muito confortável";
produto.marca = "Nike";
produto.preco = 199.99;

console.log(livro);
console.log(aluno);
console.log(carro);
console.log(filme);
console.log(cachorro);
console.log(produto);

console.log("-------------alterado--------------");

cachorro.nome = "Kevin Nino";

console.log(cachorro);