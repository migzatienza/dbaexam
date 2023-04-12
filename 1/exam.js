const myArray = [5, 1, 4, 6, 7, 3, 5, 7, 3];
const duplicates = [];

myArray.forEach((value, index) => {
  if (myArray.indexOf(value, index + 1) !== -1 && !duplicates.includes(value)) {
    duplicates.push(value);
  }
});

document.write("Duplicated arrays are: "+duplicates);

