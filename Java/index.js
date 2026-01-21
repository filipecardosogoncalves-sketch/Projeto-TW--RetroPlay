let filmesDiv = document.getElementById("movies"); 
let modal = new bootstrap.Modal(document.getElementById("movieModal"));
let modalcont = document.getElementById("modalContent");
let modalTitle = document.getElementById("Title");
let isLoggedIn = false;
let loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
let bd 

                                    

document.getElementById("catalogo").addEventListener("click", () => { showMovies(filmes) });

function showMovies(List) {
  filmesDiv.innerHTML = "";

  List.forEach((movie, index) => {
    filmesDiv.innerHTML += `
      <img id='gg' tabindex="0" src="${movie.capa}" onclick="openMovieModal(${index})" class="border border-white" style="width:150px; height:220px; object-fit:cover;">
    `;
  });
 
  bd = List
  
  console.log(bd);
  
}

// showMovies(filmes);
document.addEventListener("DOMContentLoaded", ()=>{
  console.log("estou aqui");
  
  let procura = document.querySelectorAll('#gg')
  for(let proc of procura){
    proc.addEventListener("click",()=>{
      let src = proc.src
      let id = bd.filter(item => item.capa == src)
      let ind = bd.indexOf(id[0])
      openMovieModal(ind)
      console.log(ind)
      
    })
    proc.addEventListener('keypress', function (e){
      if (e.key == 'Enter'){
      let src = proc.src
      let id = bd.filter(item => item.capa == src)
      let ind = bd.indexOf(id[0])
      openMovieModal(ind)
      console.log(ind)
      
    }})
  }
})





function openMovieModal(index) {
  let movie = bd[index]

  modalcont.innerHTML = `
    <h3 class="text-center mb-3 text-warning">${movie.nome}</h3>
    <img src="${movie.destaque}" alt="${movie.nome}" class="img-fluid mb-3 border border-white">
    <h4 class="text-center text-warning">Resumo</h4>
    <button id="alugarBt" onclick="alugar()" value="${index}" class="btn btn-danger btn-lg rounded-pill shadow mb-4" >Alugar</button>
    <p class="mb-5">${movie.sinopse}</p>
    <p><b>Director:</b> ${movie.diretor}</p>
    <p><b>Year:</b> ${movie.ano}</p>
    <p><b>Category:</b> ${movie.categoria}</p>
    <div> 
        <p class="fs-4 mb-0">Comentários</p> 
         </div>

         <div class="mb-3">
          <label for="comentário" class="form-label"></label>
          <textarea class="form-control" id="comentário" rows="4" placeholder="Escreve o seu comentário" maxlength="300"></textarea>
         </div>

        <button type="submit" class="btn btn-light" onclick="add_coment()">Adicionar</button>

        <div id="Coment_section"></div>
    </div>
    `;
  modal.show();

}


function filterDecade(start = 0, end=1999) {
  filtroMovies = filmes.filter(movie => (movie.ano >= start && movie.ano <= end));
  bd = filtroMovies
  showMovies(bd);
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

  let div = document.getElementById("Coment_section");

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
    alert("Login efetuado com sucesso!");
    navBar.innerHTML+=`<button onclick="AdicionarFilme()">adm</button>`
    logan.innerHTML=`<div class='text-primary'>Modo de adiministrador: Filipe</div>`
    textoDeEntrada.innerHTML=`<div class="text-primary">Filipe Adm</div>`
     BTperfil.innerHTML=``
    
  } 
  else if (user === "Gian" && pass === "1234") {
    isLoggedIn = true;
    loginModal.hide();
    alert("Login efetuado com sucesso!");
    logan.innerHTML=`<div class='text-light'>Bem vindo Gian</div>`
     BTperfil.innerHTML=``
     textoDeEntrada.innerHTML=`<div class="text-light">Gian</div>`
    
  } 
  
  else {
    alert("Username ou password inválidas.");
  }
}



function AdicionarFilme(){
   modal.show()
   modalcont.innerHTML =`
    <form>
      <h3 class="text-center mb-4">Adicionar filme novo</h3>

      <div class="mb-3">
        <label for="nome" class="form-label">Nome do filme</label>
        <input type="text" class="form-control" id="nome" placeholder="Pulp Fiction">
      </div>

      <div class="mb-3">
        <label for="ano" class="form-label">Ano de lançamento</label>
        <input type="number" class="form-control" id="ano" placeholder="1994">
      </div>

      <div class="mb-3">
        <label for="diretor" class="form-label">Diretor</label>
        <input type="text" class="form-control" id="diretor" placeholder="Quentin Tarantino">
      </div>

      <div class="mb-3">
        <label for="categoria" class="form-label">Categoria</label>
        <input type="text" class="form-control" id="categoria" placeholder="Crime / Drama / Cult">
      </div>

      <div class="mb-3">
        <label for="sinopse" class="form-label">Sinopse</label>
        <textarea class="form-control" id="sinopse" placeholder="Histórias entrelaçadas de crime, moralidade e redenção em Los Angeles. A narrativa não linear acompanha assassinos profissionais, um pugilista em fuga, um casal de assaltantes e personagens excêntricos que se cruzam de forma inesperada. Com diálogos afiados, humor negro e momentos icónicos, o filme explora escolhas, consequências e o absurdo da vida criminosa."></textarea>
      </div>

      <div class="mb-3">
        <label for="capa" class="form-label">Link para a imagem da capa</label>
        <input type="url" class="form-control" id="capa" placeholder="">
      </div>

       <div class="mb-3">
        <label for="destaque" class="form-label">Link para a imagem da destaque</label>
        <input type="url" class="form-control" id="destaque" placeholder="">
      </div>

      <button id='enviar' type='submit' class="btn btn-primary w-100 mt-5">Adicionar filme</button>
    </form>`
  
document.getElementById('enviar').addEventListener("click",add)
}
function add(e){
   e.preventDefault()
   modal.hide()
   let nome = document.getElementById("nome").value
   let ano = document.getElementById("ano").value
   let diretor = document.getElementById("diretor").value
   let categoria = document.getElementById("categoria").value
   let sinopse = document.getElementById("sinopse").value
   let capa = document.getElementById("capa").value
   let destaque = document.getElementById("destaque").value
   filmes.push({
    nome:nome,
    ano:ano,
    diretor:diretor,
    categoria:categoria,
    sinopse:sinopse,
    capa:capa,
    destaque:destaque})
   showMovies(filmes)
}
