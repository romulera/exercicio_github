# Aplicação para buscar programadores no GitHub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Primeira Parte

Fizemos em aula até o momento de abrir o componente gh-dialog;

## Segunda parte

Cirei um método no service chamado findRepos para solicitar a API do github um objeto do tipo array com todos os dados de todos os repositórios do usuário pesquisado.

Foi necessário criar uma interface chamada Ghrepos para receber e tratar o array recebido pelo findRepos; 

Utilizei esse método no componente gh-dialog no (ngOnInit) que faz um iteração e percorre todo o array de repositórios (repos) com a tipagem  GhRepos,e armazena esses dados em um array chamado ranking; As informações salvas nesse array são: Nome, números de estrelas (stargazers_count)
Com essas informações e a partir do método de array.sort essa lista de rankeamento é organizada com o critério de estrelas (stargazers_count). O método reverse é usado para reverter a ordem desse array. O item de posição 0 é usado para mostrar no navegador o nome e quantidade de estrelas do repositório mais estrelado do usuário pesquisado.

