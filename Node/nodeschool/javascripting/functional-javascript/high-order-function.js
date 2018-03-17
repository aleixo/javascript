/**

Ulike other languages, in js func can be treated as normal vars only ordering for their execution at a given time

first order functions pass strings nums etc in func arguments
high-order functions can receive alsp a function

*/

function repeat(operation, num) {
      if (num === 0) {
		return
	}
	operation()
	repeat(operation, --num);
    }
    
 module.exports = repeat		