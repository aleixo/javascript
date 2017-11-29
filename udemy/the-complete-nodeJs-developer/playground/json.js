var obj = {
    name: 'Diogo'
}

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var parse = JSON.parse(stringObj);
console.log(parse);
console.log(typeof parse);

const fs = require('fs');

var originalNote = {
    title: 'Nota',
    body: 'Corpo da nota'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var json = fs.readFileSync('notes.json')
var noteString = JSON.parse(json);
console.log(noteString);