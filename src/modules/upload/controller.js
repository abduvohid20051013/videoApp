const path = require('path')
require('dotenv')
const jwt = require('jsonwebtoken');
const KEY = "1111"
const { addVideo } = require('./model')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'views', 'admin.html'))
}

const POST = (req, res) => {
    let file = req.files.file
    let payload = jwt.verify(req.cookies.token, KEY)
    let fileName = new Date().getTime() + file.name.replace(/\s/g, "_").trim()
    file.mv(path.join(process.cwd(), 'upload', 'uploadedVideo', fileName))
    addVideo(req.body, payload, fileName)
    res.status(200).send({
        message: 'A video added successfully'
    })
}




module.exports = { GET, POST }

// require('dotenv')
// const jwt = require('jsonwebtoken');

// module.exports = function (req, res, next) {

//     const token = req.header('auth-token');

//     if (!token) return res.status(401).send('Access Denied !');
//     console.log(process.env.JWT_TOKEN_SECRET);
//     console.log(token);

//     try 
//     {

//         const verified = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
//         req.user = verified;  
//         next();

//     } 
//     catch (error) 
//     {
//         res.status(400).send('Invalid token !');
//     }
// }