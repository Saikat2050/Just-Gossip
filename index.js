const express=require('express');
const socket= require('socket.io');
const app=express();
const server=app.listen(5000,()=>{
    console.log('connecting');
});
app.use(express.static('public'));
const io=socket(server);

io.on('connection',(socket)=>{
console.log('connection establish');
socket.on('chat',(data)=>{
io.sockets.emit('chat',data);
});
socket.on('typing',(data)=>{
socket.broadcast.emit('typing',data);
});
});


