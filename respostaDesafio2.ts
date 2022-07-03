// Como podemos melhorar o esse código usando TS? 

/* let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/
enum TrabalhoPessoas {
    Developer,
    Veterinaria,
    Motorista,
    Administradora,
    Pedreiro
}
type Pessoas = {
    nome: string,
    idade: number,
    profissao: TrabalhoPessoas
}
const Herberton: Pessoas = {
    nome: 'Herberton',
    idade: 40,
    profissao: TrabalhoPessoas.Developer
};

const Ketillyn: Pessoas = {
    nome: 'Ketillyn',
    idade: 21,
    profissao: TrabalhoPessoas.Veterinaria
};

const Ketillayne: Pessoas = {
    nome: 'Ketillayne',
    idade: 21,
    profissao: TrabalhoPessoas.Administradora
};

const Maria: Pessoas = {
    nome: 'Maria',
    idade: 38,
    profissao: TrabalhoPessoas.Administradora
}