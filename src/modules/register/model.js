const fs = require('fs')
const path = require('path')

const addUser = (user, userImg) => {
    let users = fs.readFileSync(path.join(process.cwd(), 'database', 'users.json'), 'utf-8')
    users = users ? JSON.parse(users) : []
    let found = users.find(u => u.username == user.username)
    if (!found) {
        let userId = users.length ? users[users.length - 1].user_id + 1 : 1
        let newUser = {
            user_id: userId,
            ...user,
            userImg
        }
        users.push(newUser)
        fs.writeFileSync(path.join(process.cwd(), 'database', 'users.json'), JSON.stringify(users, null, 4))
        newUser.password = null
        return newUser
    } else return
}

module.exports = { addUser }




// const fs = require('fs')
// const path = require('path')
// const register = ({ username, password, email, userImg }) => {
//     let users = fs.readFileSync(path.join(process.cwd(), 'database', 'users.json'), 'UTF-8')
//     users = users ? JSON.parse(users) : []
//     let user = users.find(user => user.username == username)
//     if (user) {
//         return user
//     } else {
//         let id = users.length ? users[users.length - 1].userId + 1 : 1
//         let newUser = {
//             userId: id,
//             username,
//             password,
//             email,
//             userImg
//         }
//         users.push(newUser)
//         fs.writeFileSync(path.join(process.cwd(), 'database', 'users.json'), JSON.stringify(users, null, 5))
//         return newUser
//     }
// }
// const getUsers = () => {
//     let users = fs.readFileSync(path.join(process.cwd(), 'database', 'users.json'), 'UTF-8')
//     users = users ? JSON.parse(users) : []
//     return users
// }

// module.exports = {
//     register,
//     getUsers
// }