import express from 'express'
import moment from 'moment';

const app = express()
const port = 3000

app.get("/datum", (req, res) => {
    let date = moment().format("DD.MM.YYYY. HH:mm");
    res.send(`Datum: ${date}`);
});

app.get("/prognoza", (req, res) => {
    let prognoza = [
        "sunčano!",
        "kišovito!",
        "oblačno!",
    ];
    var randomprog = prognoza[Math.floor(Math.random() * prognoza.length)];
    res.send(`Danas će biti ${randomprog}`);
});

app.get("/", (req, res) => {
    res.send("http://localhost:3000/datum - trenutni datum i vrijeme <br> http://localhost:3000/prognoza - random prognoza");
})

app.listen(port, () => console.log(`Slusam na port ${port}!`))