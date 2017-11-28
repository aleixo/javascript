/*

Finding length < 50 and retieving only the message property of the object at index, takes chaining filter and map

Filter evaluates each array element and map modifies it

**/

function getShortMessages(messages) {

	return messages.filter((value) => {		
		return value.message.length < 50
	}).map((value) => {
		return value.message;
	});
}

module.exports = getShortMessages

