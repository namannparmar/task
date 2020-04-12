const fs =require('fs')
const chalk =require('chalk')
const getNotes = function() 
{
    return 'Your notes...'
}

const removeNote=function(title){
  const notes =loadNotes()
  const notestokeep = notes.filter(function(note)
  {
      return note.title !== title
      console.log(chalk.green('Note removed'))
  })

  if(notes.length > notestokeep.length)
  {
      console.log(chalk.green.inverse('Note removed'))
  }
  else{
      console.log(chalk.red.inverse('No note found'))
  }

  saveNotes(notestokeep)
}

const listNotes=function(){

    const notes =loadNotes()
    console.log(chalk.blue('Your notes : '))
    notes.forEach((notes) => {
    
        console.log(notes.title)
    })
}



const addNote =function(title,body)
{
    debugger 
    
   const notes= loadNotes()
   notes.push({
       title: title,
       body:  body
   })
   saveNotes(notes)
}

const saveNotes = function(notes)
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer= fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)

    }
    catch(e){
            return[]
    }

    
}

const readNotes = function(title)
{
   const notes = loadNotes()
   const note = notes.find((notes) => notes.title ===title)

   if(note)
   {
    console.log(chalk.greenBright(note.title))
    console.log(note.body) 
       
   }
   else
   {
    console.log(chalk.inverse.red('Note not found'))
   }



}  


module.exports = {

    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes 
}