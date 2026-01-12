let filmesDiv = document.getElementById("movies"); 
let modal = new bootstrap.Modal(document.getElementById("movieModal"));
let modalcont = document.getElementById("modalContent");
let modalTitle = document.getElementById("Title");

document.getElementById("catalogo").addEventListener("click", () => { 
  showMovies(filmes); 
});

function showMovies(List) {
  filmesDiv.innerHTML = "";

  List.forEach((movie, index) => {
    filmesDiv.innerHTML += `
      <img src="${movie.capa}" onclick="openMovieModal(${index})" class="border border-white" style="width:150px; height:220px; object-fit:cover;">
    `;
  });
}

function openMovieModal(index) {
  let movie = filmes[index];

  modalcont.innerHTML = `
    <h3 class="text-center mb-3 text-warning">${movie.nome}</h3>
    <img src="${movie.destaque}" alt="${movie.nome}" class="img-fluid mb-3 border border-white">
    <h4 class="text-center text-warning">Resumo</h4>
    <p class="mb-5">${movie.sinopse}</p>
    <p><b>Director:</b> ${movie.diretor}</p>
    <p><b>Year:</b> ${movie.ano}</p>
    <p><b>Category:</b> ${movie.categoria}</p>
    <button id="alugarBt" onclick="alugar()" value="${index}" >alugar</button>
    `
  modal.show();
}

function filterDecade(start, end) {
  let filtroMovies = filmes.filter(movie => movie.ano >= start && movie.ano <= end);
  showMovies(filtroMovies);
}

showMovies(filmes);

function alugar(){
  let index = document.getElementById("alugarBt").value
  let movie = filmes[index];
  modalcont.innerHTML=`
  <h3 class="text-center mb-3 text-warning">${movie.nome}</h3>
  <p><b>Valor</b> 5 conto</p>
  <button data-bs-toggle="modal" oncl>Confirmar compra</button>
  <button onclick='openMovieModal(${index})'>voltar</button>
  `
}
