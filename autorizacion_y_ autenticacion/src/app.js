import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import mongoose from './config/database.js';
import MongoStore from 'connect-mongo';
import sessionsRouter from './routes/api/sessions.js';
import viewsRouter from './routes/views.js';
import passport from 'passport';
import initializePassport from './config/passport.config.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false,
}));

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/sessions', sessionsRouter);
app.use('/', viewsRouter);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
