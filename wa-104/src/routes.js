import  studenti from './studenti.json'

let sviStudenti = (req, res) => res.send(studenti.student)
let prvi = (req, res) => res.send(studenti.student[0])
let posljednji = (req, res) => res.send(studenti.student[studenti.student.length-1])

export default{sviStudenti, prvi, posljednji}