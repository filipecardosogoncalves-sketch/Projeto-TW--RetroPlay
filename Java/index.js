let filmesDiv = document.getElementById("movies"); 
let modal = new bootstrap.Modal(document.getElementById("movieModal"));
let modalcont = document.getElementById("modalContent");
let modalTitle = document.getElementById("Title");
let div = document.getElementById("Coment_section");
let isLoggedIn = false;
let loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
                                    

document.getElementById("catalogo").addEventListener("click", () => { showMovies(filmes) });

function showMovies(List) {
  filmesDiv.innerHTML = "";

  List.forEach((movie, index) => {
    filmesDiv.innerHTML += `
      <img src="${movie.capa}" onclick="openMovieModal(${index})" class="border border-white" style="width:150px; height:220px; object-fit:cover;">
    `;
  });
  
}
showMovies(filmes);


function openMovieModal(index) {
  let movie = filtroMovies[index]

  modalcont.innerHTML = `
    <h3 class="text-center mb-3 text-warning">${movie.nome}</h3>
    <img src="${movie.destaque}" alt="${movie.nome}" class="img-fluid mb-3 border border-white">
    <h4 class="text-center text-warning">Resumo</h4>
    <button id="alugarBt" onclick="alugar()" value="${index}" class="btn btn-danger btn-lg rounded-pill shadow mb-4" >Alugar</button>
    <p class="mb-5">${movie.sinopse}</p>
    <p><b>Director:</b> ${movie.diretor}</p>
    <p><b>Year:</b> ${movie.ano}</p>
    <p><b>Category:</b> ${movie.categoria}</p>
    `;
  modal.show();

}


function filterDecade(start = 0, end=1999) {
  filtroMovies = filmes.filter(movie => (movie.ano >= start && movie.ano <= end));
  showMovies(filtroMovies);
}


function alugar(){
  if (!isLoggedIn) { 
    modal.hide();
    loginModal.show(); 
    return; 
  }


  let index = document.getElementById("alugarBt").value
  let movie = filtroMovies[index]
  modalcont.innerHTML=`
  <h3 class="text-center mb-3 text-warning">${movie.nome}</h3>
  <img src="${movie.capa}" alt="${movie.nome}" class="img-fluid mb-3 border border-white" width="100px">
  <p><b>Alugar</b></p>
  <p><b>2,99€</b></p>
  <p>Após o aluguer, este filme permanecerá disponível na sua conta durante 30 dias. Nesse período poderá ver os filmes as vezes que desejar.</p>
  <div class="g-5">
    <button data-bs-toggle="modal" onclick="compra()" class="btn btn-warning btn-lg rounded-pill shadow">Confirmar compra</button>
    <button onclick='openMovieModal(${index})' class="btn btn-warning btn-lg rounded-pill shadow">Voltar</button>
  </div>
  `;
}

function compra() {
  alert("Compra efetuda com sucesso")
}

function add_coment() {
  if (!isLoggedIn) { 
    modal.hide();
    loginModal.show(); 
    return; 
  }
  let user = document.getElementById("username").value;

  let comentario = document.getElementById("comentário").value;
  div.innerHTML+=`
    <div>
      <h5 class="fs-5 mt-3">${user}</h5>
      <p class="m-2">${comentario}</p>
      <hr>
    </div>
  `;
}


function submitLogin() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  // Simples validação (podes trocar por algo mais robusto)
  if (user === "Filipe" && pass === "1234") {
    isLoggedIn = true;
    loginModal.hide();
    modal.show()
    alert("Login efetuado com sucesso!");
  } else {
    alert("Credenciais inválidas.");
  }
}