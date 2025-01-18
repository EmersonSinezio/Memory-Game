# Memory Game

Este é um jogo de memória desenvolvido inicialmente em HTML, CSS e JavaScript, que foi posteriormente convertido para React com TypeScript. Além disso, foi integrado o Sass para um gerenciamento mais eficiente dos estilos.

## Tecnologias Utilizadas

- **React** com **TypeScript**
- **Sass** para gerenciamento de estilos
- **HTML**, **CSS** e **JavaScript** (utilizados na versão inicial do projeto)

## Funcionalidades

- O jogo de memória onde o usuário precisa combinar pares de cards com ícones de tecnologias.
- Cards viram ao clicar e, ao combinar corretamente, são removidos.
- Acompanhe seu progresso e visualize uma camada de "Game Over" quando o jogo for finalizado.
- Possui uma tela de reinício para começar o jogo novamente.

## Estrutura do Projeto

- **src/styles**: Contém os arquivos de estilo com Sass.

  - **variables.scss**: Define as variáveis de cores, fontes e outras configurações de estilo.
  - **mixins.scss**: Contém mixins para reutilização de blocos de código de estilo.
  - **base.scss**: Estilos globais para o projeto.
  - **components.scss**: Estilos específicos para os componentes.
  - **layout.scss**: Estilos relacionados ao layout do jogo.

- **src**: Contém os arquivos do projeto React com TypeScript.
  - **Game.tsx**: Componente para gerenciar a lógica do jogo.

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone <https://github.com/EmersonSinezio/Memory-Game.git>
   cd <Memory-game>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

O projeto estará disponível em http://localhost:3000.

Melhorias Futuras

- Refatoração do código: Melhorar a estrutura e organização dos componentes.
- Adicionar mais níveis de dificuldade: Incluir diferentes tamanhos de tabuleiro e novos tipos de cartas.

### Sobre o Curso

Este projeto foi realizado durante o Curso Dev Web do Programador BR. Durante o curso, aprendi os conceitos essenciais para desenvolvimento web, como manipulação do DOM, React, TypeScript, Sass, entre outros.
