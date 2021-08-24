const Traveler  = require("./models/Traveler");
const Hunter  = require("./models/Hunter");
const Doctor  = require("./models/Doctor");
const Wagon     = require("./models/Wagon");

let viajante = new Traveler();
let carroca = new Wagon();
let hunter = new Hunter();
let doctor = new Doctor();

let viajanteSergio = new Traveler();
let viajanteSimone = new Traveler();
let viajanteSamuel = new Traveler();
let viajanteSandra = new Traveler();
let viajanteJoão   = new Traveler();
let viajanteDiego  = new Traveler();
let viajanteDiana  = new Traveler();

let hunterCleitin = new Hunter();
let doctorJoe = new Doctor();

module.exports = {
    viajante,
    carroca,
    doctor,
    hunter,
}