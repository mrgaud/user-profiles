const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')

const config = require('./config')

const profileCtrl = require('./controllers/profileCtrl.js')
const userCtrl = require('./controllers/userCtrl.js')

const port = 3000;

const corsOpt = {
    origin: "http://localhost:3000"
}

const app = express();

app.use(bodyParser.json());

app.use(cors(corsOpt));

app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.show)


app.listen(port, function() {
    console.log(`Server running on: ${port}`);
})
