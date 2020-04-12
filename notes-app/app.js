const chalk =require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


yargs.command({

    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Title of the note',
            demandOPtion: true,
            type: 'string'
        },
        body:{
            describe:'Body of the note',
            demandOPtion: true,
            type:'string'
        }
    },
    handler: function(argv)
    {
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({

    command :'remove',
    describe:'Removing a note',
    builder:{
        title:{
            describe:'Title of the note',
            demandOption: true,
            type:'string '

        }
    },
    handler: function(argv)
    {
        notes.removeNote(argv.title)
    }
})
yargs.command({

    command: 'list',
    describe:'Making a list of the notes',
    handler: function()
    {
        notes.listNotes()
    }
})

yargs.command({

    command:'read',
    describe:'It reads th notes',
    builder:{
        title:{
            describe:'Title of the note',
            demandOPtion: true,
            type: 'string'
        }
       
    },
    handler(argv)
    {
        notes.readNotes(argv.title)
      }
})

yargs.parse()
