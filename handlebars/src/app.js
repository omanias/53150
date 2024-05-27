
import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

let food = [
    { name: "Pizza", price: 100 },
    { name: "Hamburguesa", price: 150 },
    { name: "Papas rustica", price: 200 },
    { name: "Empanadas", price: 250 },
    { name: "Ensalada", price: 300 }
]

app.get('/', (req, res) => {
    let testUser = {
        name: "Coder",
        lastName: "House",
        role: "user"
    }
    res.render('index', {
        user: testUser,
        //css
        isAdmin: testUser.role === "admin",
        food
    })
})

let users = [];

app.post('/user', (req, res) => {
    const { name, email, password } = req.body;
    const newUser = { name, email, password };
    users.push(newUser);
    res.send('Usuario registrado correctamente.');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(PORT, () => {
    console.log(`Server is running on port \PORT`)
})