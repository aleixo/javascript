console.log('Starting app.js');

const fs    = require('fs');
const os    = require('os');
const _     = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js')

var user    = os.userInfo();

var yargsNoteTitle = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

var yargsNoteBody = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs.
    command('add',  'Add a new note', {
        title : yargsNoteTitle,
        body: yargsNoteBody
    })
    .command('list',  'List all notes')
    .command('read',  'Read a note', {
        title : yargsNoteTitle,        
    })
    .command('remove',  'Remove a note', {
        title : yargsNoteTitle,        
    })
    .help()
    .argv;
var comand = argv._[0];

var arrayDuplicateVals = [1,1,1,1,2,3,'Diogo','Diogo','Diogo','Maria',4,5,5,5];

// fs.appendFile('greetings.txt','Hello '+user.username+ ' ' + notes.age, (err) => {
//     if (err) {
//         return console.log('Error writing file');
//     }    
//     console.log('Wrote file');
// });

if (comand === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if (!note) {
        return console.log('There was a duplicate');
    }

    return console.log('Note inserted '+note.title, note.body);

} else if (comand === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    notes.logNotes(allNotes);
} else if (comand === 'remove') {
    var res = notes.removeNote(argv.title);    
    var message = res ? "note removed" : "note not removed"
    console.log(message);
}  else if (comand === 'read') { 
    var note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    } else {
        console.log('No note');
    }
} else {
    console.log('Not valid')
}