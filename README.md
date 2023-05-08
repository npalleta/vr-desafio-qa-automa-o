# VR-Desafio-QA-Automacao

## 📋 Introdução

Essa é a minha entrega do desafio da VR para a oportunidade de Especialista em QA - Testes.

Backend - O teste foi realizado com Ruby + Cucumber + Allure Report.

Frontend - O teste foi realizado com Cypress + Cucumber + Cucumber HTML Report.  

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Ter instalada a versão do Java JDK 8 ou superior;
* Ter instalado o pacote nodejs;
* Ter instalado o pacote ruby;
* Ter instalados yarn ou npm;
* Ter instalado o bundler.

## 🚀 Realizando o Setup

Clone o repositório:

```bash
git clone https://github.com/npalleta/vr-desafio-qa-automacao.git
```
Instale o ***Allure Commandline***
O link abaixo apresenta a documentação do Allure Framework:

<https://docs.qameta.io/allure/>

Realize as instalações necessárias:

### Cypress
- Acesse a pasta **cypress_src/tests/**;
- Adicione as dependências com os comandos:

```bash
yarn install ou npm -i
ou separadamente:
yarn add nome_da_lib -D ou npm i nome_da_lib --save-dev 
```

- Execute o comando:

```bash
npm run cy:homol:compareImg
```

O comando acima também era executar a comparação de imagem usando a base que está disposta na pasta **snapshots/base/CT_001...**;

- Gere o relatório com o comando:

```bash
npm run postcypress:run
```

### HTTPARTY
- Acesse a pasta **httparty_src/tests/**;
- Execute o comando de instalação de dependências:

```bash
bundle install
```

- Execute o comando para rodar os testes:
```bash
cucumber
```

- O relatório Allure será gerado com o comando.

```bash
allure serve report/allure-results/
```

*Infelizmente, o Allure Report para Cypress nas últimas versões está sem atualização com relação à configuração*.

*Substituí pelo Cucumber HTML Report*.

Obrigado!

[⬆ Voltar ao topo](#VR-Desafio-QA-Automacao)

---
