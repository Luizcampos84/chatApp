const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({id, username, room}) => {
    // Clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate thr data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    //  Check for exixting user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if (existingUser) {
        return {
            error:'Username is in use!'
        }
    }

    // Store user
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

        if (index !== -1) {
            return users.splice(index, 1)[0]
        }
    }

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}


// addUser({
//     id: 22,
//     username: 'Paul  ',
//     room: '  South Melbourne'
// })

// addUser({
//     id: 42,
//     username: 'Michel  ',
//     room: ' South Melbourne'
// })

// addUser({
//     id: 30,
//     username: 'Ana  ',
//     room: '  St Kilda'
// })

// const user = getUser(42)
// console.log(user)

// const userList = getUsersInRoom('fairmount')
// console.log(userList)

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}