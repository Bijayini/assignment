const devDbRoute = 'mongodb://todo:Todo1234@ds351455.mlab.com:51455/todos';

const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const tasks = require('./routes/task.route');

const server = express();
let port =9008;

mongoose.connect(devDbRoute);
mongoose.promise = global.promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongo db connection failed'));

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));
server.use('/tasks', tasks);

server.listen(port,()=>{
    console.log('Server is up and running on port number ' + port);
});


module.exports = {server};