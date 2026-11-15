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

## Lista cronológica — Nosso Pároco

A seção **Nosso Pároco** tem um botão **“Ver lista dos párocos — ordem cronológica”**. Ao clicar, a tabela se abre. Para editar nomes, anos, períodos ou datas de ordenação:

1. Abra `index.html` e procure `HISTÓRICO DOS SACERDOTES`.
2. Cada linha da lista é um `<tr>`, com quatro `<td>`: **ano**, **nome**, **período ou ordenação** e **tipo**.
3. Mantenha os registros em ordem crescente de ano. Para novos registros, copie uma linha completa e edite seus campos.
4. O estilo da tabela está no final de `css/estilos.css`, sob `LISTA CRONOLÓGICA DOS SACERDOTES`.

**Importante:** parte da relação contém apenas datas de ordenação; elas não identificam necessariamente períodos de atuação na paróquia. Confirme grafias e datas nos arquivos paroquiais antes de publicar como histórico oficial.


## Fotos dos sacerdotes antigos (sem alterar o pároco atual)

A foto e os dados do Pe. Adeildo Sebastião Ferreira permanecem no cartão principal.
O botão **Ver fotos e lista dos sacerdotes — ordem cronológica** abre uma tabela
em **largura total, abaixo do cartão principal**, sem deslocar a foto atual.

Para adicionar fotos antigas:
1. Salve as fotos verdadeiras em `assets/fotos/parocos/` (ex.: `jose-kherle.jpg`).
2. Abra `js/fotos-parocos.js` e encontre a linha comentada com o nome do sacerdote.
3. Coloque o nome do arquivo entre aspas, como `paroco_01: "jose-kherle.jpg"`.
4. As fotos ainda não fornecidas permanecem com o ícone **Sem foto**.
5. A foto do pároco atual é definida separadamente em `index.html` e não é afetada.

**Importante:** datas de ordenação e períodos de atuação são informações diferentes.


## Fichas interativas dos sacerdotes antigos

Clique na fotografia ou no nome de um sacerdote da lista cronológica para abrir a ficha. A imagem e os dados do **pároco atual não foram alterados**.

Para inserir imagens originais e restauradas de cada sacerdote:

1. Coloque os dois arquivos em `assets/fotos/parocos/`.
2. Abra `js/fotos-parocos.js` e localize o identificador (`paroco_01`, `paroco_02` etc.).
3. Preencha `original: "foto-original.jpg"` e `restaurada: "foto-restaurada.jpg"`.
4. Edite `resumo: "Breve histórico confirmado..."`. Se deixar vazio, o sistema mostra texto neutro.
5. Publique todas as pastas no GitHub Pages.

A comparação deslizante só aparece quando **ambas as imagens** existem. Se tiver apenas uma, ela será mostrada sozinha; se não tiver nenhuma, aparece um espaço reservado. Nenhum retrato restaurado foi inventado ou gerado.

As frases de orientação sobre validação do acervo foram retiradas da parte pública do site; continuam aqui como orientação editorial. A lista intercala períodos de atuação e datas de ordenação, que não são equivalentes. Confira os registros históricos antes de afirmar que cada sacerdote foi pároco da paróquia.


## Ajuste do retrato do pároco atual

A foto foi centralizada na moldura em `css/estilos.css`, nas classes `.paroco-foto-coluna`, `.paroco-foto-wrap` e `.paroco-foto-wrap img`. Para ajustar o enquadramento do rosto, altere `object-position: 50% 50%` somente nessa última classe.


## Fotos históricas dos párocos antigos

As fotos originais e as versões restauradas por IA já foram adicionadas em `assets/fotos/parocos/` e vinculadas no arquivo `js/fotos-parocos.js`.
A foto do pároco atual foi mantida separada, sem alteração.


## Comparação dos párocos antigos — atualização

- Na lista histórica, o retrato mostrado é a **foto restaurada por IA** (quando disponível).
- Ao clicar no retrato ou no nome, abre-se a ficha com as duas fotos e o deslizador.
- **Original** aparece à esquerda e **Restaurada por IA** à direita.
- Quando você desliza até mostrar uma única versão, a legenda da outra desaparece.
- As informações e a imagem do pároco atual não foram modificadas.
- Para trocar fotos, edite `js/fotos-parocos.js` e `assets/fotos/parocos/`.


## Comparar as fotos do pároco atual

Clique na imagem do Pe. Adeildo Sebastião Ferreira, no cartão principal da seção “Nosso Pároco”. A ficha compara a fotografia original enviada no RAR (`assets/fotos/parocos/Original - Pe.-Adeildo-Sebastiao-Ferreira-2007-ate-a-atualidade.webp`) com a foto atual que já aparece no site (`assets/fotos/FotoPadreAdeildoSebastiaoFerreira.jpeg`). Use o controle deslizante no mouse ou no celular. O retrato do cartão, nome e demais informações não foram alterados.

Para substituir futuramente a foto atual, mantenha o nome do arquivo ou atualize o caminho `FOTO_ADEILDO_ATUAL` em `js/fotos-parocos.js`.


## Cartão do Instagram compacto
Na seção **Acompanhe a Paróquia**, o destaque do Instagram agora usa uma largura máxima de 760px, centralizada. Para ajustar, edite `.redes-destaque` em `css/estilos.css`.


## Atualização: cartão Instagram nas cores do site
O cartão compacto da seção **Acompanhe a Paróquia** agora usa azul, dourado e branco. A alteração está em `css/estilos.css`, nas classes `.redes-destaque`, `.redes-destaque-icon` e `.redes-btn`.


## Pároco atual na lista cronológica

A última linha da lista cronológica agora mostra a foto atual do Pe. Adeildo Sebastião Ferreira. Ao clicar na foto, abre a mesma comparação de imagens do cartão principal. A apresentação principal não foi alterada.


## Foto do Pe. Adeildo na lista cronológica

A linha do Pe. Adeildo na lista cronológica usa a imagem `assets/fotos/parocos/restaurada-Pe.-Adeildo-Sebastiao-Ferreira-2007-ate-a-atualidade.webp`. Ao clicar nela, o site abre a comparação entre a foto original e a foto restaurada por IA. O cartão principal continua exibindo a foto atual do site; ao clicar nela, a comparação utiliza a fotografia original e o arquivo restaurado `.webp`.


### Comparação do Pe. Adeildo
A ficha do Pe. Adeildo, aberta tanto pelo cartão principal quanto pela linha da lista, compara `Original - Pe.-Adeildo-Sebastiao-Ferreira-2007-ate-a-atualidade.webp` com `restaurada-Pe.-Adeildo-Sebastiao-Ferreira-2007-ate-a-atualidade.webp`. A miniatura da lista mostra a restaurada; o cartão principal mantém sua foto atual.
