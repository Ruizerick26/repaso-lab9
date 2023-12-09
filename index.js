const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(express.json());

// Middleware de autenticación
const authenticateUser = (req, res, next) => {
    const { username, password } = req.body;
    // Verifica las credenciales
    if (username === 'admin' && password === 'admin') {
        next(); 
    } else {
        res.status(401).send('Acceso no autorizado - Credenciales incorrectas.');
    }
};

// Rutas
app.get('/', (req, res) => {
    res.send('Cursos de Programación');
});
app.get('/dashboard', authenticateUser, (req, res) => {
    res.send('Bienvenido');
});
app.get('/courses', authenticateUser, (req, res) => {
    res.send('Cursos');
});
app.get('/about', authenticateUser, (req, res) => {
    res.send('Sobre nosotros');
});




const router = require( 'express').Routes({
    mergeParams: true
})

router.get('/perfil', (req, res) =>{
    res. send (`<h1>Perfil</h1>`)
})

router.get('/fotos', (req, res) =>{
    res. send (`<h1>fotos</h1>`)
})

router. get ('/foto/:fotoId', (req, res) => {
    // req-params
  res.send(`
    <h3> Usuario ID: ${req.params.id} </h3>
    <h3> Foto ID: ${req.params.fotoId} </h3>
  `)
})

//request y response
app.get('/menu',(req,res)=>{
    res.send("Menu Principal")
})

app.get('/estudiantes',(req,res)=>{
    res.json([
        {
            "nombre":"Paul",
            "apellido":"Hidalgo",
            "edad":21
        },
        {
            "nombre":"Martin",
            "apellido":"Jimenez",
            "edad":20
        },
        {
            "nombre":"Gilmar",
            "apellido":"Morales",
            "edad":20
        },
        {
            "nombre":"Ismael",
            "apellido":"Novillo",
            "edad":20
        },
        {
            "nombre":"Cristian",
            "apellido":"Paredes",
            "edad":21
        },
        {
            "nombre":"Cristian",
            "apellido":"Simba",
            "edad":20
        },
        {
            "nombre":"Erick",
            "apellido":"Ruiz",
            "edad":20
        }
    ])
})

app.get('/materiales',(req,res)=>{
    res.send(`
            <h1>Materiales</h1>
                <p>EPN</p>
                <ul>
                <li>Computadora</li>
                <li>Teclado</li>
                <li>Mouse</li>
                <li>Cámara</li>
                </ul>
            `)
})

app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});