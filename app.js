const express = require('express');

//自定义模块
const todoController = require('./controller/todoController');

const app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(8080);