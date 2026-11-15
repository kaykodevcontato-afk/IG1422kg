/**
 * FICHAS DOS SACERDOTES ANTIGOS — EDITE AQUI.
 * Coloque as imagens em assets/fotos/parocos/ e preencha apenas seus nomes abaixo.
 * original: fotografia histórica verdadeira, sem alterações.
 * restaurada: versão tratada com IA da MESMA fotografia.
 * resumo: breve biografia pesquisada e conferida (não invente fatos).
 * As informações e a foto do pároco atual são independentes deste arquivo.
 */
const DADOS_PAROCOS_ANTIGOS = {
  paroco_01: { original: "Original - Mons.-Jose-Kherle-Primeiro-Vigario-1919.webp", restaurada: "restaurada-Mons.-Jose-Kherle-Primeiro-Vigario-1919.webp", resumo: "" }, // Mons. José Kherle
  paroco_02: { original: "Original - Pe.-Joaquim-Taumaturgo-Albuquerque-1920-a-1922.webp", restaurada: "restaurada-Pe.-Joaquim-Taumaturgo-Albuquerque-1920-a-1922.webp", resumo: "" }, // Pe. Joaquim Taumaturgo Albuquerque
  paroco_03: { original: "Original - Pe.-Joaquim-Martins-Pontes-1922-a-1924.webp", restaurada: "restaurada-Pe.-Joaquim-Martins-Pontes-1922-a-1924.webp", resumo: "" }, // Pe. Joaquim Martins Pontes
  paroco_04: { original: "Original - Pe.-Joao-Rodrigues-1925-a-1927.webp", restaurada: "restaurada-Pe.-Joao-Rodrigues-1925-a-1927.webp", resumo: "" }, // Pe. João Rodrigues
  paroco_05: { original: "Original - Mons.-Urbano-Carvalho-1933-a-1934.webp", restaurada: "restaurada-Mons.-Urbano-Carvalho-1933-a-1934.webp", resumo: "" }, // Mons. Urbano Carvalho
  paroco_06: { original: "Original - Pe.-Luiz-Wanderley-Simoes-1940-a-1946.webp", restaurada: "restaurada-Pe.-Luiz-Wanderley-Simoes-1940-a-1946.webp", resumo: "" }, // Pe. Luiz Wanderley Simões
  paroco_07: { original: "Original - Pe.-Olimpio-Torres-1947-a-1948.webp", restaurada: "restaurada-Pe.-Olimpio-Torres-1947-a-1948.webp", resumo: "" }, // Pe. Olimpio Torres
  paroco_08: { original: "Original - Pe.-Pedro-Gabriel-de-Vasconcelos-1948-a-1954.webp", restaurada: "restaurada-Pe.-Pedro-Gabriel-de-Vasconcelos-1948-a-1954.webp", resumo: "" }, // Pe. Pedro Gabriel de Vasconcelos
  paroco_09: { original: "Original - Pe.-Raimundo-Bergmans-1959-a-1961.webp", restaurada: "restaurada-Pe.-Raimundo-Bergmans-1959-a-1961.webp", resumo: "" }, // Pe. Raimundo Bergmans
  paroco_10: { original: "Original - Pe.-Joao-Pedro-Peters-1961-a-1964.webp", restaurada: "restaurada-Pe.-Joao-Pedro-Peters-1961-a-1964.webp", resumo: "" }, // Pe. João Pedro (Peters)
  paroco_11: { original: "Original - Mons.-Fausto-Serafim-de-Souza-Ferraz-1964-a-1965.webp", restaurada: "restaurada-Mons.-Fausto-Serafim-de-Souza-Ferraz-1964-a-1965.webp", resumo: "" }, // Mons. Fausto Serafim de Souza Ferraz
  paroco_12: { original: "Original - Pe.-Antonio-Inocencio-de-Lima-1968-a-1984.webp", restaurada: "restaurada-Pe.-Antonio-Inocencio-de-Lima-1968-a-1984.webp", resumo: "" }, // Pe. Antônio Inocêncio de Lima
  paroco_13: { original: "Original - Pe.-Airton-Freire-de-Lima-1984.webp", restaurada: "restaurada-Pe.-Airton-Freire-de-Lima-1984.webp", resumo: "" }, // Pe. Airton Freire de Lima
  paroco_14: { original: "Original - Pe.-Adilson-Carlos-Simoes-Silva-1985-a-2007.webp", restaurada: "restaurada-Pe.-Adilson-Carlos-Simoes-Silva-1985-a-2007.webp", resumo: "" }, // Pe. Adilson Carlos Simões Silva
  paroco_15: { original: "Original - Pe.-Geraldo-Wagela-Ord.-28.12.1985.webp", restaurada: "restaurada-Pe.-Geraldo-Wagela-Ord.-28.12.1985.webp", resumo: "" }, // Pe. Geraldo Wagela
  paroco_16: { original: "Original - Mons.-Virgilio-Almeida-Ord.-30.05.1993.webp", restaurada: "restaurada-Mons.-Virgilio-Almeida-Ord.-30.05.1993.webp", resumo: "" }, // Mons. Virgilio Almeida
  paroco_17: { original: "Original - Pe.-Jose-uiz-Ord.-03.02.1996.webp", restaurada: "restaurada-Pe.-Jose-uiz-Ord.-03.02.1996.webp", resumo: "" }, // Pe. José uiz
  paroco_18: { original: "Original - Mons.-Nereudo-Freire-Ord.-13.12.1996.webp", restaurada: "restaurada-Mons.-Nereudo-Freire-Ord.-13.12.1996.webp", resumo: "" }, // Mons. Nereudo Freire
  paroco_19: { original: "Original - Pe.-Jose-Gomes-de-Melo-Ord.-29.10.1999.webp", restaurada: "restaurada-Pe.-Jose-Gomes-de-Melo-Ord.-29.10.1999.webp", resumo: "" }, // Pe. José Gomes de Melo
  paroco_20: { original: "Original - Pe.-Jose-Edson-Rodrigues-Ord.-25.11.2000.webp", restaurada: "restaurada-Pe.-Jose-Edson-Rodrigues-Ord.-25.11.2000.webp", resumo: "" }, // Pe. José Edson Rodrigues
  paroco_21: { original: "Original - Pe.-Allan-Sobral-Ord.-24.05.2006.webp", restaurada: "restaurada-Pe.-Allan-Sobral-Ord.-24.05.2006.webp", resumo: "" }, // Pe. Allan Sobral
  paroco_22: { original: "Original - Pe.-Samuel-Rogerio-Ord.-24.05.2006.webp", restaurada: "restaurada-Pe.-Samuel-Rogerio-Ord.-24.05.2006.webp", resumo: "" }, // Pe. Samuel Rogério
  paroco_23: { original: "Original - Pe.-Jose-Waldeilson-Ord.-02.02.2007.webp", restaurada: "restaurada-Pe.-Jose-Waldeilson-Ord.-02.02.2007.webp", resumo: "" }, // Pe. José Waldeilson
  paroco_24: { original: "Original - Pe.-Joao-Paulo-Ord.-20.04.2007.webp", restaurada: "restaurada-Pe.-Joao-Paulo-Ord.-20.04.2007.webp", resumo: "" }, // Pe. João Paulo
  paroco_25: { original: "Original - Pe.-Fabio-Jose-Ord.-28.07.2007.webp", restaurada: "restaurada-Pe.-Fabio-Jose-Ord.-28.07.2007.webp", resumo: "" }, // Pe. Fábio José
  paroco_26: { original: "Original - Pe.-Fabio-Amaro-Ord.-04.11.2007.webp", restaurada: "restaurada-Pe.-Fabio-Amaro-Ord.-04.11.2007.webp", resumo: "" }, // Pe. Fábio Amaro
};
const PASTA_PAROCOS = 'assets/fotos/parocos/';

function verificarImagem(nome) {
  return new Promise((resolve) => {
    if (!nome) { resolve(null); return; }
    const img = new Image();
    img.onload = () => resolve(PASTA_PAROCOS + nome);
    img.onerror = () => resolve(null);
    img.src = PASTA_PAROCOS + nome;
  });
}

// Retratos da listagem; mesmo sem foto cada item continua clicável.
document.querySelectorAll('[data-retrato]').forEach((elemento) => {
  const id = elemento.dataset.retrato;
  const dados = DADOS_PAROCOS_ANTIGOS[id];
  if (!dados) return;
  elemento.setAttribute('role', 'button');
  elemento.setAttribute('tabindex', '0');
  elemento.setAttribute('title', 'Abrir ficha do sacerdote');
  // A listagem prioriza a versão restaurada; caso falte, usa a original.
  verificarImagem(dados.restaurada).then((restaurada) =>
    restaurada || verificarImagem(dados.original)
  ).then((caminho) => {
    if (!caminho) return;
    const imagem = document.createElement('img');
    imagem.src = caminho;
    imagem.alt = 'Retrato do sacerdote — clique para ver original e restaurada';
    imagem.loading = 'lazy';
    elemento.replaceChildren(imagem);
  });
});

const dialogoSacerdote = document.getElementById('ficha-sacerdote');
const fotoComparacao = document.getElementById('ficha-comparacao');
const fotoUnica = document.getElementById('ficha-foto-unica');
const semFoto = document.getElementById('ficha-sem-foto');
const controleFoto = document.getElementById('ficha-deslizar');
const imagemRestaurada = document.getElementById('ficha-restaurada');
const linhaDivisoria = document.getElementById('ficha-linha');
const dicaComparacao = document.getElementById('ficha-dica');
const legendaOriginal = fotoComparacao.querySelector('.ficha-legenda-esq');
const legendaRestaurada = fotoComparacao.querySelector('.ficha-legenda-dir');
let pedidoAtual = 0;

function ajustarComparacao(valor) {
  const v = Math.max(0, Math.min(100, Number(valor)));
  // Foto original à esquerda; restaurada aparece à direita.
  imagemRestaurada.style.clipPath = `inset(0 0 0 ${v}%)`;
  linhaDivisoria.style.left = `${v}%`;
  controleFoto.value = String(v);
  // Cada legenda pertence à sua imagem, não fica fixa sobre a outra foto.
  // Quando a respectiva área ficar muito estreita, sua legenda desaparece.
  legendaOriginal.hidden = v < 30;
  legendaRestaurada.hidden = v > 62;
}
controleFoto.addEventListener('input', () => ajustarComparacao(controleFoto.value));

async function abrirFicha(id, linha) {
  const dados = DADOS_PAROCOS_ANTIGOS[id];
  if (!dados || !linha) return;
  const colunas = linha.querySelectorAll('td');
  if (colunas.length < 5) return;
  const nome = colunas[2].textContent.trim();
  const periodo = colunas[3].textContent.trim();
  const tipo = colunas[4].textContent.trim();
  configurarLegendasComparacao('Original', 'Restaurada por IA');
  document.getElementById('ficha-nome').textContent = nome;
  document.getElementById('ficha-periodo').textContent = tipo === 'Ordenação' ? 'Ordenação: ' + periodo.replace(/^Ord\.\s*/, '') : 'Registro histórico: ' + periodo;
  document.getElementById('ficha-tipo').textContent = tipo === 'Ordenação' ? 'Período de atuação nesta paróquia ainda não informado.' : 'Período ou referência de atuação informado no acervo.';
  document.getElementById('ficha-resumo').textContent = dados.resumo.trim() || 'Biografia em preparação. Informações históricas adicionais poderão ser incluídas após pesquisa no acervo paroquial.';
  fotoComparacao.hidden = true;
  fotoUnica.hidden = true;
  semFoto.hidden = false;
  dicaComparacao.hidden = true;
  const pedido = ++pedidoAtual;
  if (!dialogoSacerdote.open) dialogoSacerdote.showModal();
  const [original, restaurada] = await Promise.all([verificarImagem(dados.original), verificarImagem(dados.restaurada)]);
  if (pedido !== pedidoAtual || !dialogoSacerdote.open) return;
  if (original && restaurada) {
    document.getElementById('ficha-original').src = original;
    document.getElementById('ficha-original').alt = 'Fotografia original do sacerdote';
    imagemRestaurada.src = restaurada;
    imagemRestaurada.alt = 'Fotografia restaurada por IA';
    ajustarComparacao(50);
    fotoComparacao.hidden = false;
    semFoto.hidden = true;
    dicaComparacao.hidden = false;
  } else if (original || restaurada) {
    document.getElementById('ficha-foto-disponivel').src = original || restaurada;
    document.getElementById('ficha-foto-etiqueta').textContent = original ? 'Fotografia original' : 'Imagem restaurada por IA';
    fotoUnica.hidden = false;
    semFoto.hidden = true;
  }
}

// A mesma janela é reutilizada para o pároco atual, sem mexer em sua foto no cartão.
function configurarLegendasComparacao(esquerda, direita) {
  legendaOriginal.textContent = esquerda;
  legendaRestaurada.textContent = direita;
  controleFoto.setAttribute('aria-label', `Compare ${esquerda} e ${direita}`);
}

const fotoPadreAtual = document.getElementById('abrir-foto-paroco-atual');
const FOTO_ADEILDO_ORIGINAL = 'Original - Pe.-Adeildo-Sebastiao-Ferreira-2007-ate-a-atualidade.webp';
const FOTO_ADEILDO_ATUAL = 'assets/fotos/FotoPadreAdeildoSebastiaoFerreira.jpeg';
const FOTO_ADEILDO_RESTAURADA_LISTA = 'assets/fotos/parocos/Adeildo-Restaurada-Lista.png';

async function abrirFotoParocoAtual() {
  configurarLegendasComparacao('Original', 'Foto atual');
  document.getElementById('ficha-nome').textContent = 'Pe. Adeildo Sebastião Ferreira';
  document.getElementById('ficha-periodo').textContent = 'Pároco da Paróquia Nossa Senhora do Livramento';
  document.getElementById('ficha-tipo').textContent = 'Comparação da fotografia original do acervo com a fotografia atual do site.';
  document.getElementById('ficha-resumo').textContent = 'Responsável pela condução espiritual da comunidade, celebrações e atividades pastorais da paróquia.';
  fotoComparacao.hidden = true;
  fotoUnica.hidden = true;
  semFoto.hidden = false;
  dicaComparacao.hidden = true;
  const pedido = ++pedidoAtual;
  if (!dialogoSacerdote.open) dialogoSacerdote.showModal();
  const [original, fotoAtual] = await Promise.all([
    verificarImagem(FOTO_ADEILDO_ORIGINAL),
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(FOTO_ADEILDO_ATUAL);
      img.onerror = () => resolve(null);
      img.src = FOTO_ADEILDO_ATUAL;
    })
  ]);
  if (pedido !== pedidoAtual || !dialogoSacerdote.open) return;
  if (original && fotoAtual) {
    document.getElementById('ficha-original').src = original;
    document.getElementById('ficha-original').alt = 'Fotografia original de Pe. Adeildo Sebastião Ferreira';
    imagemRestaurada.src = fotoAtual;
    imagemRestaurada.alt = 'Fotografia atual de Pe. Adeildo Sebastião Ferreira, usada no site';
    ajustarComparacao(50);
    fotoComparacao.hidden = false;
    semFoto.hidden = true;
    dicaComparacao.hidden = false;
  } else if (original || fotoAtual) {
    document.getElementById('ficha-foto-disponivel').src = original || fotoAtual;
    document.getElementById('ficha-foto-etiqueta').textContent = original ? 'Original' : 'Foto atual';
    fotoUnica.hidden = false;
    semFoto.hidden = true;
  }
}
async function abrirFotoParocoAtualNaLista() {
  configurarLegendasComparacao('Original', 'Restaurada por IA');
  document.getElementById('ficha-nome').textContent = 'Pe. Adeildo Sebastião Ferreira';
  document.getElementById('ficha-periodo').textContent = 'Registro histórico: 2007 até a atualidade';
  document.getElementById('ficha-tipo').textContent = 'Comparação da fotografia original do acervo com a versão restaurada por IA.';
  document.getElementById('ficha-resumo').textContent = 'Pároco da Paróquia Nossa Senhora do Livramento.';
  fotoComparacao.hidden = true;
  fotoUnica.hidden = true;
  semFoto.hidden = false;
  dicaComparacao.hidden = true;
  const pedido = ++pedidoAtual;
  if (!dialogoSacerdote.open) dialogoSacerdote.showModal();
  const [original, restaurada] = await Promise.all([
    verificarImagem(FOTO_ADEILDO_ORIGINAL),
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(FOTO_ADEILDO_RESTAURADA_LISTA);
      img.onerror = () => resolve(null);
      img.src = FOTO_ADEILDO_RESTAURADA_LISTA;
    })
  ]);
  if (pedido !== pedidoAtual || !dialogoSacerdote.open) return;
  if (original && restaurada) {
    document.getElementById('ficha-original').src = original;
    document.getElementById('ficha-original').alt = 'Fotografia original de Pe. Adeildo Sebastião Ferreira';
    imagemRestaurada.src = restaurada;
    imagemRestaurada.alt = 'Fotografia restaurada por IA de Pe. Adeildo Sebastião Ferreira';
    ajustarComparacao(50);
    fotoComparacao.hidden = false;
    semFoto.hidden = true;
    dicaComparacao.hidden = false;
  } else if (original || restaurada) {
    document.getElementById('ficha-foto-disponivel').src = original || restaurada;
    document.getElementById('ficha-foto-etiqueta').textContent = original ? 'Original' : 'Restaurada por IA';
    fotoUnica.hidden = false;
    semFoto.hidden = true;
  }
}

const fotoAtualNaLista = document.getElementById('abrir-foto-paroco-atual-lista');
if (fotoAtualNaLista) {
  fotoAtualNaLista.addEventListener('click', abrirFotoParocoAtualNaLista);
}
fotoPadreAtual.addEventListener('click', abrirFotoParocoAtual);
fotoPadreAtual.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    abrirFotoParocoAtual();
  }
});

if (fotoAtualNaLista) {
  fotoAtualNaLista.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      abrirFotoParocoAtualNaLista();
    }
  });
}

document.querySelectorAll('.cronologia-tabela tbody tr').forEach((linha) => {
  const retrato = linha.querySelector('[data-retrato]');
  if (!retrato) return; // Nunca mexer na linha/foto do pároco atual.
  const id = retrato.dataset.retrato;
  const nomeCelula = linha.cells[2];
  const nome = nomeCelula.textContent.trim();
  const botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'cronologia-abrir';
  botao.textContent = nome;
  botao.title = 'Ver ficha de ' + nome;
  nomeCelula.replaceChildren(botao);
  botao.addEventListener('click', () => abrirFicha(id, linha));
  retrato.addEventListener('click', () => abrirFicha(id, linha));
  retrato.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirFicha(id, linha); }
  });
});
document.getElementById('ficha-fechar').addEventListener('click', () => dialogoSacerdote.close());
dialogoSacerdote.addEventListener('click', (e) => { if (e.target === dialogoSacerdote) dialogoSacerdote.close(); });
dialogoSacerdote.addEventListener('close', () => { ++pedidoAtual; });
