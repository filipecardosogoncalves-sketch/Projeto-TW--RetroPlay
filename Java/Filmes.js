let filmes = [
  {
    nome: "Pulp Fiction",
    ano: 1994,
    diretor: "Quentin Tarantino",
    categoria: "Crime / Drama / Cult",
    sinopse: "Histórias entrelaçadas de crime, moralidade e redenção em Los Angeles. A narrativa não linear acompanha assassinos profissionais, um pugilista em fuga, um casal de assaltantes e personagens excêntricos que se cruzam de forma inesperada. Com diálogos afiados, humor negro e momentos icónicos, o filme explora escolhas, consequências e o absurdo da vida criminosa.",
    capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEtuBLjVeHf1xe-4BRLtXqGu36-1LBulPCQ&s",
    destaque: "https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_.jpg"
  },
  {
    nome: "Schindler's List",
    ano: 1993,
    diretor: "Steven Spielberg",
    categoria: "Drama / Histórico",
    sinopse: "A história real de Oskar Schindler, um empresário alemão que, ao testemunhar a brutalidade do regime nazi, decide salvar centenas de judeus empregando-os na sua fábrica. O filme retrata a transformação moral de Schindler, o horror do Holocausto e a força da humanidade em tempos de escuridão absoluta. Uma obra poderosa, emocional e profundamente marcante.",
    capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3aeH4quODDvLaY8PhMPgZWIfuxCgjrIaRg&s",
    destaque: "https://m.media-amazon.com/images/M/MV5BOTIxMTUzMmUtODU2MS00MDhjLTlmMGQtMzNhZTFhOTI5ZjE5XkEyXkFqcGdeQXRoaXJkLXBhcnR5LXZpZGVvLXVwZGF0ZXI@._V1_QL75_UX500_CR0,47,500,281_.jpg"
  },
  {
    nome: "The Shawshank Redemption",
    ano: 1994,
    diretor: "Frank Darabont",
    categoria: "Drama / Prisão / Esperança",
    sinopse: "Andy Dufresne, condenado injustamente por homicídio, encontra na prisão de Shawshank um ambiente brutal mas também a oportunidade de reconstruir a própria vida. Através da amizade com Red e da sua inteligência calma, Andy transforma o sistema à sua volta e mantém viva a esperança num lugar onde ela parece impossível. Uma história sobre resiliência, liberdade e redenção.",
    capa: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
    destaque: "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_.jpg"
  },
  {
    nome: "Goodfellas",
    ano: 1990,
    diretor: "Martin Scorsese",
    categoria: "Crime / Máfia / Biográfico",
    sinopse: "A vida de Henry Hill, desde a adolescência fascinada pela máfia até à queda inevitável num mundo de violência, drogas e traições. Scorsese apresenta o lado sedutor e destrutivo do crime organizado, com ritmo frenético, personagens memoráveis e uma narrativa que expõe o glamour e o preço da vida mafiosa.",
    capa: "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_.jpg",
    destaque: "https://m.media-amazon.com/images/M/MV5BMjI0ODA3NDQ4NV5BMl5BanBnXkFtZTcwMDMwMjMwNA@@._V1_.jpg"
  },
  {
    nome: "The Silence of the Lambs",
    ano: 1991,
    diretor: "Jonathan Demme",
    categoria: "Suspense / Terror Psicológico",
    sinopse: "Clarice Starling, uma jovem agente do FBI, procura capturar um assassino em série com a ajuda de Hannibal Lecter, um brilhante psiquiatra e também um perigoso canibal. O filme mergulha num jogo psicológico intenso, onde manipulação, inteligência e medo se entrelaçam. Uma obra-prima do suspense moderno.",
    capa: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13013_p_v10_ao.jpg",
    destaque: "https://m.media-amazon.com/images/M/MV5BMTczMDE3NzU2M15BMl5BanBnXkFtZTcwNjkwNjM5NA@@._V1_.jpg"
  },
  {
    nome: "Fight Club",
    ano: 1999,
    diretor: "David Fincher",
    categoria: "Drama / Psicológico / Rebeldia",
    sinopse: "Um homem preso numa vida monótona encontra libertação através de Tyler Durden, um carismático anarquista que o introduz ao Clube de Combate. O que começa como catarse física transforma-se num movimento radical que desafia o consumismo, a identidade e a própria sanidade. Um filme provocador e cheio de camadas.",
    capa: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
    destaque: "https://i.guim.co.uk/img/media/18c6bf3702c24b73dc1877e2064a1f20336f1239/0_0_2271_1362/master/2271.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=f52f2f4d7b25b384bd3a55fe9c4e6023"
  },
  {
    nome: "The Matrix",
    ano: 1999,
    diretor: "Lana e Lilly Wachowski",
    categoria: "Ficção Científica / Cyberpunk",
    sinopse: "Neo, um hacker inquieto, descobre que o mundo em que vive é uma simulação criada por máquinas que escravizam a humanidade. Guiado por Morpheus e Trinity, ele embarca numa jornada de autodescoberta, luta e libertação. O filme combina filosofia, ação e estética revolucionária para questionar a própria realidade.",
    capa: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
    destaque: "https://ogimg.infoglobo.com.br/in/23680201-ba3-83f/FT1086A/Carrie-Anne-Moss-Keanu-Reeves-Lawrence-Fishburne.jpg"
  },
  {
    nome: "De Volta Para o Futuro",
    ano: 1985,
    diretor: "Robert Zemeckis",
    categoria: "Ficção Científica / Aventura / Comédia",
    sinopse: "Marty McFly viaja acidentalmente ao passado num DeLorean modificado pelo excêntrico Doc Brown. Ao interferir com os eventos que levaram os seus pais a apaixonarem-se, Marty precisa corrigir a linha temporal para garantir a própria existência. Uma aventura divertida, criativa e cheia de momentos icónicos.",
    capa: "https://m.media-amazon.com/images/M/MV5BZDcyNmYxN2QtMmViZS00NTQ4LTlhZTAtZjc4MzY2Yjg0M2ZmXkEyXkFqcGc@._V1_.jpg",
    destaque: "https://rollingstone.com.br/wp-content/uploads/de-volta-para-o-futuro-capa.jpg"
  },
  {
    nome: "E.T. O Extraterrestre",
    ano: 1982,
    diretor: "Steven Spielberg",
    categoria: "Ficção Científica / Família / Drama",
    sinopse: "Elliott, um rapaz solitário, encontra um extraterrestre perdido na Terra e cria com ele uma ligação profunda e emocional. Enquanto tenta protegê-lo das autoridades, Elliott descobre amizade, empatia e coragem. Um clássico intemporal sobre inocência e ligação entre mundos.",
    capa: "https://m.media-amazon.com/images/M/MV5BMDkwOGRhYTYtYzFlMS00ZDQ2LWEyOWYtMDQ3M2YxMWU3MmI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    destaque: "https://cdn.sortiraparis.com/images/80/98390/827543-e-t-l-extraterrestre-pour-les-40-ans-du-film-culte-une-projection-exceptionnelle-et-un-livre.jpg"
  },
  {
    nome: "Return of the Jedi",
    ano: 1983,
    diretor: "Richard Marquand",
    categoria: "Ficção Científica / Aventura / Fantasia",
    sinopse: "O capítulo final da trilogia original acompanha Luke Skywalker na sua tentativa de salvar Darth Vader do lado negro enquanto a Aliança Rebelde prepara o ataque decisivo contra o Império. Com batalhas épicas, emoção e redenção, encerra uma das sagas mais influentes da história do cinema.",
    capa: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/250px-ReturnOfTheJediPoster1983.jpg",
    destaque: "https://i0.wp.com/midwestfilmjournal.com/wp-content/uploads/2019/12/Jedi-1.jpg?fit=1920%2C1080&ssl=1"
  },
    {
    nome: "The Shining",
    ano: 1980,
    diretor: "Stanley Kubrick",
    categoria: "Terror Psicológico / Suspense",
    sinopse: "Jack Torrance aceita o trabalho de zelador de inverno no isolado Overlook Hotel, esperando encontrar inspiração para escrever. No entanto, a solidão, o passado sombrio do hotel e forças sobrenaturais começam a corroer a sua sanidade. Enquanto Jack mergulha na loucura, a sua família luta para sobreviver ao terror crescente. Um clássico que combina atmosfera sufocante, simbolismo e horror psicológico.",
    capa: "https://m.media-amazon.com/images/M/MV5BNmM5ZThhY2ItOGRjOS00NzZiLWEwYTItNDgyMjFkOTgxMmRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    destaque: "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSMnRzy4C7WOsjEdtiIKbw4-1fTkxjY-_1vAwTrHK7b2fYxxEwkoerBXipkBnsKB5CNAEvrgP10Q6ESbNGZjclPpew66c8bFXtu-.jpg?r=83b"
  },
  {
    nome: "Die Hard",
    ano: 1988,
    diretor: "John McTiernan",
    categoria: "Ação / Suspense",
    sinopse: "John McClane, um polícia de Nova Iorque, visita Los Angeles para reconciliar-se com a esposa, mas acaba preso num arranha-céu tomado por terroristas liderados pelo astuto Hans Gruber. Sem apoio e armado apenas com coragem e improviso, McClane transforma-se na única esperança dos reféns. Um marco do cinema de ação, cheio de tensão, humor e cenas memoráveis.",
    capa: "https://media.posterlounge.com/img/products/710000/705263/705263_poster.jpg",
    destaque: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/d39b1f8f-863d-4b86-aacc-0cd06446cb0e/compose?aspectRatio=1.78&format=webp&width=1200"
  },
  {
    nome: "Sociedade dos Poetas Mortos",
    ano: 1989,
    diretor: "Peter Weir",
    categoria: "Drama / Educação / Inspiração",
    sinopse: "Numa escola tradicional e rígida, o professor John Keating inspira os seus alunos a desafiar convenções, pensar de forma independente e abraçar a vida com paixão. Através da poesia e da expressão pessoal, os jovens descobrem coragem, identidade e propósito. Um drama emocional sobre liberdade, criatividade e o impacto transformador de um professor.",
    capa: "https://m.media-amazon.com/images/M/MV5BMDYwNGVlY2ItMWYxMS00YjZiLWE5MTAtYWM5NWQ2ZWJjY2Q3XkEyXkFqcGc@._V1_.jpg",
    destaque: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSbS316Fi7NWKxjHAIyNylcQnc4Zx2Vef-64Q3qaZ6EeW3Zmg6oke77ti34XbCzJerK6vRv6NP3_1cXecGhPiuJ1S6iw66heSrmz.jpg?r=35f"
  },
  {
    nome: "The Thing",
    ano: 1982,
    diretor: "John Carpenter",
    categoria: "Terror / Ficção Científica / Suspense",
    sinopse: "Numa estação de investigação na Antártida, uma equipa de cientistas descobre uma criatura alienígena capaz de imitar perfeitamente qualquer ser vivo. À medida que a paranoia se instala, ninguém sabe quem ainda é humano. O ambiente claustrofóbico, os efeitos práticos inovadores e a tensão constante tornam este filme um dos maiores clássicos do terror.",
    capa: "https://m.media-amazon.com/images/M/MV5BYTA3NDU5MWEtNTk4Yy00ZDNkLThmZTQtMjU3ZGVhYzAyMzU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    destaque: "https://i.ytimg.com/vi/Mm-Vu6YW3D8/maxresdefault.jpg"
  },
  {
    nome: "The Godfather",
    ano: 1972,
    diretor: "Francis Ford Coppola",
    categoria: "Crime / Drama / Máfia",
    sinopse: "A história da poderosa família Corleone, liderada por Don Vito, cuja influência domina o submundo do crime organizado. Quando o patriarca envelhece, o seu filho Michael, inicialmente relutante, é puxado para o centro da violência e da política mafiosa. O filme explora lealdade, poder, tradição e a transformação moral de Michael num dos arcos mais icónicos do cinema.",
    capa: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    destaque: "https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg"
  },
  {
    nome: "Taxi Driver",
    ano: 1976,
    diretor: "Martin Scorsese",
    categoria: "Drama / Psicológico / Urbano",
    sinopse: "Travis Bickle, um veterano solitário e mentalmente instável, trabalha como taxista nas ruas decadentes de Nova Iorque. Incapaz de se conectar com o mundo à sua volta, ele desenvolve uma obsessão por 'limpar' a cidade, mergulhando num espiral de violência e alienação. Um retrato intenso da solidão e da deterioração psicológica.",
    capa: "https://upload.wikimedia.org/wikipedia/pt/3/33/Taxi_Driver_%281976_film_poster%29.jpg",
    destaque: "https://media.newyorker.com/photos/5b203f425ee2c7040773fedc/master/pass/760209_ra523.jpg"
  },
  {
    nome: "Mean Streets",
    ano: 1973,
    diretor: "Martin Scorsese",
    categoria: "Crime / Drama / Juventude",
    sinopse: "Nas ruas de Little Italy, jovens italo-americanos tentam sobreviver entre pequenos crimes, dívidas e sonhos maiores do que a realidade permite. Charlie, dividido entre fé, ambição e lealdade ao impulsivo Johnny Boy, enfrenta dilemas morais que o aproximam da violência. Um retrato cru e energético da juventude marginalizada.",
    capa: "https://m.media-amazon.com/images/M/MV5BMWRlNDdiYWUtYjE1Zi00OWRhLWJiYTYtZWQ0NWFkYzc0NWMxXkEyXkFqcGc@._V1_.jpg",
    destaque: "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2019/07/meanstreets_1280.jpg"
  },
  {
    nome: "The Godfather Part II",
    ano: 1974,
    diretor: "Francis Ford Coppola",
    categoria: "Crime / Drama / Continuação",
    sinopse: "A narrativa alterna entre a ascensão de Michael Corleone como novo líder da família e a juventude de Vito Corleone, mostrando como ambos moldaram o império mafioso. O filme aprofunda temas de poder, corrupção, família e sacrifício, revelando a transformação de Michael num líder frio e implacável. Considerado uma das melhores sequelas da história.",
    capa: "https://m.media-amazon.com/images/M/MV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc@._V1_.jpg",
    destaque: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABccNpwznngy08YRwEWr-dqkf_E1DzQD49WWgs_FxS-c75_p-0F9pqWY4xVzXyO8tm2lIfkjDnHCdV8855y2zkH8OD6XtkpeD-69f.jpg?r=830"
  },
  {
    nome: "A Clockwork Orange",
    ano: 1971,
    diretor: "Stanley Kubrick",
    categoria: "Ficção Científica / Distopia / Psicológico",
    sinopse: "Alex DeLarge, líder de um grupo de delinquentes, entrega-se a uma vida de violência e hedonismo até ser capturado e submetido a um controverso tratamento de reabilitação. O filme explora liberdade, moralidade, manipulação psicológica e o conflito entre comportamento imposto e escolha individual. Uma obra provocadora e visualmente marcante.",
    capa: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2023/05/17142436/4sHeTAp65WrSSuc05nRBKddhBxO.jpg",
    destaque: "https://i.ytimg.com/vi/T54uZPI4Z8A/maxresdefault.jpg"
  },
  {
    nome: "Jaws",
    ano: 1975,
    diretor: "Steven Spielberg",
    categoria: "Suspense / Terror / Aventura",
    sinopse: "Uma pequena cidade costeira entra em pânico quando um enorme tubarão branco começa a atacar banhistas. Um chefe de polícia, um biólogo marinho e um caçador de tubarões unem forças para enfrentar a criatura. Com tensão crescente, música icónica e cenas memoráveis, o filme redefiniu o conceito de blockbuster.",
    capa: "https://www.oscars.org/sites/oscars/files/01_jaws_main_0.jpg",
    destaque: "https://i.abcnewsfe.com/a/40180f13-e306-498b-b6d4-988c01d42e80/jaws-movie-scene-01-ht-jt-250606_1749241697072_hpMain.jpg"
  },
    {
    nome: "Apocalypse Now",
    ano: 1979,
    diretor: "Francis Ford Coppola",
    categoria: "Guerra / Drama / Existencial",
    sinopse: "Durante a Guerra do Vietname, o Capitão Willard é enviado numa missão secreta para encontrar e eliminar o Coronel Kurtz, um comandante que enlouqueceu e criou o seu próprio culto no meio da selva. A viagem pelo rio torna-se uma descida simbólica à loucura humana, explorando o horror da guerra, a perda de identidade e a fragilidade da moralidade. Um épico intenso, surreal e profundamente psicológico.",
    capa: "https://m.media-amazon.com/images/I/71i-+NE8ZbL._AC_UF1000,1000_QL80_.jpg",
    destaque: "https://i.guim.co.uk/img/media/96dd91d98195361d6ed9c54b347b4554c52bc490/260_0_2665_1600/master/2665.jpg?width=1200&quality=85&auto=format&fit=max&s=82ae391b1ad456ab066322e3aba340e1"
  },
  {
    nome: "2001: A Space Odyssey",
    ano: 1968,
    diretor: "Stanley Kubrick",
    categoria: "Ficção Científica / Filosófico / Experimental",
    sinopse: "Uma jornada visual e conceptual que acompanha a evolução humana, desde os primórdios até ao futuro da exploração espacial. A descoberta de um misterioso monólito desencadeia uma série de eventos que culminam numa missão a Júpiter, onde a inteligência artificial HAL 9000 desafia os limites da confiança e da consciência. O filme explora temas como existência, tecnologia, transcendência e o desconhecido, com uma abordagem artística e inovadora.",
    capa: "https://upload.wikimedia.org/wikipedia/pt/5/53/Two_thousand_and_one_a_space_odyssey_ver2.jpg",
    destaque: "https://cdn-images.rtp.pt/EPG/imagens/14162_50250_70926.jpg?amp;w=160"
  },
  {
    nome: "Doctor Zhivago",
    ano: 1965,
    diretor: "David Lean",
    categoria: "Romance / Drama / Histórico",
    sinopse: "Durante a turbulenta Revolução Russa, o médico e poeta Yuri Zhivago vê a sua vida transformada ao apaixonar-se por Lara, uma mulher forte e enigmática. O filme acompanha décadas de conflitos, separações e reencontros, explorando o impacto da guerra na vida pessoal e emocional dos protagonistas. Uma obra épica, romântica e visualmente grandiosa.",
    capa: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p378_p_v8_af.jpg",
    destaque: "https://www.thirteen.org/wp-content/uploads/sites/62/2022/11/ViewerGuide_Zhivago.jpgs"
  },
  {
    nome: "The Good, The Bad and The Ugly",
    ano: 1966,
    diretor: "Sergio Leone",
    categoria: "Western / Aventura / Épico",
    sinopse: "Três pistoleiros rivais — o Bom, o Mau e o Vilão — embarcam numa corrida implacável para encontrar um tesouro enterrado durante a Guerra Civil Americana. A jornada é marcada por alianças temporárias, traições e confrontos icónicos. Com música lendária, planos amplos e tensão crescente, é um dos westerns mais influentes de sempre.",
    capa: "https://storage.googleapis.com/pod_public/1300/266321.jpg",
    destaque: "https://m.media-amazon.com/images/M/MV5BMzE4ODY3MjAtZjM0OS00YzIxLWEyZTUtNTk2MTBiMGIwMTRlXkEyXkFqcGc@._V1_.jpg"
  },
  {
    nome: "The Sound of Music",
    ano: 1965,
    diretor: "Robert Wise",
    categoria: "Musical / Família / Histórico",
    sinopse: "Maria, uma jovem noviça cheia de vida, torna-se governanta de sete crianças e transforma a rotina rígida da família através da música, alegria e afeto. Enquanto se aproxima das crianças e do Capitão Von Trapp, a família enfrenta também a ameaça crescente do regime nazi. Um musical intemporal, repleto de emoção, canções marcantes e paisagens deslumbrantes.",
    capa: "https://m.media-amazon.com/images/I/710dUKOJJzL._AC_UF894,1000_QL80_.jpg",
    destaque: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZrShYX5jh4tumLB-Ip3hIlZfJ5MQJoGxEw&s"
  },
  {
    nome: "Lawrence of Arabia",
    ano: 1962,
    diretor: "David Lean",
    categoria: "Épico / Histórico / Aventura",
    sinopse: "A extraordinária jornada de T.E. Lawrence, um oficial britânico que se torna figura central na revolta árabe contra o Império Otomano. O filme explora a complexidade da sua personalidade, o impacto das suas ações e o conflito entre identidade, lealdade e ambição. Com cenários grandiosos e narrativa épica, é um marco do cinema mundial.",
    capa: "https://resizing.flixster.com/eBMrQ-GdDu0AfQXG1kK-Pv-19bc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzkxZWJmOTkxLWYwZDEtNGQ5My05ZGE1LTU4YjcwODBlMmMyYS5qcGc=",
    destaque: "https://cdn.britannica.com/23/194723-050-09BB6992/Peter-OToole-Lawrence-of-Arabia-David-Lean.jpg"
  },
  {
    nome: "Blow-Up",
    ano: 1966,
    diretor: "Michelangelo Antonioni",
    categoria: "Drama / Mistério / Arte",
    sinopse: "Um fotógrafo de moda londrino acredita ter captado acidentalmente provas de um crime ao ampliar uma das suas fotografias. Obcecado pela imagem, ele mergulha num labirinto de perceção, ilusão e ambiguidade. O filme questiona a relação entre realidade e interpretação, tornando-se um ícone do cinema moderno.",
    capa: "https://m.media-amazon.com/images/S/pv-target-images/95bad1410ed0be8fdbeb2e22bbd17beed5ac33dabc851c13e0b9459169a88d12.jpg",
    destaque: "https://upload.wikimedia.org/wikipedia/it/6/60/Blow-Up.jpg"
  },
  {
    nome: "The Birds",
    ano: 1963,
    diretor: "Alfred Hitchcock",
    categoria: "Terror / Suspense / Mistério",
    sinopse: "Numa pequena cidade costeira, bandos de aves começam a atacar pessoas sem qualquer explicação. À medida que os ataques se intensificam, o caos instala-se e os habitantes lutam pela sobrevivência. Hitchcock cria um ambiente de tensão crescente, explorando o medo do desconhecido e a fragilidade humana perante a natureza.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/c/c0/The_Birds_original_poster.jpg",
    destaque: "https://i.ytimg.com/vi/bQQ9KSLYkgQ/maxresdefault.jpg"
  },
  {
    nome: "12 Angry Men",
    ano: 1957,
    diretor: "Sidney Lumet",
    categoria: "Drama / Tribunal / Psicológico",
    sinopse: "Doze jurados reúnem-se para decidir o destino de um jovem acusado de homicídio. O que parece inicialmente um caso simples transforma-se num intenso debate sobre preconceito, justiça e responsabilidade moral. À medida que as tensões aumentam, cada jurado revela as suas convicções e fragilidades. Um filme poderoso, minimalista e profundamente humano.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/960px-12_Angry_Men_%281957_film_poster%29.jpg",
    destaque: "https://m.media-amazon.com/images/M/MV5BNGRlZjVhNWMtOTUxYi00MTYxLWEzOWUtMTM1NDc3ZWRjMDZjXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg"
  },
  {
    nome: "Double Indemnity",
    ano: 1944,
    diretor: "Billy Wilder",
    categoria: "Film Noir / Crime / Suspense",
    sinopse: "Um vendedor de seguros é seduzido por uma mulher fatal para participar num plano de assassinato e fraude. À medida que a tensão aumenta, traições, manipulações e culpa começam a corroer os envolvidos. Um dos pilares do film noir, com atmosfera sombria, diálogos afiados e moralidade ambígua.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Double_Indemnity_%281944_poster%29.jpg/960px-Double_Indemnity_%281944_poster%29.jpg",
    destaque: "https://historicalnovelsociety.org/wp-content/uploads/2013/01/DoubleIndemnity4.jpg"
  },
    {
    nome: "Touch of Evil",
    ano: 1958,
    diretor: "Orson Welles",
    categoria: "Film Noir / Crime / Mistério",
    sinopse: "Após um atentado na fronteira entre os EUA e o México, um agente mexicano envolve-se numa investigação marcada por corrupção, manipulação e jogos de poder. O filme destaca a figura imponente do capitão Hank Quinlan, cuja moralidade ambígua e métodos duvidosos criam um ambiente de tensão constante. Com planos longos e atmosfera densa, é um dos grandes marcos do noir.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/0/09/Touch_of_Evil_%281958_poster%29.jpg",
    destaque: "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2017/04/touch-of-evil_1280x720.jpg"
  },
  {
    nome: "Out of the Past",
    ano: 1947,
    diretor: "Jacques Tourneur",
    categoria: "Film Noir / Romance / Crime",
    sinopse: "Um ex-detetive tenta escapar do seu passado sombrio ao começar uma nova vida numa pequena cidade. No entanto, é puxado de volta ao mundo do crime quando uma antiga paixão fatal reaparece. O filme explora destino, traição e desejo, com diálogos afiados e atmosfera melancólica típica do noir clássico.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Out_of_the_Past_%281947_poster_-_retouched%29.jpg",
    destaque: "https://media.newyorker.com/photos/5cc7335eb36101408cceb62f/master/w_1280%2Cc_limit/GOAT-OutOfThePast-1200.jpg"
  },
  {
    nome: "The Maltese Falcon",
    ano: 1941,
    diretor: "John Huston",
    categoria: "Film Noir / Mistério / Detetive",
    sinopse: "O detetive Sam Spade envolve-se numa teia de mentiras, assassinatos e manipulações enquanto procura uma estatueta lendária cobiçada por criminosos perigosos. Com personagens enigmáticos e reviravoltas constantes, o filme definiu muitos dos elementos que se tornariam marca registada do género noir.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/6/6b/The_Maltese_Falcon_%281941_film_poster%29.jpg",
    destaque: "https://cdn.britannica.com/59/102859-050-599C5142/Humphrey-Bogart-Sam-Spade-Peter-Lorre-film-1941.jpg"
  },
  {
    nome: "Laura",
    ano: 1944,
    diretor: "Otto Preminger",
    categoria: "Film Noir / Mistério / Romance",
    sinopse: "Um detetive investiga o assassinato de uma mulher fascinante e, à medida que descobre mais sobre a sua vida, desenvolve uma obsessão pela imagem dela. O filme mistura romance, mistério e psicologia, criando uma atmosfera elegante e intrigante que marcou o cinema noir.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Laura_%281944_film_poster%29.jpg/960px-Laura_%281944_film_poster%29.jpg",
    destaque: "https://images.mubicdn.net/images/film/3301/cache-51243-1745491095/image-w1280.jpg"
  },
  {
    nome: "Sunset Boulevard",
    ano: 1950,
    diretor: "Billy Wilder",
    categoria: "Drama / Noir / Hollywood",
    sinopse: "Um roteirista em declínio envolve-se com uma antiga estrela do cinema mudo que vive isolada numa mansão decadente, obcecada pela ideia de regressar à fama. A relação entre os dois torna-se tóxica e trágica, revelando o lado sombrio da indústria cinematográfica. Um clássico sobre ambição, ilusão e decadência.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/1/14/Sunset_Boulevard_%281950_poster%29.jpg",
    destaque: "https://hpph.ams3.cdn.digitaloceanspaces.com/1152/conversions/Sunset-Blvd-banner-wide.webp"
  },

  {
    nome: "Casablanca",
    ano: 1942,
    diretor: "Michael Curtiz",
    categoria: "Romance / Drama / Guerra",
    sinopse: "Num café em Marrocos durante a Segunda Guerra Mundial, Rick Blaine reencontra o grande amor da sua vida, agora casada com um líder da resistência. Dividido entre o passado e o dever moral, Rick enfrenta escolhas difíceis num ambiente de intriga, sacrifício e paixão. Um clássico intemporal sobre amor e coragem em tempos de conflito.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg",
    destaque: "https://bravo.abril.com.br/wp-content/uploads/2024/07/casablanca-cena-filme-ranking-bravo-100-filmes-essenciais.webp"
  },
  {
    nome: "Psycho",
    ano: 1960,
    diretor: "Alfred Hitchcock",
    categoria: "Terror Psicológico / Suspense",
    sinopse: "Marion Crane foge com dinheiro roubado e acaba num motel isolado administrado pelo enigmático Norman Bates. O que parece uma simples fuga transforma-se num pesadelo psicológico marcado por segredos, obsessões e uma atmosfera inquietante. Um dos filmes mais influentes do suspense, com reviravoltas icónicas.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg/960px-Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg",
    destaque: "https://images.impresa.pt/sicnot/2025-06-27-pyscho-filme--1-.jpg-6d90f8a4/16x9/mw-1200"
  },
  {
    nome: "Vertigo",
    ano: 1958,
    diretor: "Alfred Hitchcock",
    categoria: "Mistério / Romance / Psicológico",
    sinopse: "Um detetive reformado devido a vertigens é contratado para seguir uma mulher misteriosa com comportamentos estranhos. À medida que se envolve emocionalmente, a linha entre obsessão, amor e ilusão torna-se cada vez mais difusa. Um thriller psicológico complexo e visualmente deslumbrante.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/7/75/Vertigomovie_restoration.jpg",
    destaque: "https://www.arte-factos.net/wp-content/uploads/2019/10/vertigo.jpg"
  },
  {
    nome: "Raging Bull",
    ano: 1980,
    diretor: "Martin Scorsese",
    categoria: "Biográfico / Drama / Desporto",
    sinopse: "A ascensão e queda do pugilista Jake LaMotta, cuja violência no ringue reflete os seus conflitos internos e relacionamentos destrutivos fora dele. Filmado em preto e branco, o filme explora culpa, autossabotagem e redenção através de uma performance intensa de Robert De Niro.",
    capa: "https://upload.wikimedia.org/wikipedia/en/5/5f/Raging_Bull_poster.jpg",
    destaque: "https://media.newyorker.com/photos/5ec5a2024889dfa6eda9d874/16:9/w_2448,h_1377,c_limit/Brody-RagingBull.jpg"
  },
  {
    nome: "Chinatown",
    ano: 1974,
    diretor: "Roman Polanski",
    categoria: "Film Noir / Mistério / Crime",
    sinopse: "O detetive privado Jake Gittes investiga um caso aparentemente simples de infidelidade, mas acaba envolvido numa teia de corrupção, segredos familiares e manipulação política em Los Angeles. Um noir moderno com atmosfera densa e um dos finais mais marcantes do cinema.",
    capa: "https://upload.wikimedia.org/wikipedia/en/3/38/Chinatownposter1.jpg",
    destaque: "https://images.mubicdn.net/images/film/325/cache-47691-1745490955/image-w1280.jpg"
  },
  {
    nome: "One Flew Over the Cuckoo's Nest",
    ano: 1975,
    diretor: "Milos Forman",
    categoria: "Drama / Psicológico",
    sinopse: "Randle McMurphy finge insanidade para escapar à prisão e acaba internado num hospital psiquiátrico, onde enfrenta a rígida e autoritária Enfermeira Ratched. A luta entre liberdade e controlo transforma-se num confronto emocional e simbólico. Um drama poderoso sobre individualidade e opressão.",
    capa: "https://upload.wikimedia.org/wikipedia/en/2/26/One_Flew_Over_the_Cuckoo%27s_Nest_poster.jpg",
    destaque: "https://noiselesschatter.com/wp-content/uploads/2015/07/cuckoostherapy.png"
  },
  {
    nome: "The Seventh Seal",
    ano: 1957,
    diretor: "Ingmar Bergman",
    categoria: "Drama / Filosófico / Medieval",
    sinopse: "Um cavaleiro regressa das Cruzadas e encontra a sua terra devastada pela peste. Ao ser confrontado pela Morte, desafia-a para um jogo de xadrez enquanto procura sentido para a vida e para a fé. Um filme profundamente simbólico e poético sobre existência e mortalidade.",
    capa: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Seventhsealposter.jpg/250px-Seventhsealposter.jpg",
    destaque: "https://images.bauerhosting.com/legacy/empire-tmdb/films/490/images/u2YXzSieIsDUZnhPpoytNJiTwyt.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80"
  },
  {
    nome: "The Great Dictator",
    ano: 1940,
    diretor: "Charlie Chaplin",
    categoria: "Comédia / Sátira / Guerra",
    sinopse: "Chaplin interpreta tanto um ditador tirânico quanto um barbeiro judeu confundido com ele. Através de humor e crítica social, o filme satiriza regimes totalitários e promove uma mensagem humanista e universal. Um dos discursos finais mais famosos da história do cinema.",
    capa: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/349/2024/10/11193727/1QpO9wo7JWecZ4NiBuu625FiY1j.jpg",
    destaque: "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2016/12/the-great-dictator_1280x720.jpg"
  },
  {
    nome: "The Bridge on the River Kwai",
    ano: 1957,
    diretor: "David Lean",
    categoria: "Guerra / Drama / Histórico",
    sinopse: "Prisioneiros de guerra britânicos são forçados pelos japoneses a construir uma ponte estratégica. O coronel Nicholson, determinado a manter a moral e disciplina, acaba por colaborar de forma controversa. O filme explora honra, orgulho e loucura em tempos de guerra.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/d/d9/The_Bridge_on_the_River_Kwai_%281958_US_poster_-_Style_A%29.jpg",
    destaque: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdZ6a3WXWCmuqjcRxzi9qDaZvaQwd12p1qyCSKpIkPSn9xw6y1R8boRC1AJq5rq9C-AL72Q3Gcz9-nURBHCPaBOxZtmAhzL-fo0w.jpg?r=8a5"
  },
  {
    nome: "Metropolis",
    ano: 1927,
    diretor: "Fritz Lang",
    categoria: "Ficção Científica / Distopia / Mudo",
    sinopse: "Numa cidade futurista dividida entre a elite e os trabalhadores oprimidos, o filho do líder descobre a dura realidade das classes inferiores e junta-se a uma jovem visionária que luta pela união. Com visuais revolucionários, o filme é um marco da ficção científica e da estética expressionista.",
    capa: "https://images.adsttc.com/adbr001cdn.archdaily.net/wp-content/uploads/2012/06/1338567143_1262715141_metropolisposter.jpg",
    destaque: "https://leffest.com/uploads/LEFFEST-2023/Filmes/Ciclos-Tematicos/A-Inteligencia-Artificial-e-a-Criacao-Artistica/Filmes/Metropolis/Metropolis-Foto-5.jpeg"
  },

  {
    nome: "The Wizard of Oz",
    ano: 1939,
    diretor: "Victor Fleming",
    categoria: "Fantasia / Musical / Aventura",
    sinopse: "Dorothy é transportada por um tornado para a mágica Terra de Oz, onde embarca numa jornada para encontrar o Feiticeiro que pode ajudá-la a regressar a casa. Acompanhada por amigos icónicos — o Espantalho, o Homem de Lata e o Leão Covarde — enfrenta desafios, bruxas e descobertas pessoais. Um clássico vibrante sobre coragem, amizade e identidade.",
    capa: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p5095_p_v12_an.jpg",
    destaque: "https://i0.wp.com/wordsworth-editions.com/cms/wp-content/uploads/2022/03/1782_OzWeb.jpg?fit=2000%2C1000&ssl=1"
  },
  {
    nome: "The Apartment",
    ano: 1960,
    diretor: "Billy Wilder",
    categoria: "Comédia Dramática / Romance",
    sinopse: "C.C. Baxter empresta o seu apartamento a executivos da empresa para encontros extraconjugais, esperando subir na carreira. Tudo muda quando se apaixona pela ascensorista Fran Kubelik, presa num relacionamento tóxico com o chefe. Um filme inteligente e sensível sobre solidão, ambição e amor verdadeiro.",
    capa: "https://m.media-amazon.com/images/M/MV5BNDdhMzVhOWQtNDU2Mi00ZmZmLWJiZDMtY2QxMjhjY2Y1ZTI5XkEyXkFqcGc@._V1_.jpg",
    destaque: "https://i.guim.co.uk/img/media/ead32b5b1f97e268336c004134b7bd9ac7c4968a/0_17_1989_1193/master/1989.jpg?width=1200&quality=85&auto=format&fit=max&s=90981d1a961d57fce4310ec0ab79c913"
  },
  {
    nome: "Rear Window",
    ano: 1954,
    diretor: "Alfred Hitchcock",
    categoria: "Suspense / Mistério",
    sinopse: "Confinado ao apartamento devido a uma perna partida, o fotógrafo Jeff passa os dias a observar os vizinhos pela janela. Quando suspeita que um deles cometeu um homicídio, envolve-se numa investigação improvisada que mistura paranoia, tensão e voyeurismo. Um thriller elegante e engenhoso sobre perceção e perigo.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/3/38/Rear_Window_film_poster.jpg",
    destaque: "https://m.media-amazon.com/images/M/MV5BMTM5NTYwMjEzM15BMl5BanBnXkFtZTcwNjYzMjAyNw@@._V1_.jpg"
  },
  {
    nome: "Saving Private Ryan",
    ano: 1998,
    diretor: "Steven Spielberg",
    categoria: "Guerra / Drama / Histórico",
    sinopse: "Durante a Segunda Guerra Mundial, após o brutal desembarque na Normandia, o Capitão John Miller recebe uma missão quase impossível: encontrar e resgatar o Soldado James Ryan, o último sobrevivente de quatro irmãos enviados para o combate. A jornada leva Miller e o seu pelotão através de território inimigo, enfrentando emboscadas, dilemas morais e o peso emocional da guerra. O filme destaca o sacrifício, a camaradagem e o impacto devastador do conflito, combinando realismo visceral com momentos profundamente humanos.",
    capa: "https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg",
    destaque: "https://ychef.files.bbci.co.uk/1280x720/p0j2dzgq.jpg"
  },
  {
    nome: "The Deer Hunter",
    ano: 1978,
    diretor: "Michael Cimino",
    categoria: "Guerra / Drama / Psicológico",
    sinopse: "A vida de três amigos é profundamente transformada pela Guerra do Vietname. O filme acompanha a inocência perdida, os traumas psicológicos e o impacto devastador do conflito nas relações humanas. Com interpretações intensas e cenas icónicas, é um retrato poderoso sobre amizade, dor e sobrevivência.",
    capa: "https://upload.wikimedia.org/wikipedia/en/5/57/The_Deer_Hunter_poster.jpg",
    destaque: "https://images.ft.com/v3/image/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2Fefd1e8ca-18a0-11e4-933e-00144feabdc0?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
  },
  {
    nome: "The Philadelphia Story",
    ano: 1940,
    diretor: "George Cukor",
    categoria: "Comédia Romântica / Clássico",
    sinopse: "Uma socialite prestes a casar vê a sua vida virar do avesso quando o ex-marido e um jornalista aparecem inesperadamente. Entre diálogos rápidos, humor sofisticado e dilemas amorosos, o filme explora orgulho, perdão e autodescoberta. Um marco da comédia romântica clássica.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/The-Philadelphia-Story-%281940%29.jpg/960px-The-Philadelphia-Story-%281940%29.jpg",
    destaque: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/2/12/1423731336922/The-Philadelphia-Story-009.jpg?width=700&quality=85&auto=format&fit=max&s=be721e4cbb2f2a7aaddbbd22319b60d4"
  },
  {
    nome: "The African Queen",
    ano: 1951,
    diretor: "John Huston",
    categoria: "Aventura / Romance / Guerra",
    sinopse: "Durante a Primeira Guerra Mundial, um capitão alcoólatra e uma missionária rígida unem forças para escapar de território inimigo através de um rio perigoso. A jornada transforma-se numa aventura cheia de tensão, humor e romance improvável. Um clássico vibrante com química inesquecível entre os protagonistas.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/8/81/The_African_Queen_%281952_US_poster%29.jpg",
    destaque: "https://m.media-amazon.com/images/M/MV5BNDkwMTMwNDQ5NF5BMl5BanBnXkFtZTcwNjY2OTcxNA@@._V1_.jpg"
  },
  {
    nome: "Paths of Glory",
    ano: 1957,
    diretor: "Stanley Kubrick",
    categoria: "Guerra / Drama / Tribunal",
    sinopse: "Durante a Primeira Guerra Mundial, soldados franceses são injustamente acusados de cobardia após uma missão suicida falhar. O coronel Dax luta para defender os homens num tribunal militar corrupto. Um filme poderoso e crítico sobre autoridade, injustiça e o absurdo da guerra.",
    capa: "https://m.media-amazon.com/images/M/MV5BOTkzMTY3OTQ4NV5BMl5BanBnXkFtZTcwMzY1MzgxNA@@._V1_.jpg",
    destaque: "https://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2017/01/paths-of-glory.jpg"
  },
  {
    nome: "The Night of the Hunter",
    ano: 1955,
    diretor: "Charles Laughton",
    categoria: "Suspense / Thriller / Noir",
    sinopse: "Um falso pregador e assassino persegue duas crianças para descobrir onde o pai delas escondeu dinheiro roubado. Com estética expressionista e atmosfera sombria, o filme mistura inocência, terror e simbolismo religioso. Uma obra única e visualmente marcante.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/a/a5/The_Night_of_the_Hunter_%281955_poster%29.jpg",
    destaque: "https://cdn.britannica.com/45/176345-050-78325569/Robert-Mitchum-The-Night-of-the-Hunter.jpg"
  },
  {
    nome: "The Treasure of the Sierra Madre",
    ano: 1948,
    diretor: "John Huston",
    categoria: "Aventura / Drama / Faroeste",
    sinopse: "Dois americanos desempregados juntam-se a um velho prospector para procurar ouro no México. À medida que a riqueza se aproxima, a ganância, a paranoia e a desconfiança começam a corroer o grupo. Um estudo intenso sobre a natureza humana e os perigos da ambição.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/1/1d/The_Treasure_of_the_Sierra_Madre_%281947_poster%29.jpg",
    destaque: "https://m.media-amazon.com/images/M/MV5BMTc2MDYwNzI1Ml5BMl5BanBnXkFtZTcwMDY4OTcyMw@@._V1_.jpg"
  },
  {
    nome: "The Grapes of Wrath",
    ano: 1940,
    diretor: "John Ford",
    categoria: "Drama / Social / Histórico",
    sinopse: "Durante a Grande Depressão, a família Joad abandona a sua terra devastada pela pobreza e parte rumo à Califórnia em busca de uma vida melhor. A viagem revela injustiças sociais, exploração e a força da solidariedade humana. Um drama poderoso baseado no romance de John Steinbeck.",
    capa: "https://upload.wikimedia.org/wikipedia/commons/c/c1/The_Grapes_of_Wrath_%281940_poster%29.jpg",
    destaque: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/12/10/1418213762596/lange-depression-photo-012.jpg?width=465&dpr=1&s=none&crop=none"
  },

  {
    nome: "Butch Cassidy and the Sundance Kid",
    ano: 1969,
    diretor: "George Roy Hill",
    categoria: "Western / Aventura / Crime",
    sinopse: "Dois famosos assaltantes de bancos, carismáticos e inseparáveis, veem o Velho Oeste mudar à sua volta enquanto tentam escapar à lei. Com humor, ação e uma química lendária entre Paul Newman e Robert Redford, o filme retrata o fim de uma era e a luta pela sobrevivência num mundo em transformação.",
    capa: "https://m.media-amazon.com/images/M/MV5BMTkyMTM2NDk5Nl5BMl5BanBnXkFtZTgwNzY1NzEyMDE@._V1_FMjpg_UX1000_.jpg",
    destaque: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/sundance-hed-39ce7b2191e2c58cffd1ad2a85ae54d7.jpg"
  },
  {
    nome: "The Graduate",
    ano: 1967,
    diretor: "Mike Nichols",
    categoria: "Drama / Romance / Comédia",
    sinopse: "Benjamin Braddock, recém-formado e perdido na vida, envolve-se num caso com a sedutora Mrs. Robinson, apenas para se apaixonar pela filha dela. O filme explora alienação, expectativas sociais e o desconforto da transição para a vida adulta, com estilo visual marcante e banda sonora icónica.",
    capa: "https://upload.wikimedia.org/wikipedia/pt/b/ba/The_Graduate.jpg",
    destaque: "https://s.abcnews.com/images/Entertainment/dustin-hoffman-graduate-1967-gty-jef-170807_1_16x9_992.jpg"
  },
  {
    nome: "Midnight Cowboy",
    ano: 1969,
    diretor: "John Schlesinger",
    categoria: "Drama / Urbano / Psicológico",
    sinopse: "Joe Buck, um jovem ingênuo do Texas, muda-se para Nova Iorque em busca de sucesso, mas acaba confrontado com a dureza da cidade. A sua improvável amizade com o doente e astuto Ratso Rizzo torna-se o coração do filme, que retrata solidão, pobreza e sonhos desfeitos com grande sensibilidade.",
    capa: "https://upload.wikimedia.org/wikipedia/en/f/f2/Midnight_Cowboy-poster.jpg",
    destaque: "https://i.ytimg.com/vi/5zHVFXorF38/maxresdefault.jpg"
  },
  {
    nome: "Patton",
    ano: 1970,
    diretor: "Franklin J. Schaffner",
    categoria: "Guerra / Biográfico / Histórico",
    sinopse: "O General George S. Patton é retratado como um líder brilhante, controverso e implacável durante a Segunda Guerra Mundial. O filme explora a sua personalidade complexa, ambição desmedida e conflitos com superiores, oferecendo um estudo profundo sobre liderança, ego e genialidade militar.",
    capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZS88Lh-X8VhRIYDm9ISosdUYnspA3oAvrSA&s",
    destaque: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2UsI6i2U-WcRAS7bS_rOO3ysrSqXGOZX1Q&s"
  },
  {
    nome: "The Exorcist",
    ano: 1973,
    diretor: "William Friedkin",
    categoria: "Terror / Sobrenatural / Psicológico",
    sinopse: "Quando uma jovem começa a apresentar comportamentos inexplicáveis e aterradores, a mãe procura ajuda de dois padres para realizar um exorcismo. O filme combina terror psicológico, fé, ciência e o desconhecido, criando uma das experiências mais intensas e influentes do género.",
    capa: "https://upload.wikimedia.org/wikipedia/en/7/7b/Exorcist_ver2.jpg",
    destaque: "https://i2.wp.com/www.thisishorror.co.uk/wp-content/uploads/2012/07/the-exorcist.jpg?fit=696%2C522"
  },
  {
    nome: "Rocky",
    ano: 1976,
    diretor: "John G. Avildsen",
    categoria: "Drama / Desporto / Inspiração",
    sinopse: "Rocky Balboa, um pugilista amador de Filadélfia, recebe uma oportunidade única de enfrentar o campeão mundial. Entre treinos intensos, desafios pessoais e um romance sincero, Rocky luta não apenas pela vitória, mas pela dignidade e autossuperação. Um clássico inspirador sobre perseverança.",
    capa: "https://upload.wikimedia.org/wikipedia/en/1/18/Rocky_poster.jpg",
    destaque: "https://catiarodrigues.pt/wp-content/uploads/2020/03/o-rocky-balboa-existe-mesmo.jpg"
  },
  {
    nome: "Alien",
    ano: 1979,
    diretor: "Ridley Scott",
    categoria: "Terror / Ficção Científica / Suspense",
    sinopse: "A tripulação da nave Nostromo responde a um pedido de socorro e acaba por libertar uma criatura alienígena mortal. À medida que o ser evolui e caça um a um, o filme mistura terror claustrofóbico, design futurista e tensão crescente, criando um dos monstros mais icónicos do cinema.",
    capa: "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg",
    destaque: "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/12/ripley-the-xenomorph-from-alien.jpg?w=1600&h=900&fit=crop"
  },
  {
    nome: "Blade Runner",
    ano: 1982,
    diretor: "Ridley Scott",
    categoria: "Ficção Científica / Neo-Noir / Filosófico",
    sinopse: "Num futuro distópico, Rick Deckard é encarregado de caçar replicantes — androides quase indistinguíveis de humanos. O filme explora identidade, memória, humanidade e moralidade através de uma estética visual revolucionária e atmosfera noir futurista. Uma obra profunda e influente.",
    capa: "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_.jpg",
    destaque: "https://images.mubicdn.net/images/film/186/cache-47462-1745490945/image-w1280.jpg?size=800x"
  },
  {
    nome: "Platoon",
    ano: 1986,
    diretor: "Oliver Stone",
    categoria: "Guerra / Drama / Psicológico",
    sinopse: "Um jovem soldado no Vietname enfrenta não apenas o inimigo, mas também conflitos internos dentro do seu próprio pelotão. O filme retrata o caos, a brutalidade e o impacto psicológico da guerra, baseado nas experiências reais do realizador. Um retrato cru e emocional do combate.",
    capa: "https://imagens.publicocdn.com/imagens.aspx/36006?tp=KM",
    destaque: "https://i.ytimg.com/vi/Wd2366guKHw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA5hFEOIggUr32j93RpQ1raKCshdg"
  },
  {
    nome: "The Truman Show",
    ano: 1998,
    diretor: "Peter Weir",
    categoria: "Drama / Ficção Científica / Satírico",
    sinopse: "Truman Burbank vive uma vida aparentemente perfeita, sem saber que toda a sua existência é um reality show transmitido para o mundo. Quando começa a questionar a realidade à sua volta, inicia uma jornada de descoberta, liberdade e identidade. Um filme visionário sobre controlo, media e autenticidade.",
    capa: "https://m.media-amazon.com/images/M/MV5BNzA3ZjZlNzYtMTdjMy00NjMzLTk5ZGYtMTkyYzNiOGM1YmM3XkEyXkFqcGc@._V1_.jpg",
    destaque: "https://cdn.britannica.com/02/262402-050-251A3978/Still-from-The-Truman-Show-The-Truman-Show-is-a-1997-American-film-directed-by-Peter-Weir-Starring-Jim-Carrey-Ed-Harris-Paul-Giamatti-Laura-Linney.jpg?w=400&h=300&c=crop"
  },
  {
    nome: "The Untouchables",
    ano: 1987,
    diretor: "Brian De Palma",
    categoria: "Crime / Máfia / Ação",
    sinopse: "Durante a Lei Seca, o agente Eliot Ness forma uma equipa de homens incorruptíveis para derrubar o poderoso mafioso Al Capone. O filme combina ação estilizada, drama policial e momentos icónicos, incluindo a famosa cena da estação de comboios. Um clássico moderno do crime.",
    capa: "https://m.media-amazon.com/images/M/MV5BYjVlZTc5NzctMWZkOC00MzU2LWI5N2QtYjk3ZGUzM2ExZjBhXkEyXkFqcGc@._V1_.jpg",
    destaque: "https://m.media-amazon.com/images/M/MV5BNTAxMDAwNDE0Nl5BMl5BanBnXkFtZTgwODg5MjY3MTE@._V1_.jpg"
  },
  {
    nome: "Heat",
    ano: 1995,
    diretor: "Michael Mann",
    categoria: "Crime / Thriller / Ação",
    sinopse: "Um ladrão profissional e um detetive obsessivo entram num jogo de gato e rato pelas ruas de Los Angeles. O filme destaca a vida dupla dos criminosos, o impacto emocional do trabalho policial e a linha ténue entre perseguidor e perseguido. Com Al Pacino e Robert De Niro frente a frente, é um dos thrillers mais respeitados dos anos 90.",
    capa: "https://m.media-amazon.com/images/M/MV5BMTkxYjU1OTMtYWViZC00ZjAzLWI3MDktZGQ2N2VmMjVjNDRlXkEyXkFqcGc@._V1_QL75_UY281_CR3,0,190,281_.jpg",
    destaque: "https://lumiere-a.akamaihd.net/v1/images/pp_heat_herobanner_628_737078c5.jpeg?region=0%2C0%2C2048%2C878"
  },
  {
    nome: "The Usual Suspects",
    ano: 1995,
    diretor: "Bryan Singer",
    categoria: "Crime / Mistério / Thriller",
    sinopse: "Após um assalto dar errado, cinco criminosos são reunidos numa esquadra e acabam envolvidos numa conspiração maior liderada pelo misterioso Keyser Söze. O filme é conhecido pela narrativa engenhosa, personagens marcantes e um dos finais mais surpreendentes da história do cinema.",
    capa: "https://upload.wikimedia.org/wikipedia/pt/4/43/UsualSuspects1995.jpg",
    destaque: "https://ew.com/thmb/rg20PSAqmLQ69Lm-kRe0eP6_gAE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-usual-suspects_0_0-bf694de73901485b8f36fdd4b91ea2eb.jpg"
  },
  {
    nome: "L.A. Confidential",
    ano: 1997,
    diretor: "Curtis Hanson",
    categoria: "Crime / Noir Moderno / Mistério",
    sinopse: "Três polícias com métodos e personalidades opostas investigam uma série de homicídios em Los Angeles dos anos 50. O filme mistura corrupção, glamour, violência e intriga num estilo noir moderno, com narrativa complexa e atmosfera envolvente.",
    capa: "https://play-lh.googleusercontent.com/c2a7mae_tTXEQuFvuuFPdpayRTS_ExaIfEZeaPiKR1UuQc4ZbISozLEqwc4-ZQEIcxMhBGPMljbKsFRTd0xz",
    destaque: "https://i0.wp.com/cinegrandiose.com/wp-content/uploads/2015/03/conf-1.png?fit=960%2C540&ssl=1"
  }
];

showMovies(filmes);
let filtroMovies=filmes