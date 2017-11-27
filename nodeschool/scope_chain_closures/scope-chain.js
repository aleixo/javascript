//let, var and constant also dictates variable scope
let globalScope = 'global';
function foo()  {
	//Lexical scope var
	const bar = 'bar';

	function zip() {
		const quux = 'otherBar';
	}
}