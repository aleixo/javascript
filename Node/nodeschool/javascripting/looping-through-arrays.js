let pets =  ['cat', 'dog', 'rat'];
//Map function returns mapped values for each array element
let petsPlural = pets.map((pet) => {
	return pet + 's';
});
console.log(petsPlural);