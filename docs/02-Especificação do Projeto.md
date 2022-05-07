# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/Pequenos-Negocios/blob/main/docs/01-Documenta%C3%A7%C3%A3o%20de%20Contexto.md"> Documentação de Contexto</a></span>

A definição do problema foi levantada a partir de entrevistas realizadas com pessoas que já trabalham no ramo e usuários dos produtos que serão oferecidos. Os detalhes desse processo de entrevistas foram consolidados na forma de personas e histórias de usuários.

## Personas

Fernanda Alparone tem 46 anos, é confeiteira e sócia de um pequeno negócio autônomo especializado em bolos, doces e biscoitos amanteigados. Suas principais motivações para empreender são: possibilidade de trabalhar com o que gosta e o mercado promissor no ramo alimentício que dificilmente fica em baixa. Suas frustrações são os valores altos de matéria prima para início do projeto. Seus hobbies são: Ler, assistir filmes e visitar familiares.

Rosimeri Santos tem 61 anos, é artesã e sócia de um pequeno negócio autônomo especializado em bolos, doces e biscoitos amanteigados. Suas principais motivações para empreender são: trabalhar com o que gosta, a possibilidade de trabalhar em casa e ter uma fonte de renda. Suas frustrações são as dificuldades de deslocamento e o alto valor dos equipamentos necessários para fabricar seus artesanatos. Seus hobbies são: receber visitas de amigos e atender projetos de caridade.

José Mário tem 28 anos e trabalha como auxiliar de enfermagem. Suas motivações para comprar os produtos da FerRosi são: ter opções de presentes para parentes e amigos. Suas frustrações são as dificuldades em encontrar doces não industrializados. Seus hobbies são: jogos e sair com os amigos.

Joana Melo tem 47 anos e trabalha como professora de ensino médio. Suas motivações para consumir os produtos da FerRosi são: a possbilidade de aliviar a tensão do trabalha com um doce bem gostoso. Suas frustrações são: não saber fazer doces caseiros. Seus Hobbies são: Visitar amigos e familiares e sair com os amigos.


## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Fernanda Alparone   | Divulgar a FerRosi                 | Para as pessoas nos conhecerem         |
|Fernanda Alparone   | Divulgar nossos produtos           | Para servir como propaganda e que possam tomar conhecimento do que fazemos |
|Fernanda Alparone   | Ter uma área de curiosidades       | Para termos a possibilidade de uma troca mais constante e possibilitar maior visitação ao site |
|Rosimeri Santos     | Especificar a nossa missão         | Para existirem dúvidas sobre o que queremos |
|Rosimeri Santos     | Divulgar nosso processo de fabricação | Para nos aproximar mais dos nossos clientes e captar novos |
|Rosimeri Santos     | Ter um ambiente de "monte seu pedido" | Para facilitar a escolha dos produtos para os cliente encomendarem |
|José Mario          | Ter uma opção para que eu possa avaliar os produtos que vou comprar | Acho importante que o cliente possa saber a qualidade dos produtos |
|José Mario          | Ter a possiblidade de pesquisar um produto ou serviço com facilidade | Facilidade e praticidade |
|Joana Melo            | O site deve permitir receber postagens de outras plataformas sociais | Para reduzir/otimizar o tempo de uso |
|Joana Melo            | Em qualquer página do site, ter um botão de acesso ao WhatsApp com o número para contato | Para deixar disponível a possiblidade de contado com uma resposta rápida |

## Requisitos

O escopo funciona do projeto é definido por meio dos requisitos funcionais que descrevem as possíveis interações dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| O site deve conter uma sessão “Produtos” que contenha informações, fotos, valores e demais detalhes sobre os produtos/serviços | ALTA | 
|RNF-003| O site deve conter sessão de “Curiosidades” que apresente conteúdo variado relacionado ao negócio. Ex: Receitas, posts, boas práticas e afins | BAIXA |
|RNF-004| O site deve permitir adicionar produtos à sacola e finalizar o pedido através de uma mensagem via whatsapp para os donos do negócio | MÉDIA |
|RNF-005| O Site deve conter uma página de contato | ALTA |
|RNF-006| O site deverá permitir avaliar os produtos e ou serviços através de comentários | BAIXA |
|RNF-007| O site deve conter uma sessão de comentários/avaliações de clientes | ALTA |
|RNF-008| O site deverá conter uma API que integre os posts do instagram do negócio | MÉDIA |
|RNF-009| O site deve conter o campo de busca | ALTA |
|RNF-010| O site deve apresentar, para cada produto, uma imagem correspondente | ALTA |
|RNF-011| O site deve permitir visualizar as informações de contatos do mantenedor do site | MÉDIA |
|RNF-012| O site deve apresentar botão estático de whatsapp em todas as páginas | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku) | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada | ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade | MÉDIA |
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) | ALTA |

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir. 

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 07/07/2022 |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend        |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho        |
