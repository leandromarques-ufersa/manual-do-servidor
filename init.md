# Manual do Servidor — UFERSA Angicos

## Direção atual · revisão de 6 de outubro de 2026

Escolha explícita do responsável: uma entrada mais minimalista, seguindo o esboço enviado, para não distrair os novos servidores.

- Tela inicial centralizada com “Bem-vindo(a) à UFERSA Campus Angicos”, “Escolha sua categoria” e somente dois cartões: Docente e Técnico Administrativo.
- Removidos da entrada: menus, fotografia, textos promocionais, faixas informativas e atalhos institucionais.
- Marca discreta no topo, fundo branco e rodapé simples. Azul e verde suaves distinguem os cartões; sem ícones ou descrições adicionais.
- As seções aparecem em uma etapa separada visualmente após escolher o perfil. A tela inicial fica oculta; “Escolher outra categoria” retorna à entrada. Voltar/avançar do navegador também respeita a etapa pela URL.
- Layout responsivo, foco acessível e conteúdo anterior preservado no JavaScript.
- A preferência minimalista está confirmada; detalhes de cor e tipografia continuam como proposta.
- Esta revisão prevalece sobre a primeira proposta documentada abaixo. A foto permanece em `assets/` apenas como recurso disponível para uso futuro.

### Refinamento dos botões · 6 de outubro de 2026

Pedido confirmado: seguir o segundo esboço, com contorno lateral e canto inferior esquerdo arredondado.
- Cartões de categoria com borda na cor do perfil: 7 px à esquerda, 5 px na base e 1 px no topo e à direita.
- Canto inferior esquerdo com raio de 42 px (32 px em telas pequenas); demais cantos com 3 px.
- Mantidos texto centralizado, fundo suave e indicação de foco por teclado.
- Este formato substitui os cartões com quatro cantos igualmente arredondados.

## Registro inicial · 6 de outubro de 2026

### Escolhas solicitadas pelo responsável
- Público: servidores docentes e técnicos administrativos da UFERSA, campus Angicos.
- Entrada: página de boas-vindas seguida da escolha entre os dois perfis.
- Organização progressiva por seções e subseções, com possibilidade de expansão.
- Identidade inspirada na UFERSA e imagens institucionais.
- Hospedagem no GitHub Pages; projeto pequeno e fácil de manter.
- Implementar inicialmente a landing page.

### Primeira proposta visual — substituída pela revisão minimalista
Não tratar esta proposta como aprovação definitiva do responsável.

| Token | Valor | Uso |
| --- | --- | --- |
| `--navy` | `#153c56` | Cabeçalho, botão principal e faixa institucional |
| `--blue` | `#214f91` | Perfil docente e links |
| `--green` | `#28624a` | Perfil técnico e acolhimento |
| `--yellow` | `#e9bd52` | Acentos decorativos |
| `--ink` | `#213b4b` | Texto principal |
| `--muted` | `#526674` | Texto secundário |
| `--soft` | `#f5f8f7` | Superfícies suaves |

Paleta proposta a partir das referências institucionais; não representa uma especificação oficial de marca.

- Tipografia: pilha local `Inter, Segoe UI, Arial, sans-serif`. Inter é usada somente se instalada; sem downloads de fontes.
- Títulos com peso 650–750, pouco espaçamento entre letras e hierarquia clara.
- Conteúdo com largura máxima de 1160 px; espaçamento generoso; cartões com raio de 20 px.
- Fotografia real do campus, com gradiente de contraste e recorte responsivo.
- Dois cartões de igual importância, identificados por texto e cor.
- Linguagem acolhedora, direta e sem excesso de termos administrativos na entrada.
- Componentes: barra institucional, cabeçalho, hero, cartões de perfil, seções expansíveis, faixa sobre o campus, canais de apoio e rodapé.

### Arquitetura
HTML semântico, CSS com variáveis/Grid/Flexbox e JavaScript nativo com melhoria progressiva. Sem dependências, build ou backend. Os links institucionais funcionam sem JavaScript; a abertura dos guias exige JavaScript, com aviso em `noscript`.

- `index.html`: página inicial e estrutura dos guias.
- `styles.css`: tokens, componentes e regras responsivas.
- `app.js`: dados das seções e interação dos perfis por hash.
- `assets/`: imagens servidas localmente.
- `tecnico/Seções`: rascunho original preservado; fonte inicial do conteúdo TAE.
- `.nojekyll`: publicação estática direta no GitHub Pages.

Novas seções TAE entram em `secoesTecnico` no `app.js`, usando `{ titulo, itens: [[rótulo, URL opcional]] }`. Ausência de URL significa orientação em preparação. Conteúdo docente ainda não fornecido: mostrar estado explícito e canais oficiais, sem inventar orientações. Quando os artigos forem escritos, criar páginas próprias e manter navegação por perfil, seção e subseção. Centralizar estilos em `styles.css`.

### Acessibilidade e manutenção
- Idioma pt-BR, landmarks, hierarquia de títulos, link de salto e foco visível.
- Perfis como links; seções com `details/summary` nativos, utilizáveis por teclado.
- Foco no título após escolher perfil; respeito a movimento reduzido.
- Layout adaptável a telas pequenas; não depender apenas de cor para comunicar.
- Sem rastreadores, cookies ou armazenamento de dados pessoais.
- Não publicar prazos ou regras administrativas sem confirmar fonte e data de revisão.
- Links do rascunho preservados; seu conteúdo normativo não foi auditado nesta implementação.

### Referências e imagens
- Portal: https://ufersa.edu.br/
- Campus: https://angicos.ufersa.edu.br/
- Apresentação e origem da foto: https://angicos.ufersa.edu.br/apresentacao/
- Foto: https://angicos.ufersa.edu.br/wp-content/uploads/sites/15/2024/06/2222222222.jpg
- Marca: https://angicos.ufersa.edu.br/wp-content/themes/temaufersa/img/logo-ufersa.png

Arquivos obtidos em 06/10/2026; crédito registrado aqui; a foto foi retirada da interface na revisão minimalista. Não foi identificada licença específica no material consultado; não atribuir licença própria às imagens. Marca preservada sem alterações. A fotografia de origem contém um pequeno ícone de áudio; ele não representa um controle da página.

### Próximas escolhas a registrar
Paleta e fontes aprovadas; ajustes de linguagem; responsáveis pela atualização; conteúdo docente; redação das orientações TAE; eventual substituição da foto por original sem sobreposição.

Registrar cada decisão futura com data, pedido do responsável, mudança e justificativa. Distinguir sempre preferências confirmadas de sugestões.

### Logotipo cinza · 6 de outubro de 2026

Pedido do responsável: logotipo cinza e um pouco maior. Aplicada apresentação em escala de cinza via CSS ao arquivo institucional existente, preservando suas proporções. Largura de 160 px em telas maiores e 136 px em telas pequenas (antes: 132 px e 112 px). O arquivo original permanece intacto; não se trata de outro arquivo oficial de marca monocromática.

### Cartões retangulares com ícones · 6 de outubro de 2026

Pedido confirmado: substituir o formato anterior por retângulos com ícones que identifiquem as categorias.
- Removidos o contorno lateral espesso e o canto inferior esquerdo acentuado.
- Borda uniforme de 1 px e cantos discretos de 4 px; cartões de 150 px de altura mínima.
- Ícones SVG locais em traço: capelo para Docente e crachá para Técnico Administrativo, acima dos rótulos.
- Ícones decorativos ocultos de leitores de tela; os textos continuam identificando os links.
- Mantidas as cores por perfil, a versão responsiva e o foco visível.
Esta decisão substitui o refinamento anterior dos botões com contorno lateral.

### Logotipo azul transparente · 6 de outubro de 2026

Pedido confirmado: substituir o logotipo cinza pelo azul transparente. O cabeçalho agora usa o arquivo existente `assets/Logotipo UFERSA em Azul Transparente.png`, com transparência verificada no canal alfa. Removido o filtro de escala de cinza; preservadas as proporções originais e as larguras de 160 px e 136 px. Esta escolha substitui a versão cinza anterior.

### Disposição vertical das categorias · 6 de outubro de 2026

Pedido: botões verticais, não horizontais. Implementada uma única coluna, com Docente acima de Técnico Administrativo, em todas as larguras de tela. Grupo centralizado com largura máxima de 320 px; mantidos ícones, cores e formato retangular.

### Correção do formato vertical · 6 de outubro de 2026

O responsável esclareceu com um desenho: “vertical” se refere ao formato dos cartões, não à disposição. A interpretação anterior de empilhar os botões está substituída.
- Dois cartões lado a lado, altos e estreitos, na proporção largura/altura de 2:3.
- Grupo centralizado de até 500 px, com ícones na região central e rótulos na base, alinhados à esquerda.
- Mantida a disposição em duas colunas também no celular, com espaçamentos e fontes adaptados.

### Cartões das seções TAE · 6 de outubro de 2026

Pedido confirmado por novo esboço: aplicar formato vertical também à próxima tela, com seis cartões em três colunas e duas linhas.
- Ordem: Orientações iniciais, Carreira, Saúde; Benefícios, Licenças e afastamentos, Serviços.
- Ícones em traço: casa, maleta, cruz, moeda, documento e quatro quadrados, respectivamente.
- Cartões na proporção 2:3, ícone central e título na base à esquerda, com o verde do perfil técnico.
- Mantida a abertura acessível por `details/summary`: clicar ou usar o teclado revela os assuntos e links existentes abaixo do cartão.
- Em telas de até 640 px, a grade passa a duas colunas para preservar legibilidade.
- Título: “Guia do servidor técnico administrativo”. Conteúdo docente em preparação permanece sem seções inventadas.

## Nova implementação com Tailwind e shadcn/ui · 6 de outubro de 2026

Pedido explícito: refazer a interface com Tailwind CSS e shadcn/ui, incluir referências às duas bibliotecas no header e usar ícones de biblioteca, sem desenhá-los.

- Arquitetura atual: React + TypeScript + Vite, Tailwind CSS via plugin Vite e componentes shadcn/ui instalados pelo CLI oficial. Substitui a arquitetura anterior de HTML/CSS/JS sem build.
- Componentes: Card, Button, Badge e Dialog. Ícones importados de `lucide-react`, biblioteca usada pelo shadcn/ui; nenhum ícone autoral.
- Cabeçalho: marca azul transparente existente e links para Tailwind CSS e shadcn/ui.
- Proposta visual: fundo quase branco, cartões brancos, bordas suaves, sombras discretas, acentos azul e verde, tipografia local e hierarquia consistente.
- Mantidos: dois cartões verticais lado a lado; seis seções TAE em três colunas (duas no celular); ícone central e título inferior; conteúdo docente em preparação.
- As seções agora abrem um Dialog acessível do shadcn/ui, com fechamento por Escape, contenção de foco e retorno ao cartão. Substitui os antigos `details/summary`.
- Conteúdo separado em `src/content.ts`; rascunho original preservado.
- Execução local: `npm ci` e `npm run dev`. Publicação: `npm run build`, saída `dist/`, workflow GitHub Actions para Pages. Não abrir mais o HTML diretamente nem publicar a raiz como site pronto.
- Os arquivos legados `app.js` e `styles.css` foram substituídos pelos módulos de `src/`.
- As preferências estruturais anteriores permanecem; a nova apresentação visual ainda pode ser refinada pelo responsável.

### Páginas de seção no lugar de modais · 6 de outubro de 2026

Pedido confirmado: cada cartão (Orientações iniciais, Carreira etc.) deve abrir outra página com sua listagem. Removido o uso de Dialog na navegação.
- Cada seção tem uma rota por hash, por exemplo `#tecnico/orientacoes-iniciais` e `#tecnico/carreira`, compatível com GitHub Pages e acesso direto/recarregamento.
- Página com título, opções existentes e link para voltar ao guia técnico administrativo.
- Links institucionais e sinalização de orientações em preparação preservados.
- Histórico do navegador, título da página e foco no título acompanham a navegação. Seção inexistente apresenta estado explícito com retorno ao guia.
Esta decisão substitui a abertura de assuntos em diálogos.

### Carreira com resumos de fontes oficiais · 6 de outubro de 2026

Pedido: transformar a listagem da página Carreira em landing page informativa com resumo de cada tópico e link oficial.
- Consultadas as seis URLs já indicadas em `src/content.ts` (quatro da PROGEPE e dois programas EV.G/Enap) em 06/10/2026.
- Resumos em `src/career.ts`; apresentação em `src/CareerPage.tsx`, com introdução, navegação por tópicos, requisitos, documentos, notas e link de fonte em cada bloco.
- Preservar a distinção entre estágio probatório, PDI, mérito, capacitação e titulação. Não prometer concessão automática ou aproveitamento automático do PDI.
- Informações institucionais resumidas, não auditoria jurídica. Confirmar formulários, calendário e enquadramento nas fontes antes da solicitação; data de consulta visível.
- Demais seções continuam com listagem. Ícones exclusivamente Lucide; componentes shadcn/ui e Tailwind mantidos.

### Simplificação de Carreira · 6 de outubro de 2026

Pedido confirmado: remover a landing page com resumos e apresentar cada tópico como botão para uma página própria. O responsável enviará o conteúdo posteriormente.
- Carreira mostra somente a orientação de escolha e seis links em formato de botão.
- Páginas por tópico em `#tecnico/carreira/<id>`, com título, retorno para Carreira e aviso “Conteúdo em preparação”.
- Removidos os resumos pesquisados da interface e de `src/career.ts`; não preencher essas páginas até receber o conteúdo do responsável.
- Esta decisão substitui a apresentação anterior de resumos oficiais. As fontes originais permanecem no rascunho e em `src/content.ts`.

### Padronização dos cartões de Carreira · 6 de outubro de 2026

Pedido confirmado: usar o mesmo layout da página anterior e retirar PDI dos tópicos independentes.
- Carreira reutiliza `SelectionCard`, também usado na seleção de perfis e seções: cartões verticais, ícone Lucide central, título na base, verde TAE e mesma grade responsiva.
- Quatro tópicos: Estágio probatório, Progressão por mérito, Aceleração da progressão e Incentivo à qualificação.
- Os programas PDI de nível intermediário e superior pertencem ao conteúdo de Estágio probatório. Suas referências ficam em `probationPdiSources`, para inclusão quando o responsável fornecer o texto; não são mais botões ou páginas independentes.
- Páginas de conteúdo continuam em preparação, conforme solicitado anteriormente.

### Conteúdo de Estágio probatório fornecido em PDF · 6 de outubro de 2026

Fonte editorial: `Documento sem título.pdf`, fornecido pelo responsável. Texto e sublinhados conferidos nas duas páginas do documento.
- Página implementada em `src/ProbationPage.tsx` com “O que é?”, “Como funciona?” e “Como solicito?”. Conteúdo preservado, com ajustes mínimos de pontuação e grafia.
- Trechos associados a URLs viram links: avaliações, dois programas PDI, recepção, requerimento, certificado e página oficial.
- Trechos associados a instruções abrem modais shadcn/ui: resultado das avaliações (caminho no SIGRH) e declaração de exercício (solicitação para rhangicos@ufersa.edu.br).
- Modais são apenas explicações dentro da página; navegação entre tópicos continua por páginas próprias.
- Não foi feita revisão normativa: trata-se da implementação do conteúdo fornecido, sem substituir as orientações por resumos de outras fontes.

### Leitura mais confortável e links externos · 6 de outubro de 2026

Pedido: abrir links em nova aba e tornar os textos maiores e mais convidativos.
- Links web externos usam `ExternalLink`, com `target="_blank"`, `rel="noopener noreferrer"` e aviso para leitores de tela. Navegação interna continua na mesma aba; e-mail mantém `mailto:`.
- Estágio probatório: corpo de 16 px no celular e 18 px em telas maiores, entrelinhas de 32/36 px, títulos de 24/30 px e mais espaço entre itens.
- Introdução em fundo verde suave, cartões com bordas discretas, maior espaçamento e textos dos modais ampliados. Conteúdo do documento preservado.

### Direção editorial inspirada em coworking · 6 de outubro de 2026

Referência solicitada: https://br.weblium.com/templates/demo/coworking-center-website-design-149 (demo observada em https://coworking-center.weblium.site/).
- Aplicada à página de Estágio probatório: abertura fotográfica ampla, título de impacto, contraste escuro, botão arredondado e seções numeradas com mais respiro.
- Adaptação institucional: fotografia local do campus, azul profundo, detalhes areia/amarelo e verde. Nenhuma imagem ou texto comercial da referência foi copiado.
- Conteúdo fornecido, links externos e modais preservados. Demais páginas mantêm a navegação minimalista definida anteriormente.

### Estágio probatório minimalista com blocos alternados · 6 de outubro de 2026

Nova referência: esboço fornecido pelo responsável às 17h20. Substitui a direção visual inspirada no template de coworking.
- Título seguido de linha divisória, fundo claro e conteúdo sem cartões, fotografia, faixas coloridas ou numeração de etapas.
- Em desktop, “O que é?” e “Como solicito?” ficam à esquerda; “Como funciona?” desloca-se à direita, mantendo o texto alinhado à esquerda para leitura.
- No celular, as três seções ocupam a largura disponível em uma única coluna.
- Mantidos corpo de 16/18 px, entrelinhas amplas, textos fornecidos, links em nova aba e modais informativos.
- Ao final, orientação curta e botão para a página oficial.

### Alinhamento dos requisitos e botão oficial · 6 de outubro de 2026

Pedido confirmado: título, parágrafo e lista de “Como funciona?” alinhados à direita. Marcadores internos à lista acompanham o alinhamento; link e modal do Módulo II preservados. Botão “Estágio probatório · PROGEPE” preto com texto branco e hover em cinza escuro. Substitui a orientação anterior de manter o texto desse bloco alinhado à esquerda.


### Explicações expansíveis · 7 de outubro de 2026

- Textos explicativos sem link para uma página externa usam a cor normal do texto, sem sublinhado ou aparência de link.
- Todas as antigas bolinhas de informação são substituídas por um “+” vermelho (Lucide), que expande a explicação logo abaixo, na própria página, em vez de abrir um modal. Ao expandir, exibir “−” para recolher.
- O ícone permanece junto à última palavra do texto, sem quebrar sozinho para outra linha. Manter navegação por teclado, foco visível e estado expandido acessível.
- Esta regra substitui as decisões anteriores sobre modais informativos. Links externos continuam abrindo em nova aba.

### Imagens nos cartões de Carreira · 7 de outubro de 2026

- Cartões de Carreira recebem fotografias de trabalho, escadas e biblioteca como fundo, preservando o formato vertical e os ícones Lucide.
- Aplicar camada escura em degradê, títulos e ícones claros, foco visível e zoom discreto respeitando a preferência por movimento reduzido.
- Usar arquivos locais otimizados e documentar origem, autoria e licença em `assets/carreira/README.md`. Fotos selecionadas sob licença gratuita Unsplash; não confundir com domínio público.


### Cartões sem fotografias e zoom nos ícones · 7 de outubro de 2026

- Substitui a decisão anterior de usar imagens nos cartões de Carreira: manter fundo claro e ícones Lucide, sem fotografias de background.
- Aplicar zoom discreto de 10% no ícone ao passar o cursor sobre o cartão ou ao focá-lo pelo teclado, com transição de 200 ms.
- Respeitar a preferência de movimento reduzido, desativando o zoom e sua transição.

### Progressão por Mérito · 7 de outubro de 2026

- Página com conteúdo fornecido pelo responsável, seguindo o padrão do Estágio probatório: três seções alternadas, “Como funciona?” à direita, tipografia espaçosa e botão oficial preto com texto claro.
- Links externos abrem em nova aba; orientação do relatório utiliza o mesmo componente compartilhado de explicação expansível com “+” vermelho, sem estilo de link.

### Aceleração da Progressão por Capacitação · 8 de outubro de 2026

- Nome completo utilizado no cartão de Carreira e no título da página.
- Conteúdo fornecido pelo responsável, seguindo o mesmo padrão das páginas de Estágio probatório e Progressão por Mérito: três seções alternadas, “Como funciona?” à direita e tipografia espaçosa.
- Requerimento abre em nova aba; lista de certificados apresentada como texto normal.

### Cartões com resumo · 8 de outubro de 2026

- Cartões de perfis, seções e tópicos seguem a referência enviada: fundo branco, cantos discretos, sombra suave, ícone Lucide em círculo no topo, título e resumo curto alinhados à esquerda e “Saiba mais” na base.
- O cartão inteiro é um único link; preservar foco visível e minizoom no ícone com respeito a movimento reduzido.
- Uma coluna em telas pequenas, duas em telas médias e até três nas grades de seções e tópicos em telas grandes. Altura flexível para acomodar títulos e resumos.
- Esta decisão substitui o posicionamento anterior de ícones centralizados e títulos na base dos cartões.

### Saúde · 8 de outubro de 2026

- Seção com cartões de Atestados Médicos e Assistência à Saúde Suplementar, seguindo o padrão de ícone, resumo e “Saiba mais”.
- Atestados Médicos utiliza o conteúdo fornecido pelo responsável, blocos alternados e destaque para a orientação sobre ponto eletrônico. Links externos em nova aba e botão oficial preto.
- Assistência à Saúde Suplementar possui página reservada para o conteúdo a ser fornecido.

### Assistência à Saúde Suplementar · 8 de outubro de 2026

- Página com o conteúdo fornecido pelo responsável, modalidades de convênio e ressarcimento, condições de dependentes e comprovação anual.
- Tabela transcrita da imagem enviada, com oito faixas de renda e dez faixas etárias; ocupa a largura disponível e permite rolagem horizontal com foco por teclado.
- Mantidos o padrão de seções alternadas, destaque de atenção e link externo em nova aba.

### Tabela de Saúde Suplementar sem rolagem · 8 de outubro de 2026

- A tabela passa a ocupar a largura disponível com colunas fixas, sem largura mínima ou barra de rolagem horizontal. Espaçamentos e fonte se ajustam ao tamanho da tela. Substitui a orientação anterior de rolagem horizontal nesta tabela.

### Ícones expansíveis de Saúde Suplementar · 8 de outubro de 2026

- “Atenção” e “Saber Mais” aparecem lado a lado, centralizados, com ícones Lucide de traço fino em verde, título e descrição curta.
- Ao clicar, o conteúdo correspondente abre abaixo da dupla; clicar novamente recolhe. Um bloco aberto por vez, com estado acessível e foco por teclado.
- Substitui o “+” nesses dois controles; demais explicações mantêm o padrão anterior.

### Regra padrão: centralização de ícones expansíveis · 8 de outubro de 2026

- Os controles com ícones expansíveis, como “Dependentes” e “Tabelas”, devem estar sempre centralizados horizontalmente em relação à largura útil da página, tanto no desktop quanto no celular.
- Posicioná-los em um bloco de largura completa, fora das seções de texto alternadas à esquerda ou à direita. Ícone, título e resumo ficam centralizados; quando houver vários controles, centralizar o conjunto.
- O conteúdo expandido aparece abaixo dos controles e mantém o alinhamento adequado para leitura de textos e tabelas.
- Esta regra vale para novas implementações e substitui qualquer posicionamento anterior desses controles dentro de blocos laterais.

### Declaração de Comparecimento · 8 de outubro de 2026

- Cartão na seção Saúde com ícone Lucide e resumo, direcionando à página própria.
- Conteúdo fornecido pelo responsável, em três seções no padrão existente, com limites anuais em destaque e observações em bloco destacado.
- Botão oficial preto com texto claro e abertura em nova aba.

### Containers de Observação e Atenção · 8 de outubro de 2026

- Utilizar o componente compartilhado `Notice` em todos os containers desses tipos.
- **Observação:** ícone Lucide `Pencil`, fundo azul claro (`blue-50`), borda `blue-200`, título e ícone `blue-800`, texto `blue-950`.
- **Atenção:** ícone Lucide `CircleAlert` (exclamação), fundo âmbar claro (`amber-50`), borda `amber-300`, título e ícone `amber-800`, texto `amber-950`.
- Cantos arredondados, espaçamento interno de 20 px, ícone ao lado do título e conteúdo alinhado à esquerda. Sempre exibir o título textual para não depender apenas da cor ou do ícone.
- Aplicar também ao conteúdo de avisos expansíveis, preservando a centralização dos controles externos.

### Listas de conteúdo com verificação · 8 de outubro de 2026

- Usar os componentes compartilhados `CheckList` e `CheckListItem` para listas de requisitos, documentos, condições e limites nas páginas.
- Todos os itens e subitens usam o ícone Lucide `Check`, de 16 px, em verde `emerald-700`, alinhado à primeira linha. Substitui bolinhas, letras, números e algarismos romanos como marcadores visuais.
- Preservar a hierarquia e o recuo das sublistas, o alinhamento do texto da seção e a semântica acessível de lista. O ícone é decorativo, não representa uma tarefa concluída pelo usuário.

### Orientações iniciais · 8 de outubro de 2026

- Página com perguntas e respostas sobre matrícula SIAPE, e-mail institucional, Sougov, sistemas integrados e frequência digital, conforme conteúdo fornecido.
- Seções alternadas, listas com Check, aviso no padrão Atenção e contatos acionáveis. Links de páginas externas abrem em nova aba; Sougov utiliza o destino direto, sem redirecionamento do Google.

### Marcadores de subitens · 8 de outubro de 2026

- Itens principais mantêm o ícone Lucide `Check` verde de 16 px.
- Subitens usam o ícone Lucide `Circle` verde de 8 px, preservando o recuo. O componente compartilhado identifica automaticamente listas aninhadas.
- Esta regra substitui a orientação de usar o mesmo ícone nos itens principais e subitens.

### Posição dos marcadores conforme alinhamento · 8 de outubro de 2026

- Em listas alinhadas à direita, os ícones dos itens e subitens ficam à direita do texto, com recuo nesse lado.
- Em blocos alinhados à esquerda, permanecem à esquerda. Blocos internos que retomam alinhamento à esquerda, como avisos, também retomam os marcadores à esquerda.
- Aplicar pelo componente compartilhado, preservando Check nos itens principais e Circle nos subitens.

### Navegação contextual · 8 de outubro de 2026

- Páginas de tópicos de Carreira, Saúde e Benefícios têm navegação lateral fixa à direita no desktop, com espaço reservado para não sobrepor o conteúdo.
- Exibir ícones Lucide dos tópicos da seção, página ativa destacada em verde com `aria-current`, nomes no foco/hover e botão de retorno à grade da seção.
- No celular, apresentar os controles horizontalmente abaixo do cabeçalho.
- Assistência à Saúde Suplementar mantém a seção de origem na URL e na navegação. Auxílio-Transporte possui página de acesso às orientações oficiais enquanto seu conteúdo local não é fornecido.

### Navegação lateral à esquerda · 8 de outubro de 2026

- Substitui o posicionamento anterior à direita: navegador fixo à esquerda no desktop, com espaço reservado no conteúdo.
- Sem fundo, borda ou sombra no conjunto. Ícones com área circular; hover com sombreamento circular suave e opção ativa com fundo circular verde claro.
- Rótulos de ajuda aparecem à direita dos ícones. Mantida a disposição horizontal no celular e o foco acessível.

### Posição do navegador na margem · 8 de outubro de 2026

- No desktop, centralizar horizontalmente o navegador no espaço entre a borda esquerda da janela e o início do texto. Calcular a posição considerando a largura máxima do conteúdo e seus espaçamentos, em vez de fixá-lo junto à borda.

### Navegação entre seções · 8 de outubro de 2026

- Nas páginas principais das seções, exibir ícones de Orientações iniciais, Carreira, Saúde, Benefícios, Licenças e afastamentos e Serviços, destacando a seção atual.
- O botão de grade retorna ao guia técnico administrativo. Dentro de um tópico, manter a navegação contextual entre tópicos da seção.
- Preservar posição lateral e círculos já definidos. No celular, permitir quebra de linha para acomodar todos os controles.

### Regra geral de navegação por nível anterior · 8 de outubro de 2026

- Sempre exibir o navegador lateral nas páginas internas, com os ícones das opções oferecidas na página anterior (nível hierárquico superior), destacando a opção atual.
- Nos guias de categoria, exibir Docente e Técnico Administrativo, além do retorno à página inicial de escolha de categoria.
- Nas seções, exibir as seções do guia; nos tópicos, exibir os tópicos da seção. Incluir sempre o botão de retorno ao nível superior.
- Preservar a posição à esquerda, centralizada na margem, ícones sem fundo coletivo e destaques circulares. No celular, manter o arranjo adaptado abaixo do cabeçalho. A página inicial não possui nível anterior.

### Compartilhamento e dúvidas · 8 de outubro de 2026

- Exibir ações no canto superior direito de todas as páginas: Compartilhar copia a URL completa com o hash da página, com confirmação acessível e alternativa de cópia manual.
- Dúvidas abre o aplicativo de e-mail para `rhangicos@ufersa.com.br`, endereço informado pelo responsável, com assunto e link da página. Não envia mensagens automaticamente.

### GitHub Pages · 8 de outubro de 2026

- Repositório: `leandromarques-ufersa/manual-do-servidor`, branch `main`.
- Publicação via GitHub Actions, com build do Vite em `dist/`.
- Endereço: https://leandromarques-ufersa.github.io/manual-do-servidor/

### Guia docente · 8 de outubro de 2026

- Mesmas seis seções, cartões, ações de página e navegação lateral do guia técnico, mantendo URLs no perfil `docente`.
- Carreira docente possui seis tópicos próprios. Eles, Orientações iniciais, Licenças e afastamentos e Serviços exibem “Estamos trabalhando nisso.” até receberem conteúdo.
- Saúde e Benefícios reutilizam os componentes de conteúdo dos técnicos; os cartões e retornos preservam o perfil e a seção de origem.

### Cores de interação por categoria · 8 de outubro de 2026

- Guia docente: azul nos ícones de navegação, marcadores de listas, controles de tabelas, ícones dos cartões e ações “Saiba mais”; fundos circulares em azul claro.
- Guia técnico: manter os tons verdes existentes nesses elementos. Usar tokens compartilhados `profile-*`, definidos pelo perfil da página, inclusive nos conteúdos reutilizados.
- Preservar tipografia, fundo, textos, espaçamento e demais diretivas. Botões oficiais permanecem pretos; avisos mantêm azul para Observação e âmbar para Atenção. Indicadores semânticos de sim/não nas tabelas e controles explicativos vermelhos mantêm suas cores.
