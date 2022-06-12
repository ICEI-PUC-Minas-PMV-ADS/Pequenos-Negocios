# Plano de Testes de Software


## Caso de Teste - CT-01 - Geral (Template Padrão), Cabeçalho e Rodapé

**Requisitos Associados**

RF-01 - O sistema deve ser responsivo para rodar em dispositivos móveis

RF-09 - O site deve permitir visualizar as informações de contatos do mantenedor do site

RF-11 - O Header do site deve permitir navegar entre as demais páginas

RF-14 - O footer do site deve conter links que direcionem para as redes sociais da empresa

**Objetivo do Teste**

- Verificar se o site adequa a visualização nas dimensões dos principais navegadores e celulares

- Verificar se os links de menu e logomarca no cabeçalho estão direcionando para as página

- Verificar se todos os links contidos no rodapé estão direcionando para as páginas corretamente

**Passos**

1) Acessar o navegador
2) Clicar em todos os links do menu, vídeos do youtube, botão do whatsapp e botões de redes sociais
3) Ao inspecionar elementos e escolher as opções dos principais celulares, o site deverá adequar-se as dimensões de tela


**Critérios de Êxito**

- Ao clicar nos links no menu (Sobre, Produtos, Contato, Curiosidades e Carrinho) os mesmos deverão direcionar para as respectivas páginas
- Ao clicar nos links das redes sociais (Youtube, Facebook e Instagram), deverá ser aberta uma nova página / respectivo aplicativo para cada uma delas

## Caso de Teste - CT-02 - Página Home

**Requisitos Associados**

RF-07 - A página deve permitir que o usuário assista os vídeos do youtube diretamente na página

RF-15 - A página deverá apresentar no mínimo três comentários de clientes

**Objetivo do Teste**

- Verificar se o player do youtube funciona diretamente na página
- Verificar os comentários dos clientes estão presentes na página

**Passos**

1) Acessar o navegador
2) Clicar no player do youtube
3) Visualizar os principais comentários dos clientes

**Critérios de Êxito**

- Ao clicar no player do Youtube, os vídeos deverão ser iniciados diretamente na página.


## Caso de Teste - CT-03 - Página Sobre

**Requisitos Associados**

RF-12 - O Site deve conter uma página onde informe a missão, visão e valores da empresa

RF-13 - O site deve permitir visualizar as últimas postagens realizadas no Instagram e possibilitar que o usuário clique nas postagens e seja direcionado para o site / aplicativo do Instagram

**Objetivo do Teste**

- Verificar se a missão, visão e valores estão presentes na página

- Verificar se estão aparecendo as últimas postagens do Instagram e se ao clicar nas mesmas, o usuário é direcionado para o site / aplicativo

**Passos**

1) Acessar o navegador
2) Visualizar a missão, visão e valores
3) Clicar nas postagens do Instagram e verificar se elas abrem em uma nova aba ou no aplicativo

**Critérios de Êxito**

- As últimas 11 postagens do Instagram devem aparecer na página e o usuário deverá poder usar o slider para visualizar as mesmas. Ao clicar em uma postagem específica uma nova aba / aplicativo deverá ser aberto


## Caso de Teste - CT-04 - Página Produtos

**Requisitos Associados**

RF-02 - O site deve conter uma sessão “Produtos” que contenha informações, fotos e demais detalhes sobre os produtos/serviços;

RF-05 - O site deverá permitir avaliar os produtos e ou serviços através de comentários;

RF-06 - O site deve conter uma sessão de comentários/avaliações de clientes;

RF-08 - O site deve apresentar, para cada produto, uma imagem correspondente;

RF-17 - O site deverá conter um botão que possibilite o usuário escolher um produto que alimentará o carrinho de compras.

**Objetivo do Teste**

- Verificar se todos os botões dos produtos (detalhes e comprar) estão funcionando

**Passos**

1) Acessar o navegador
2) Clicar em Detalhes
3) Clicar em Comprar
4) Digitar o nome, o comentário e enviar

**Critérios de Êxito**

- Ao clicar em detalhes, um modal deverá ser aberto com as informações dos produtos;
- Ao clicar em comprar, uma mensagem de êxito deverá ser apresentada e o carrinho deverá conter uma sacola de produtos;
- Ao digitar somente o nome ou somente o comentário deverá ser exibida uma mensagem de erro.

## Caso de Teste - CT-05 - Página Contato

**Requisitos Associados**

RF-04 - O Site deve conter uma página de contato.

RF-09 - O site deve permitir visualizar as informações de contatos do mantenedor do site.

**Objetivo do Teste**

- Verificar se os contatos requisitados estão constando na página. 

**Passos**

1) Acessar o navegador
2) Visualizar a página contato
3) Identificar as informações de contato

**Critérios de Êxito**

A página deverá conter as informações e meios de contatos da FerRosi e seu(s) respectivo(s) mantenedor. 


## Caso de Teste - CT-06 - Página Curiosidades

**Requisitos Associados**

RF-03 - O site deve conter sessão de “Curiosidades” que apresente conteúdo variado relacionado ao negócio. Ex: Receitas, posts, boas práticas e afins

**Objetivo do Teste**

- Verificar se as curiosidades estão publicadas
- Verificar se os botões de curtir estão funcionando

**Passos**

1) Acessar o navegador
2) Rolar até a parte de curiosides e verificar se as postagens estão aparecendo
3) Clicar nos botões de curtir abaixo de cada curiosidade

**Critérios de Êxito**

- O botão abaixo das curiosidades deverá possibilitar que usuário curta a postagem


## Caso de Teste - CT-07 - Página Carrinho

*Requisitos Associados*

RF-16 - O site deve conter um carrinho onde os produtos selecionados na página produtos aparecerão

*Objetivo do Teste*

- Verificar se os produtos selecionados na página produtos estão sendo direcionados para o carrinho

*Passos*

1) Acessar o navegador
2) Clicar no ícone do carrinho
3) Clicar no produto e tentar excluir do carrinho

*Critérios de Êxito*

A página deverá apresentar na cesta de compras os itens escolhidos na página produtos
Caso escolha limpar, o produto tem que sair do carrinho
Se for clicado para limpar e não estiver selecionado nenhum produto, a página informará "Para limpar produtos da lista, clique ou toque no produto desejado..."


## Caso de Teste - CT-08 - Envio do pedido de compras para o WhatsApp

**Requisitos Associados**

RF-16 - O site deve conter um carrinho onde os produtos selecionados na página produtos aparecerão

**Objetivo do Teste**

- Verificar se os produtos que estão na página carrinho foram enviados para o WhatsApp 

**Passos**

1) Acessar o navegador
2) Clicar no ícone do carrinho
3) Clicar no botão "Finalizar compra"

**Critérios de Êxito**

A página deverá perguntar se o operador que mesmo finalizar a compra e, respondendo "ok", os produtos que estavam na página carrinho devem ir, como mensagem, para o WhatsApp.
Se for clicado um produto para ser excluído e não confirmar a limpeza, a pagina não fará a finalização da compra e informará que existem produtos marcados para limpeza.
