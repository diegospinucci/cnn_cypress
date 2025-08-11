# Linguagem, framework e tecnologias Utilizadas.

Neste projeto foi utlizado o framework Cypress.io em sua versão 13.15.2;
Node em sua versão 14.5.4
Repórter dos cenários Allure Repórter;

- **Framework Cypress** - Além de seu tempo de execução rápido, testes em paralelo e de sua simplicidade e facilidade de uso, o Cypress possui uma sintaxe amigável e uma interface de usuário  intuitiva, além de uma excelente documentação e comunidade.

- **Por que não outra linguagem?** - O Selenium possui uma api um pouco mais complexa e uma configuração um pouco maior. Além disso, ele comunica com os navegadores externos por meio do WebDriver, pode ter tempos de execução mais lentos em comparação com o Cypress.

- O Robot Framework não é tão eficiente em termos de desempenho quanto o Cypress ou o Selenium, especialmente para testes complexos ou em larga escala.

# 🧪 Projeto de Testes com Cypress + Allure Reporter

Este projeto utiliza o [Cypress](https://www.cypress.io/) para automação de testes end-to-end e o [Allure Reporter](https://docs.qameta.io/allure/) para geração de relatórios detalhados.

---

## 🚀 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: ≥ 16.x)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Git (opcional, mas recomendado)

---

## 📦 Instalação

1. **Clone o repositório:**

A. Após fazer o git clone deste projeto para sua máquina local, acesse o diretório do projeto e siga os seguintes passos: 

2. **Instale o Cypress**: 

    `npm install cypress --save-dev`

3. **Instale o Allure Report**: 

    `npm install -D @shelex/cypress-allure-plugin`

3. **Execute o comando no terminal**: 

    `npx cypress open`


4. **Na página de boas vindas do Cypress**: clique em 'E2E Testing'

5. Selecione o browser de sua preferência

6. Clique em 'Start E2E Testing'

7. Será aberta a aba Specs

8. Clique sobre o caso de teste desejado 


Você pode também rodar o projeto no modo headless

    `npx cypress run`


# Testes Automatizados – CNN Brasil

Este repositório reúne os testes automatizados desenvolvidos para validar funcionalidades essenciais do portal da CNN Brasil, conforme os requisitos propostos no desafio técnico.

---

## 📌 Visão Geral

O portal da CNN Brasil é uma plataforma de notícias que entrega conteúdo em tempo real, vídeos e reportagens sobre os principais acontecimentos do Brasil e do mundo. Por ser um site de alto tráfego e relevância, é fundamental garantir:

- Disponibilidade constante
- Navegação fluida e intuitiva
- Conteúdo acessível e confiável
- Boa performance em diferentes dispositivos

Durante a análise, alguns pontos de atenção foram identificados:

- Conteúdos carregados de forma assíncrona (como carrosséis e vídeos)
- Navegação baseada em atributos dinâmicos
- Ausência de identificadores semânticos que dificultam a automação

Esses aspectos foram considerados na definição da estratégia de testes.

---

## 🎯 Estratégia de Testes

### Tipos de Testes Aplicados

- **Funcionais (E2E):** Simulam o comportamento do usuário em cenários reais
- **Responsividade:** Verificam o funcionamento em diferentes tamanhos de tela
- **Usabilidade (manual):** Avaliam a clareza da navegação e acessibilidade
- **Regressão automatizada:** Garantem que atualizações não quebrem funcionalidades existentes

## 📈 Cobertura de Testes

A cobertura foi definida com base em funcionalidades relevantes para o usuário final:

- Página inicial: validação do carrossel "Mais Lidas"
- Página Ao Vivo: navegação por categorias e reprodução de vídeos
- Busca: pesquisa por termo, navegação entre páginas e abertura de matérias

---

## 🛠️ Ferramentas e Tecnologias

| Ferramenta         | Finalidade                          |
|--------------------|--------------------------------------|
| Cypress            | Automação de testes end-to-end       |
| GitHub             | Versionamento e controle de código   |
| VS Code            | Ambiente de desenvolvimento          |
| Allure Reporter    | Relatório sobre a execução dos testes|

---


## 📝 Plano de Testes

### Cenário 1 – Página Inicial: Mais Lidas

| Caso | Descrição                                                  |
|------|------------------------------------------------------------|
| CT01 | Acessar a página inicial                                   |
| CT02 | Localizar o bloco "Mais Lidas"                             |
| CT03 | Selecionar a oitava matéria do carrossel                   |
| CT04 | Verificar se a página da matéria foi exibida corretamente  |

### Cenário 2 – Ao Vivo: Shorts em Esportes

| Caso | Descrição                                                  |
|------|------------------------------------------------------------|
| CT05 | Acessar o menu "Ao Vivo"                                   |
| CT06 | Navegar até a categoria "Esportes"                         |
| CT07 | Localizar a seção "Shorts"                                 |
| CT08 | Clicar em um vídeo e verificar se o modal foi exibido      |

### Cenário 3 – Busca por "avião"

| Caso | Descrição                                                  |
|------|------------------------------------------------------------|
| CT09 | Abrir o campo de busca                                     |
| CT10 | Pesquisar por "avião"                                      |
| CT11 | Ir para a página 2 dos resultados                          |
| CT12 | Selecionar a terceira matéria e verificar a página aberta  |

---


---

## 👤 Autor

Este projeto foi desenvolvido por **Diego Spinucci Cavalcanti** como parte do desafio técnico de automação de testes para o portal da **CNN Brasil**.

A proposta foi aplicar boas práticas da cultura de Qualidade, garantir cobertura funcional dos principais fluxos e utilizar ferramentas modernas para entregar uma solução confiável e escalável.