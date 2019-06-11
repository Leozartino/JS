//Obter três arquivos JSON de alunos
//A promise favorece mais o processamento asycnrono
//axios é baseado em promisses o http não xD

const http = require("http");

//essa callback será chamada quando o arquivo JSON estiver totalmente carregado
const getTurma = (letraID, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letraID}.json`;
  http.get(url, res => {
    let resultado = "";

    res.on("data", dados => {
      resultado += dados;
    });
    res.on("end", () => {
      callback(JSON.parse(resultado));
    });
  });
};

let nomes = [];

getTurma("A", alunos => {
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
  getTurma("B", alunos => {
    nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
    getTurma("C", alunos => {
      nomes.concat(alunos.map(a => `C: ${a.nome}`));
      console.log(nomes);
    });
  });
});
