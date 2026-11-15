/**
 * FICHAS DOS SACERDOTES ANTIGOS — EDITE AQUI.
 * Coloque as imagens em assets/fotos/parocos/ e preencha apenas seus nomes abaixo.
 * original: fotografia histórica verdadeira, sem alterações.
 * restaurada: versão tratada com IA da MESMA fotografia.
 * resumo: breve biografia pesquisada e conferida (não invente fatos).
 * As informações e a foto do pároco atual são independentes deste arquivo.
 */
const DADOS_PAROCOS_ANTIGOS = {
  paroco_01: { original: "", restaurada: "", resumo: "" }, // Mons. José Kherle
  paroco_02: { original: "", restaurada: "", resumo: "" }, // Pe. Joaquim Taumaturgo Albuquerque
  paroco_03: { original: "", restaurada: "", resumo: "" }, // Pe. Joaquim Martins Pontes
  paroco_04: { original: "", restaurada: "", resumo: "" }, // Pe. João Rodrigues
  paroco_05: { original: "", restaurada: "", resumo: "" }, // Mons. Urbano Carvalho
  paroco_06: { original: "", restaurada: "", resumo: "" }, // Pe. Luiz Wanderley Simões
  paroco_07: { original: "", restaurada: "", resumo: "" }, // Pe. Olimpio Torres
  paroco_08: { original: "", restaurada: "", resumo: "" }, // Pe. Pedro Gabriel de Vasconcelos
  paroco_09: { original: "", restaurada: "", resumo: "" }, // Pe. Raimundo Bergmans
  paroco_10: { original: "", restaurada: "", resumo: "" }, // Pe. João Pedro (Peters)
  paroco_11: { original: "", restaurada: "", resumo: "" }, // Mons. Fausto Serafim de Souza Ferraz
  paroco_12: { original: "", restaurada: "", resumo: "" }, // Pe. Antônio Inocêncio de Lima
  paroco_13: { original: "", restaurada: "", resumo: "" }, // Pe. Airton Freire de Lima
  paroco_14: { original: "", restaurada: "", resumo: "" }, // Pe. Adilson Carlos Simões Silva
  paroco_15: { original: "", restaurada: "", resumo: "" }, // Pe. Geraldo Wagela
  paroco_16: { original: "", restaurada: "", resumo: "" }, // Mons. Virgilio Almeida
  paroco_17: { original: "", restaurada: "", resumo: "" }, // Pe. José uiz
  paroco_18: { original: "", restaurada: "", resumo: "" }, // Mons. Nereudo Freire
  paroco_19: { original: "", restaurada: "", resumo: "" }, // Pe. José Gomes de Melo
  paroco_20: { original: "", restaurada: "", resumo: "" }, // Pe. José Edson Rodrigues
  paroco_21: { original: "", restaurada: "", resumo: "" }, // Pe. Allan Sobral
  paroco_22: { original: "", restaurada: "", resumo: "" }, // Pe. Samuel Rogério
  paroco_23: { original: "", restaurada: "", resumo: "" }, // Pe. José Waldeilson
  paroco_24: { original: "", restaurada: "", resumo: "" }, // Pe. João Paulo
  paroco_25: { original: "", restaurada: "", resumo: "" }, // Pe. Fábio José
  paroco_26: { original: "", restaurada: "", resumo: "" }, // Pe. Fábio Amaro
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
  verificarImagem(dados.original || dados.restaurada).then((caminho) => {
    if (!caminho) return;
    const imagem = document.createElement('img');
    imagem.src = caminho;
    imagem.alt = 'Abrir ficha do sacerdote';
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
let pedidoAtual = 0;

function ajustarComparacao(valor) {
  const v = Math.max(0, Math.min(100, Number(valor)));
  // Foto original à esquerda; restaurada aparece à direita.
  imagemRestaurada.style.clipPath = `inset(0 0 0 ${v}%)`;
  linhaDivisoria.style.left = `${v}%`;
  controleFoto.value = String(v);
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
    imagemRestaurada.src = restaurada;
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
