//Steps to javascrpt engine define a variable

//Search for the variable in the curr scope
//Not found? Search in outer scope
//Found ? Assign a value
//Not found? keep searching on outer scopes till the global scope
// Not found on global, create it

/*

    (global)
      quux
        ↑
        |
      foo()
     var bar
        ↑
        |
       zip()
     var quux

**/

//Even if is one variable declarated inside function 
//engiune will follow the algorithm to create it
//cause it has no var,let or const
function foo()  {
	//Lexical scope var
	const bar = 'bar';
	quux = 'mustBeGlobal';
	function zip() {
		const quux = 'otherBar';
	}
} 