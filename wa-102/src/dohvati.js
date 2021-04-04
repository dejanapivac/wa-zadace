import lista from './lista.js'

let dohvati = (req, res) => {
    res.send("Brojevi: " + lista.join(" "));
};

export default dohvati;