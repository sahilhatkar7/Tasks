import patients from "./patients.js";
/* for all records */
patients.forEach(patient => {
    console.log(patient);
});
/* find city= kolhapur */
const city =patients.filter(patient=> patient.city === "kolhapur");

const user ={
    id: 1,
    name:""
}
console.log(user.name);

console.log(city);