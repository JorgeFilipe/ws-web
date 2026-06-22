# Blueprint: Formulário de Cadastro do Hospital Arkham

## Visão Geral

Este projeto é um formulário de cadastro de pacientes para o Hospital Arkham. O objetivo é criar uma interface de usuário temática, sombria e gótica, que seja ao mesmo tempo moderna, atraente e responsiva.

## Design e Funcionalidades

### Estilo e Design

*   **Tema:** Gótico, sombrio e misterioso, inspirado na temática do Asilo Arkham.
*   **Paleta de Cores:** Pretos, cinzas escuros, com detalhes em vermelho escuro e branco para contraste.
*   **Tipografia:** Uma fonte serifada e estilizada para os títulos (como `Creepster` ou similar) e uma fonte sans-serif limpa para o corpo do texto, garantindo legibilidade.
*   **Layout:** Centralizado, com o formulário destacado. O layout será responsivo para se adaptar a dispositivos móveis e desktops.
*   **Efeitos Visuais:**
    *   Um fundo com textura sutil para dar uma sensação tátil.
    *   Sombras profundas (`box-shadow`) nos elementos do formulário para criar uma sensação de profundidade.
    *   Efeitos de "brilho" (`glow`) em elementos interativos como botões e campos de input ao serem focados.

### Funcionalidades

*   **Formulário de Cadastro:**
    *   Nome do Paciente
    *   Data de Nascimento
    *   Motivo da Internação (com algumas opções pré-definidas)
    *   Contato de Emergência
    *   Botão de Envio
*   **Interatividade:**
    *   Validação de formulário no lado do cliente (ainda a ser implementado).
    *   Ao enviar, os dados do formulário serão capturados pelo JavaScript e exibidos no console do navegador.
*   **Acessibilidade:**
    *   Uso de tags semânticas de HTML (`<form>`, `<label>`, etc.).
    *   Contraste de cor adequado para garantir a legibilidade.

## Plano de Implementação Atual

1.  **HTML (`index.html`):**
    *   Modificar o título da página.
    *   Estruturar o formulário de cadastro com os campos necessários (`input`, `select`, `label`).
    *   Adicionar um cabeçalho para o nome do hospital.
2.  **CSS (`style.css`):**
    *   Importar as fontes do Google Fonts.
    *   Aplicar o tema escuro e a paleta de cores.
    *   Estilizar o formulário e seus elementos, incluindo os efeitos de sombra e brilho.
    *   Garantir a responsividade do layout com Media Queries.
3.  **JavaScript (`main.js`):**
    *   Adicionar um `event listener` para o evento `submit` do formulário.
    *   Implementar a função que previne o comportamento padrão de envio, coleta os dados dos campos e os exibe no console.
