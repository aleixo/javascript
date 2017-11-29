const fs = require('fs');
const FILE = 'notesdata.json';   
module.exports.age = 25;

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync(FILE);    
        return JSON.parse(notesString);        
    } catch (error) {
        return [];
    } 
}

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => {
        return note.title === title;
    });
    return filteredNotes[0];
}

var saveNotes = (notes) => {
    fs.writeFileSync(FILE, JSON.stringify(notes));
}

var fnAddNote = (title,body) => {
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
    }        

    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push(note);            
        saveNotes(notes);
        return note;
    }
};

var fnGetAll = () => {
    return fetchNotes();
};

var fnGetNote = (title) => {
    return getNote(title);     
};

var fnRemoveNote = (title) => {
    
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => {
        return note.title !== title;
    });
    saveNotes(filteredNotes)

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('TITLE -> '+note.title);
    console.log('BODY -> '+note.body);
    console.log('-------');
}

var logNotes = (notes) => {
    notes.forEach(function(note) {
        logNote(note);
    });
}
module.exports =  {
    addNote     : fnAddNote,
    getAll      : fnGetAll,
    getNote     : fnGetNote,
    removeNote  : fnRemoveNote,
    logNote     : logNote,
    logNotes    : logNotes
}