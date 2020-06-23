// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

const fake = [6, 0, 1, 1, 1, 1, 0, 0, 9, 1, 4, 6, 3, 4, 3 ,1];
const fake2 = [5, 4, 1, 1, 1, 1, 0, 0, 9, 1, 3, 6, 3, 4, 3 ,1];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
const batch2= [fake, fake2];
//console.log(batch2);
//FUNCTION 1
let validateCred = array => {
 let length = array.length-1;
 let sum = 0;
 let counter = 0;

 for (let i = length; i >= 0; i--) {
   if (counter % 2 != 0) {
     let newValue = array[i]*2;
     if (newValue > 9) {
       newValue -= 9;
     }
    sum += newValue;
   }
   else {
     sum += array[i];
   }
   counter++;
 }

 if (sum % 10 == 0) {
   //console.log("true");
   return true;
 } else {
   //console.log("false");
   return false;
 }
}

//FUNCTION 2
let newInvalidArray = [];
let findInvalidCards = nestedArray => {
  for (let f = 0; f < nestedArray.length; f++) {

    if (validateCred(nestedArray[f]) == false) {
     newInvalidArray.push(nestedArray[f]);
    }
  }
}




//FUNCTION 3

let idInvalidCardCompanies = nestedArray => {

  findInvalidCards(nestedArray);
  let companiesArray = [];

  for (let a = 0; a < newInvalidArray.length; a++)
  if (newInvalidArray[a][0] == 3 && companiesArray.indexOf('Amex (American Express)') < 0) {
    companiesArray.push('Amex (American Express)');
  }
  else if (newInvalidArray[a][0] == 4 && companiesArray.indexOf('Visa') < 0) {
    companiesArray.push('Visa');

  }
  else if (newInvalidArray[a][0] == 5 && companiesArray.indexOf('MasterCard') < 0) {
    companiesArray.push('MasterCard');

  }
  else if (newInvalidArray[a][0] == 6 && companiesArray.indexOf('Discover') < 0) {
    companiesArray.push('Discover');

  }
  else if ((newInvalidArray[a][0] < 3 || newInvalidArray[a][0]) > 6 && companiesArray.indexOf('Company not found.') < 0) {
    companiesArray.push('Company not found.');

  }

  console.log(companiesArray);
}

idInvalidCardCompanies(batch2);
