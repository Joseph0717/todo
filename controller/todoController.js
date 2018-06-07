//引入mongoose模块
const mongoose = require('mongoose');
//链接数据库
mongoose.connect('mongodb://todoapp:a9298770426@ds247270.mlab.com:47270/joseph')
//创建图表
const todoSchema = new mongoose.Schema({
    item:String
})
//往数据库中存储数据
const Todo = mongoose.model('Todo',todoSchema);

/* Todo({item:'hello world'}).save(function(err,data){
    if(err) throw err;

    console.log('item');
}) */


















//数据解码
const bodyParser = require('body-parser');
//对象数据进行解析
const urlencodeParser = bodyParser.urlencoded({extended:false});



//假数据
/* var data = [
    {item:'我是joseph'},
    {item:'欢迎大家'},
    {item:'富士施乐'}
] */




module.exports = function(app){
    //获取数据
    app.get('/todo',(req,res) => {
        Todo.find({},function(err,data){
            if(err) throw err;
            res.render('todo', {todos: data});
        })
    })




    //传递数据
    app.post('/todo',urlencodeParser,(req,res) => {
        Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
        })
    })





    //删除数据
    app.delete('/todo/:item',(req,res) => {
        // console.log(req.params.item);
        Todo.find({item:req.params.item}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        })
        /* data = data.filter(function(todo){
            return req.params.item !== todo.item;
        });
        res.json(data); */
    })
}