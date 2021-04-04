import express from 'express';
import dodaj from './dodaj.js';
import dohvati from './dohvati.js'

const app = express();
const port = 3000;

app.get("/dodaj", dodaj);
app.get("/dohvati", dohvati);

app.listen(port, () => console.log(`Slusam na port ${port}!`))