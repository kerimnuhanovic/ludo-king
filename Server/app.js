var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var server = require('./bin/www')

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*
const {Server} = require('socket.io')
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    },
})

io.on('connection', (socket) => {
    console.log("USAO")
    console.log(`Client: ${socket.id}`)
    socket.on('posalji', (data) => {
        console.log(data.poruka)
    })
})

*/
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
