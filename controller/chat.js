const MessageService = require('../services/chat')
const message = new MessageService()

exports.saveMessage = async (socket, mensaje) =>{
    try {
        let messages = await message.saveMessage(mensaje);
        //Emitir nuevo mensaje al cliente
        socket.emit('newMessage', messages);
    } catch (error) {
        console.log(error)
    }
}

exports.getAllMessages = async () =>{
    try {
        const allMessages = await message.getAllMessages();
        return allMessages;
    } catch (error) {
        console.log(error)
    }
}
