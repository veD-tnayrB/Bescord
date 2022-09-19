const rooms = {
    1123132: {
        users: [],
        id: '1123132'
    }
};

export /*bundle*/ 
function joinToRoom(socket, payload): void {
    const { user, room } = payload;
    if (!rooms[room.id]) {
        rooms[room.id] = { users: [user], room };
        
        socket.join(room.id);
        socket.emit('user-accepted', room.id);
        return;    
    };

    socket.to(room.id).emit('user-want-enter', user);

    rooms[room.id].users = [...rooms[room.id].users, user];
    socket.join(room.id);
}

export /*bundle*/
function leaveRoom(payload): void {
    
}