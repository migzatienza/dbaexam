const numMaleNewHires = parseInt(prompt("Enter the number of newly hired males: "));
const numFemaleNewHires = parseInt(prompt("Enter the number of newly hired females: "));
const numMalePermanent = parseInt(prompt("Enter the number of permanent position males: "));
const numFemalePermanent = parseInt(prompt("Enter the number of permanent position females: "));
const numMaleResigned = parseInt(prompt("Enter the number of resigned males: "));
const numFemaleResigned = parseInt(prompt("Enter the number of resigned females: "));

const totalNewHires = numMaleNewHires + numFemaleNewHires;
const totalPermanent = numMalePermanent + numFemalePermanent;
const totalResigned = numMaleResigned + numFemaleResigned;
const totalEmployees = totalNewHires + totalPermanent - totalResigned;

const percentMaleNewHires = (numMaleNewHires / totalNewHires) * 100;
const percentFemaleNewHires = (numFemaleNewHires / totalNewHires) * 100;
const percentMalePermanent = (numMalePermanent / totalPermanent) * 100;
const percentFemalePermanent = (numFemalePermanent / totalPermanent) * 100;
const percentMaleResigned = (numMaleResigned / totalResigned) * 100;
const percentFemaleResigned = (numFemaleResigned / totalResigned) * 100;


document.write(`Total number of newly hired employees: ${totalNewHires}`+"<br>");
document.write(`Percentage of male newly hired employees: ${percentMaleNewHires.toFixed(2)}%`+"<br>");
document.write(`Percentage of female newly hired employees: ${percentFemaleNewHires.toFixed(2)}%`+"<br><br>");

document.write(`Total number of permanent employees: ${totalPermanent}`+"<br>");
document.write(`Percentage of male permanent employees: ${percentMalePermanent.toFixed(2)}%`+"<br>");
document.write(`Percentage of female permanent employees: ${percentFemalePermanent.toFixed(2)}%`+"<br><br>");

document.write(`Total number of resigned employees: ${totalResigned}`+"<br>");
document.write(`Percentage of male resigned employees: ${percentMaleResigned.toFixed(2)}%`+"<br>");
document.write(`Percentage of female resigned employees: ${percentFemaleResigned.toFixed(2)}%`);