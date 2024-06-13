const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database/balloonDefence.db');



db.serialize(()=>{

  db.each("SELECT rowid AS id, HP, DEF FROM monster",(err,row)=>{
    console.log({name: row.id, hp : row.HP, def: row.DEF});

  });
});


db.close();