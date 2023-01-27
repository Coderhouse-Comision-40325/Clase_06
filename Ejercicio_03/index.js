// Importamos nuestra dependencia
import moment from "moment"

// Fecha actual
let currentDate = moment();
console.log(`Fecha actual: ${currentDate.format('YYYY-MM-DD')}`)

// Fecha de nacimiento
let birthDate = moment("2006-06-02", 'YYYY-MM-DD')

// Validar la fecha de nacimiento
if(birthDate.isValid()){
    console.log(`Fecha de nacimiento valida: ${birthDate.format('YYYY-MM-DD')}`)
} else {
    console.log("Fecha de nacimmiento no valida")
}

// Dias transcurridos desde el nacimiento hasta hoy
let dayPassedSinceBirth = currentDate.diff(birthDate, 'days');
console.log(`Dias transcurridos desde mi nacimiento: ${dayPassedSinceBirth}`)