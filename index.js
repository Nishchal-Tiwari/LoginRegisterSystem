const express = require('express');
const app = express();
const db_connect = require('./db_connect')
const register = require('./register')
const login = require('./login')
const session = require('express-session')
const parser = require('cookie-parser');
const cors = require('cors')



//middleware

app.use(cors({ credentials: true, origin: 'http://127.0.0.1:3000' }))
    // here after include frontend origin instead of localhost 
    // and 127.0.0.1  is different from localhost
    .use(express.json())
app.use(parser())

db_connect('vidly')
app.use(session({
    key: "uid",
    secret: "0xC345$%^&ewfwfwaae#$%^&*SDFGHJKNBVCFDRGTHJM",
    resave: false,
    saveUninitialized: true,


}))



//    these are not middleware these are routes which are to be handled by router
app.use('/register', register)

app.use('/login', login)






//     requests 
app.post('/post', (req, res) => {
    console.log(req.body)
    res.send("ok")
})
app.get('/', (rq, rs) => rs.send("HomePage"))





app.listen("3001", () => console.log("Server started on port 3001"))