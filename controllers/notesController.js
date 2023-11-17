//DEPENDENCIES
const express = require('express');
const notes = express.Router({mergeParams:true});

//QUERIES
const {
    getAllNotes,
    getNote,
    UpdateNote,
    addVideotoNote,
    CreateNote,
    DeleteNote
} = require('../queries/notes')

const { getUser } = require('../queries/users');

//ROUTES

//INDEX
notes.get("/", async (req, res) => {
    const { user_id } = req.params;

 try{
     const allNotes = await getAllNotes(user_id);
     const user = await getUser(user_id)
     if(user && allNotes.length >0){
         res.status(200).json({...user, allNotes})
        }else {
        res.status(500).json({error: "user or notes not found"})
    }
}catch(error){
    console.error("Error Fetching notes:", error)
    res.status(500).json({error:"internal server error"})
}});

//SHOW
notes.get("/:note_id", async (req, res) => {
    const { user_id, note_id } = req.params;
    const user = await getUser(user_id);
    const note = await getNote(note_id, user_id);
    if(!note.note_id){
        res.status(404).json({error:"Note not found"})
    }else{
        if(user.id){
            res.status(200).json({...user, note})
           
        } else {
            res.status(404).json({error: "not found here"})
        }
    }
    // if(user.id){
    //     res.status(200).json({...user, note})
       
    // } else {
    //     res.status(404).json({error: "not found here"})
    // }
})

//ADD VIDEOS
notes.patch("/:note_id", async (req, res) => {
    const { note_id } = req.params;
    const { videoLink } = req.body;
    try {
        const addedVideo = await addVideotoNote(note_id, videoLink);
        res.status(200).json({message:"Video is added"})
    } catch(error){
        console.error("Something went wrong!", error)
        res.status(500).json({error: "Something broke:"})
    }
})
//UPDATE
notes.put("/:note_id", async (req, res) =>{
    const { id, note_id } = req.params;
    const updatedNote = await UpdateNote({note_id, id, ...req.body})
    if (updatedNote.id){
        res.status(200).json(updatedNote)
    } else {
        res.status(404).json("Error Sending")
    }
});

//CREATE
notes.post("/", async (req, res) => {
    const { user_id } = req.params;
    const newNote = await CreateNote({user_id, ...req.body})
    res.status(200).json(newNote)
})

// DELETE
notes.delete("/:note_id", async (req, res) => {
    const { note_id } = req.params;
    const deletedNote = await DeleteNote(note_id);
    if(deletedNote.note_id) {
      res.status(200).json(deletedNote);
    } else {
      res.status(404).json({ error: "No note found" });
    }
  });
  
  module.exports = notes;