const express = require('express');

var app = express();


app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });

});

//GEt rounte /users
//Give users a name propery and age property

app.get('/users', (req,res)=> {
  res.send([{
    name: 'Dan',
    age: 34
  }])

});

app.listen(3000, () => {
  console.log("listening on 3000")
});

module.exports.app = app;
