//DEPENDENCIES
const express = require('express');
const notes = express.Router({mergeParams:true});
const { getUser } = require('../queries/users');

//QUERIES
const {
    getAllNotes,
    getNote,
    UpdateNote,
    addVideotoNote,
    CreateNote,
    DeleteNote
} = require('../queries/notes')


//ROUTES

//INDEX
notes.get("/", async (req, res) => {
    const { id } = req.params;
    const allNotes = await getAllNotes(id);
    const user = await getUser(id)

    if(allNotes[0]){
        res.status(200).json({...user, allNotes})
    } else {
        res.status(500).json({error: "somethings wrong on your end"})
    }
});

//SHOW
notes.get("/:id", async (req, res) => {
    const { note_id, id } = req.params;
    const note = await getNote(note_id);
    const user = await getUser(id);
    if(note){
        res.status(200).json({...user, note})
    } else {
        res.status(404).json({error: "not found here"})
    }
})

//ADD VIDEOS
notes.patch("/:id", async (req, res) => {
    const {note_id } = req.params;
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
notes.put("/:id", async (req, res) =>{
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
notes.delete("/:id", async (req, res) => {
    const { note_id } = req.params;
    const deletedNote = await DeleteNote(note_id);
    if (deletedNote.id) {
      res.status(200).json(deletedNote);
    } else {
      res.status(404).json({ error: "No note found" });
    }
  });
  