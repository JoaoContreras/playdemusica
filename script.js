const playlist = [
    { titulo: 'Heretic', artista: 'A7X', src: 'musicas/Avenged Sevenfold - Heretic.mp3', img: 'imagens/A7X.jpg' },
    { titulo: 'Can You Feel My Heart', artista: 'Bring Me the Horizon', src: 'musicas/Bring Me the Horizon - Can You Feel My Heart.mp3', img: 'imagens/Bring Me Horizon.jpg' },
    { titulo: 'Lost', artista: 'LP', src: 'musicas/Linkin Park - Lost.mp3', img: 'imagens/linkin park.jpg' }
];

const musica = document.querySelector('audio');
const indexMusica = 0;
const DuracaoMusica = document.querySelector('.fim');

const nomedamusica = document.querySelector('.descricao h2');
const imagem = document.querySelector('.img');
const nomedoartista = document.querySelector('.descricao i');

renderizarMusica(indexMusica)
DuracaoMusica.textContent = segundoparaminutos(Math.floor(musica.duration));
// eventos
document.querySelector('.botao-play').addEventListener('click', TocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    // Subtrai 1 do índice atual para ir para a música anterior
    indexMusica --;
    renderizarMusica(indexMusica);
  });
  
  document.querySelector('.proximo').addEventListener('click', () => {
    // Adiciona 1 ao índice atual para ir para a próxima música
    indexMusica ++;
    renderizarMusica(indexMusica);
  });
  
  
// funcoes
function renderizarMusica(index){
    musica.setAttribute('src', playlist[indexMusica].src);
    musica.addEventListener('loadeddata', () => {
        nomedamusica.textContent = playlist[indexMusica].titulo;
        nomedoartista.textContent = playlist[indexMusica].artista;
        imagem.src =  playlist[index].img;
        DuracaoMusica.textContent = segundoparaminutos(Math.floor(musicas.currentTime));
    });
}

function TocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra() {
    const barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    const TempoDecorrido = document.querySelector('.inicio');
    TempoDecorrido.textContent = segundoparaminutos(Math.floor(musica.currentTime));
}

function segundoparaminutos(segundos) {
    const CampoMinutos = Math.floor(segundos / 60);
    let CampoSegundos = segundos % 60;
    if (CampoSegundos < 10) {
        CampoSegundos = '0' + CampoSegundos;
    }
    return CampoMinutos + ':' + CampoSegundos;
}
