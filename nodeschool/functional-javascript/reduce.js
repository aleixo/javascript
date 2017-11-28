function countWords(inputWords) {	 
	 return inputWords.reduce((acccumulator, value) => {
	  	return acccumulator[value] = acccumulator[value] + 1 || 0;
	  });
}

module.exports = countWords;