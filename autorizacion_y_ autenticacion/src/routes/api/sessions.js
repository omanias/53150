import { Router } from 'express';
import User from '../../models/user.js';
import { createHash, isValidPassword } from '../../../utils.js';
import passport from 'passport';

const router = Router();

router.post('/register', passport.authenticate('register', { failureRedirect: 'failregister' }), async (req, res) => {
    /* const { first_name, last_name, email, age, password } = req.body;
    try {
        const newUser = new User({
            first_name,
            last_name,
            email,
            age,
            password: createHash(password)
        });
        await newUser.save();
        res.redirect('/login');
    } catch (err) {
        res.status(500).send('Error al registrar usuario');
    } */
    res.send({ status: "success", message: "User registered" })
});

router.get('/failregister', async (req, res) => {
    console.log("Failed Strategy")
    res.send({ error: "Failed" })
})

router.post('/login', passport.authenticate('login', { failureRedirect: 'faillogin' }), async (req, res) => {
    /* const { email, password } = req.body;
    console.log(email, password)
    try {
        const user = await User.findOne({ email });
        console.log(user)
        if (!user) return res.status(404).send('Usuario no encontrado');
        if (!isValidPassword(user, password)) return res.status(403).send({ status: "error", error: "Password incorrecto" })
        delete user.password
        req.session.user = {
            id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            age: user.age,
        };
        console.log(req.session.user)
        res.redirect('/profile');

    } catch (err) {
        res.status(500).send('Error al iniciar sesión');
    } */
    if (!req.user) return res.status(400).send({ status: 'error', error: "Invalid credentials" })
    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        age: req.user.age,
        email: req.user.email
    }
    res.send({ status: "success", payload: req.user })
});

router.get('/faillogin', (req, res) => {
    res.send({ error: "Falied login" })
})

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).send('Error al cerrar sesión');
        res.redirect('/login');
    });
});

export default router;
