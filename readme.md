# Desafio - Desenvolvedor Fullstack Junior 3.
Desafio realizado para vaga de Desenvolvedor Fullstack Junior 3.
Realizei um aplicativo mobile do desafio com as mesmas funcionalidades do frontend como extra utilizando o react native.

Também realizei o deploy da aplicação frontend e backend: 
- link para o front: https://desafio-desenvolvedor-junior-3-pi.vercel.app
- link para o backend: https://desafio-desenvolvedor-junior-3.onrender.com

Abaixo estão as instruções para executar o desafio localmente, estou a disposição para tirar qualquer duvida sobre o projeto e para ajudar na execução caso precise.

Whatsapp: (81) 9 9359-0099.

## Instruções
**Pre-requisitos**
- Baixar o projeto no site: https://github.com/MylennaAlcantara/desafio-desenvolvedor-junior-3, clicando no botão verde com nome de "code" e em seguida em "Download ZIP", após finalizar o download, descompacte a pasta.
- Installar o Node js, site para realizar o donwload: https://nodejs.org/pt-br/download instalar a versão LTS.
- Instalar o https://dev.mysql.com/downloads/installer/, caso ainda não tenha instalado.
- Installar o aplicativo do expo go no celular.

**Para o banco de dados**
- Abra o MySql e crie um novo schema com o nome: desafio_junior_3.

**Passo a passo para rodar o backend**
- Abra a pasta que realizou o download e descompactou.
- Dentro da pasta backend, abra a pasta desafio-backend, abra o arquivo com nome "ormconfig.ts" para editar clicando com o botão direito do mouse em cima do arquivo, selecionando a opção "abrir com" e selecione o bloco de notas.
- Após aberto altere "database": "blpvdpisjtnfbb6c13jk" para "database": "desafio_junior_3", "host": "blpvdpisjtnfbb6c13jk-mysql.services.clever-cloud.com" para "host": "ip do seu computador", "username": "uzozut4jzpeqdwkk" para "username": "seu usuario de acesso ao banco" e "password": "4t5mhh2G05ssbNkCm08f" para "password": "sua senha de acesso ao banco".
- Volte para a pasta "desafio-backend", segure a tecla "shift" do teclado e clique com o botão em qualquer canto da pasta aberta, em seguida selecione a opção "abrir janela do powershell aqui".
- Após a janela do powershell abrir, digite o comando: npm install.
- Espere o processo finalizar, e em seguida digite o comando: npm run start:dev.
- Após o serviço iniciar, minimize a janela do powershell.

**Passo a passo para rodar o frontend**
- Certifique-se de que o aplicativo backend esta rodando.
- Abra a pasta "Frontend", em seguida abra a pasta "desafio-frontend", abra o arquivo com nome ".env" para editar clicando com o botão direito do mouse no arquivo, em seguida selecione "abrir com", e selecione o bloco de notas.
- Com o arquivo ".env" aberto, altere aonde tem REACT_APP_HOST=https://desafio-desenvolvedor-junior-3.onrender.com para REACT_APP_HOST=http://seuIpDoComputador:8090 e salve.
- Em seguida volte para a pasta "desafio-frontend", segure a tecla "shift" do teclado e clique com o botão direito do mouse em qualquer canto da pasta aberta.
- Selecione a opção "abrir janela do powershell aqui".
- Após a janela do powershell abrir, digite o comando: npm install.
- Espere o processo finalizar, e em seguida digite o comando: npm start.
- Após o serviço iniciar, irá abrir automaticamente uma janela do navegador com o projeto executando, minimize a janela do powershell.
- Caso a janela do navegador não abra, ou acabe fechando, basta abrir uma guia do navegador e digitar o endereço: seuIpDoComputador:3000, exemplo: se meu ip é 192.168.240 então basta digitar 192.168.240:3000 e apertar o enter que irá entrar na pagina do projeto.

**Passo a passo para rodar o mobile**
- Certifique-se de que o aplicativo backend esta rodando.
- Abra a pasta mobile, e em seguida a basta "desafio-mobile".
- Procure pelo arquivo "variavelAmbiente.js", clique com o botão direito do mouse.
- Selecione "abrir com" e escolha o bloco de notas.
- Com o arquivo aberto subistitua aonde tem: REACT_APP_HOST: "http://192.168.3.7" por: REACT_APP_HOST: "http://seuIpDoComputador:8090" e salve.
- Em seguida volte para a pasta "desafio-mobile".
- Após aberto, aperte a tecla "shift" do teclado e click com o botão direito do mouse em qualquer parte da pasta aberta.
- Selecione  a opção "abrir janela do powershell aqui".
- Com a janela aberta do powershell, digite o comando: npm install.
- Após concluir as instalações, digite o comando: npm start.
- Quando a aplicação iniciar, irá aparecer um QR Code, abra o aplicativo do expo go para scanear o QR Code.

## Proposta
Você deverá desenvolver um blog. Para isso, separamos a proposta desse desafio em duas etapas:

**Back-end:**
Desenvolva uma Restful API utilizando Node.JS que contenha as seguintes rotas:
- [X] `/register` - [POST] - esta rota deve cadastrar um usuário;
- [X] `/login` - [POST] - esta rota deve autenticar um usuário;
- [X] `/posts` - [POST] - esta rota deve cadastrar uma postagem mantendo a referência do autor. (requer autenticação);
- [X] `/posts/{id}` - [PUT] - esta rota deve editar a postagem do ID especificado mantendo a referência do autor. (requer autenticação);
- [X] `/posts` - [GET] - esta rota deve retornar a lista de todas as postagens ordenadas das mais recentes para as mais antigas com a possibilidade de inverter esta ordenação e de retornar apenas as postagens do usuário que fez a requisição (requer autenticação);
- [X] `/posts/{id}` - [GET] - esta rota deve retornar a postagem do ID especificado com todos os seus dados (requer autenticação);
- [X] `/posts/{id}` - [DELETE] - esta rota deve deletar a postagem do ID especificado.

**Front-end:**
Desenvolva uma aplicação web utilizando o framework front-end react e esta deve atender as seguintes histórias de usuário:
- [X] Eu como usuário desejo me cadastrar;
- [X] Eu como usuário desejo realizar login;
- [X] Eu como usuário autenticado desejo visualizar todas as postagens;
- [X] Eu como usuário autenticado desejo visualizar os detalhes de uma postagem;
- [X] Eu como usuário autenticado desejo visualizar todas as minhas postagens;
- [X] Eu como usuário autenticado desejo criar uma postagem;
- [X] Eu como usuário autenticado desejo editar uma postagem que eu criei;
- [X] Eu como usuário autenticado desejo deletar uma postagem que eu criei.

