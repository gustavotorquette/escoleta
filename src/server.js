const express = require('express');
const server = express();

const db = require('./database/db');

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})


server.use(express.static('public'));

server.use(express.urlencoded({ extended: true }));

// Configurar Rotas
server.get('/', (req, res) => {

  return res.render("index.html", {
    title: 'Seu marketplace de coleta de resíduos'
  });

});

server.get('/create-point', (req, res) => {

 


  return res.render("create-point.html");

});


server.post('/savepoint', (req, res) => {


    const query = `
        INSERT INTO places (
          image,
          name,
          address,
          address2,
          state,
          city,
          items
        ) VALUES (?,?,?,?,?,?,?);

      `
  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ]

  function afterInsertData(err){
    if(err){
      console.log(err);
      return res.send('Erro no cadastro!');
    }

    return res.render('create-point.html', { saved: true });

  }

  db.run(query, values, afterInsertData);

  

});


server.get('/search-results', (req, res) => {

  const search = req.query.search;

  if(search == ''){
    return res.render("search-results.html", { total: 0 });
  }

  // Pegar os dados do banco de dados
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){

    if(err){
      return console.log(err);
    }

    const total = rows.length

    return res.render("search-results.html", { places: rows, total });

  })

  

});

// Ligar o servidor
server.listen(3000);