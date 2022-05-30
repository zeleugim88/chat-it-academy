const User = require('../models/user.js');

const getUsersInRoom = async(room) => {
    const usersArray = await User.find({ room: room });
    const users = [];
    for (let i = 0; i < usersArray.length; i++) {
        users.push( usersArray[i].name )
    }
    return users;
}

module.exports = getUsersInRoom;