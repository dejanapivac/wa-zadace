import express from 'express'
import lista from './lista.js';

let random = (max) => {
    return Math.round(Math.random()*max);
};


let dodaj = (req, res) => {
    let broj = random(100);
    console.log(broj);
    lista.push(broj);
    res.send("Spremljen broj " + broj);
};

export default dodaj;

