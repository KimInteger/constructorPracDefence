const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database/balloonDefence.db');

db.run("CREATE TABLE IF NOT EXISTS monster (id INTEGER PRAIMARY KEY, HP INTEGER NOT NULL, DEF INTEGER NOT NULL, SPEED INTEGER NOT NULL)",(err)=>{
  if(err) {
    throw new Error('테이블이 생성되지 아니함');
  } else {
    console.log(1);
  }
});


db.close();