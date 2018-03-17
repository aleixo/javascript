//Closures enable assync programming
//A closure is the function that modifies one outer varable inside it

//That way, one function could be waiting for http response and alter states on response allowing callback to work
function foo()  {
	//Lexical scope var
	let bar = 'bar';
	quux = 'mustBeGlobal';
	function zip() {
		const quux = 'otherBar';
		bar = true
	}

	return zip
} 