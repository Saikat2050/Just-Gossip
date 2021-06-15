const socket = io.connect('http://localhost:5000');

var message=document.getElementById('message');
handle=document.getElementById('handle'),
btn=document.getElementById('send'),
output=document.getElementById('output'),
feedback=document.getElementById('feedback');

btn.addEventListener('click',()=>{
socket.emit('chat',{
    message:message.value, 
    handle:handle.value
});
});
message.addEventListener('keypress',()=>{
socket.emit('typing',handle.value);
});

socket.on('typing', (data)=>{
    feedback.innerHTML = '<p><em>'+ data + ' is typing</em></p>';
});

socket.on('chat',(data)=>{
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>'+ data.handle + ':</strong>' + data.message +'</p>';
});
