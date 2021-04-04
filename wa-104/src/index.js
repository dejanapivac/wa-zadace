import express from 'express'
import studenti from './studenti.json'
import routes from './routes.js'

const app = express();
const port = 4000;

app.get("/studenti", routes.sviStudenti)
app.get("/studenti/first", routes.prvi)
app.get("/students/last", routes.posljednji)


app.listen(port, () => console.log(`Slusam na port ${port}!`))
