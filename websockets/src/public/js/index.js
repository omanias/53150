const socket = io()

// socket.emit('message', "me comunico desde WS")

socket.on('evento_para_todos', data => {
    console.log(data)
})