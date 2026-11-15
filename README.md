# Paróquia Nossa Senhora do Livramento — Site para GitHub Pages

Site estático organizado em **HTML, CSS e JavaScript**, sem necessidade de instalar bibliotecas ou servidor.

## Estrutura

```text
index.html                     → Textos, horários, eventos, contatos e catálogo de fotos
css/estilos.css                → Cores, fontes, espaçamento, layout e responsividade
js/script.js                  → Funcionalidades do site (menu, fotos, sino, zoom etc.)
assets/fotos/                 → Fotos, brasão e QR Code do Pix
assets/audio/                 → Áudio do sino
assets/fontes/                → Fonte personalizada
modelos/MODELO-NOVO-AVISO.html → Modelo de novo aviso/evento
```

## 1. Editar textos, horários e eventos

Abra `index.html` no VS Code. Use `Ctrl + F` para encontrar o texto exibido no site e substituí-lo. Os horários, contatos e chaves Pix permanecem com os valores do arquivo original: **confirme os dados antes da publicação**.

## 2. Alterar qualquer foto (sem editar JS)

1. Coloque o novo arquivo em `assets/fotos/`.
2. Abra `index.html` e procure `catalogo-de-fotos` logo no início.
3. Altere **somente o caminho ao lado da chave desejada**. Exemplo:

```json
"padroeira": "assets/fotos/FotoPadroeira.webp",
"festa": "assets/fotos/FestaPadroeiraFoto01.jpg"
```

Para uma foto nova: `"festa": "assets/fotos/NovaFotoFesta.jpg"`.
Mantenha as aspas, vírgulas e nomes das chaves. Respeite as letras maiúsculas/minúsculas.
As entradas `paroco_exemplo_1` e `paroco_exemplo_2` estão vazias porque as fotografias não foram enviadas; preencha quando tiver as imagens.

## 3. Cores e visual

Abra `css/estilos.css` e procure `:root` para alterar as cores principais. Abaixo ficam os tamanhos de foto da festa:

```css
--foto-festa-altura: 350px;
--foto-festa-altura-celular: 255px;
```

## 4. Adicionar um aviso ou evento

Abra `modelos/MODELO-NOVO-AVISO.html`, copie o cartão e cole dentro de `<div class="avisos-grid">` em `index.html`. Personalize título, data, descrição e `data-foto`. Insira uma nova chave no catálogo de fotos com o caminho correspondente.

## 5. Publicar no GitHub Pages

1. Crie ou abra o repositório no GitHub.
2. Envie **todo o conteúdo desta pasta**, incluindo `index.html`, `css`, `js`, `assets` e `modelos`.
3. Acesse **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Selecione a branch `main`, diretório `/ (root)` e salve.
5. Ao atualizar fotos, confira se enviou a imagem e modificou o catálogo; faça recarga forçada (`Ctrl + F5`) se necessário.

## Observações

- O site pode ser aberto diretamente pelo `index.html` para teste local; para uma prévia mais fiel use a extensão Live Server do VS Code.
- O sino pode exigir interação do visitante antes de reproduzir, por política do navegador.
- A apresentação de lives depende das configurações e transmissões externas existentes.
- Não publique informações privadas ou senhas no repositório. Confira a chave Pix, o QR e os contatos com a paróquia.
- **O layout e a funcionalidade foram conservados**, com a separação dos arquivos e organização dos recursos.
