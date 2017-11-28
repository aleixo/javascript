// every array method test if every elements pass on the test
function everyArrayTest(element, index, array) {	
	return this.filter((value) => {
		return value.id == element.id
	}).length > 0;	
}

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {      
  		return submittedUsers.every(everyArrayTest, goodUsers);		
  };
}

module.exports = checkUsersValid