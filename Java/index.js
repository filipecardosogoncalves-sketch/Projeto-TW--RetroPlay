let filmesDiv = document.getElementById("movies"); 
let modal = new bootstrap.Modal(document.getElementById("movieModal"));
let modalcont = document.getElementById("modalContent");
let modalTitle = document.getElementById("Title");
let div = document.getElementById("Coment_section");
// let filtroMovies = []

document.getElementById("catalogo").addEventListener("click", () => { showMovies(filmes) });

function showMovies(List) {
  filmesDiv.innerHTML = "";

  List.forEach((movie, index) => {
    console.log(index);
    
    filmesDiv.innerHTML += `
      <img src="${movie.capa}" onclick="openMovieModal(${index})" class="border border-white" style="width:150px; height:220px; object-fit:cover;">
    `;
  });

}

function openMovieModal(index) {
  console.log(index, filmes);  
  let movie = filtroMovies[index]
  modalcont.innerHTML = `
    <h3 class="text-center mb-3 text-warning">${movie.nome}</h3>
    <img src="${movie.destaque}" alt="${movie.nome}" class="img-fluid mb-3 border border-white">
    <h4 class="text-center text-warning">Resumo</h4>
    <button id="alugarBt" onclick="alugar()" value="${index}" >alugar</button>
    <p class="mb-5">${movie.sinopse}</p>
    <p><b>Director:</b> ${movie.diretor}</p>
    <p><b>Year:</b> ${movie.ano}</p>
    <p><b>Category:</b> ${movie.categoria}</p>
    `;
  modal.show();

}

function filterDecade(start, end) {
  filtroMovies = filmes.filter(movie => (movie.ano >= start && movie.ano <= end));
  showMovies(filtroMovies);
}

showMovies(filmes);

function alugar(){
  let index = document.getElementById("alugarBt").value
  let movie = filmes[index];
  modalcont.innerHTML=`
  <h3 class="text-center mb-3 text-warning">${movie.nome}</h3>
  <img src="${movie.capa}" alt="${movie.nome}" class="img-fluid mb-3 border border-white" width="100px">
  <p><b>Alugar</b></p>
  <p><b>2,99€</b></p>
  <p>Após o aluguer, este filme permanecerá disponível na sua conta durante 30 dias. Nesse período poderá ver os filmes as vezes que desejar.</p>
  <button data-bs-toggle="modal" oncl>Confirmar compra</button>
  <button onclick='openMovieModal(${index})'>voltar</button>
  `;
}

function add_coment() {
  let comentario = document.getElementById("comentário").value;

  div.innerHTML+=`
    <div class="">
      <p>${comentario}</p>
    </div>
  `;
}