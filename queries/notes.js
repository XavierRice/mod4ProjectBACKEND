const db = require("../db/dbConfig");

const getAllNotes = async (id) => {
  try {
    const allNotes = await db.any("SELECT * FROM notes WHERE user_id=$1", id);
    return allNotes;
  } catch (error) {
    return error;
  }
};

const getNote = async (note_id, user_id) => {
  try {
    const targetNote = await db.one("SELECT * FROM notes WHERE note_id=$1 AND user_id=$2", [note_id, user_id]);
    return targetNote;
  } catch (error) {
    return error;
  }
};

const CreateNote = async (note) => {
  try {
    const newNote = await db.one(
      "INSERT INTO notes (user_id, subject_name, title, videos, content, is_favorite) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        note.user_id,
        note.subject_name,
        note.title,
        note.videos,
        note.content,
        note.is_favorite,
      ]
    );
    return newNote;
  } catch (error) {
    return error;
  }
};

const addVideotoNote = async (note_id, videoLink) => {
    
  try {
    const targetNote = await db.one(
      "SELECT * FROM notes WHERE note_id=$1",
      note_id
    );
    const updateVideos = [...targetNote.videos, videoLink];
    await db.none("UPDATE notes SET videos=$1 WHERE note_id=$2", [
      videoLink,
      note_id,
    ]);
    return targetNote;
  } catch (error) {
    console.error("Adding video isn't working");
  }
};

const UpdateNote = async (note) => {

  try {
    const updatedNote = await db.one(
      "UPDATE notes SET subject_name=$1, title=$2, content=$3, is_favorite=$4 WHERE note_id=$5 RETURNING *",
      [note.subject_name, note.title, note.content, note.is_favorite, note.note_id]);
    return updatedNote;
  } catch (error) {
    console.error("Somethings wrong with update:", error);
    throw error;
  }
};

const DeleteNote = async (note_id) => {
    try{
        const deletedNote = await db.one("DELETE FROM notes WHERE note_id=$1 RETURNING *", note_id);
        return deletedNote;
    }catch(error){
        console.error("Something went horibly wrong:", error)
        throw error
    }
};

module.exports = {
    getAllNotes,
    getNote,
    UpdateNote,
    addVideotoNote,
    CreateNote,
    DeleteNote
}