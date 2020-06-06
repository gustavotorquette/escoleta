// Importar a dependência do SQLliste
const sqlite3 = require('sqlite3').verbose();

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db');

module.exports = db;

// utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {

//   // Criar Tabela
//   db.run(`

//       CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//       );

//   `)

//   // Inserir dados na tabela
//   const query = `
//         INSERT INTO places (
//           image,
//           name,
//           address,
//           address2,
//           state,
//           city,
//           items
//         ) VALUES (?,?,?,?,?,?,?);

//       `
//   const values = [
//     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//     "Nome do Local 2",
//     "Rua Cambará 2",
//     "Número 34322323",
//     "São Paulo",
//     "São Paulo",
//     "Resíduos Eletrônicos, Lâmpadas"

//   ]

//   function afterInsertData(err){
//     if(err){
//       return console.log(err);
//     }

//     console.log('Cadastrado com sucesso');
//     console.log(this);
//   }

//   db.run(query, values, afterInsertData);




//   // Consultar os dados da tabela
//   // db.all(`SELECT * FROM places`, function(err, rows){

//   //   if(err){
//   //     return console.log(err);
//   //   }
//   //   console.log('Aqui estão os seus registros');
//   //   console.log(rows);

//   // })


  // db.run('DELETE FROM places WHERE id = ?', [5], function(err){
  //   if(err){
  //     return console.log(err);
  //   }
  //   console.log('Deletado com sucesso');

  // })

})



