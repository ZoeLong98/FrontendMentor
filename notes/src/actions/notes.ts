"use server";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebase.config";
import { Note, FormState_Simple } from "@/assets/types";

export async function getNotes(userid: string) {
  const collectionRef = collection(db, "users", userid, "notes");
  const querySnapshot = await getDocs(collectionRef);

  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      content: data.content,
      tags: data.tags || [],
      lastEdited: data.lastEdited || new Date(),
      isArchived: data.isArchived || false,
    } as Note;
  });
}

export async function getTags(userid: string) {
  console.log("getting tags for user");
  const notes = await getNotes(userid);
  const tags = notes.map((note) => note.tags).flat();
  return Array.from(new Set(tags));
}

export async function getFilteredNotes({
  filterWord,
  userid,
}: {
  filterWord: string;
  userid: string;
}) {
  const notes = await getNotes(userid);
  return notes.filter((note) => {
    if (filterWord === "All Notes") {
      return notes;
    } else if (filterWord === "Archive Notes") {
      return note.isArchived;
    } else {
      return note.tags.includes(filterWord);
    }
  });
}

export async function updateNote(
  previousState: FormState_Simple,
  formData: FormData
) {
  try {
    const docRef = doc(
      db,
      "users",
      formData.get("userid") as string,
      "notes",
      formData.get("id") as string
    );
    await setDoc(
      docRef,
      {
        tags: formData.get("Tags")?.toString().split(","),
        title: formData.get("title"),
        content: formData.get("content"),
        lastEdited: new Date().toISOString(),
      },
      { merge: true }
    );

    return { message: "Note updated successfully" };
  } catch (e) {
    console.error(e);
    return { message: "Failed to update note" };
  }
}

export async function createNote(
  previousState: FormState_Simple,
  formData: FormData
) {
  try {
    await addDoc(
      collection(db, "users", formData.get("userid") as string, "notes"),
      {
        tags: formData.get("Tags")?.toString().split(","),
        title: formData.get("title"),
        content: formData.get("content"),
        lastEdited: new Date().toISOString(),
      }
    );
    // localStorage.removeItem("unsavedNote");
    return { message: "Note created successfully" };
  } catch (e) {
    throw e;
  }
}

export async function archiveNote(noteId: string, userid: string) {
  try {
    const noteRef = doc(db, "users", userid, "notes", noteId);
    await setDoc(
      noteRef,
      {
        isArchived: true,
      },
      { merge: true }
    );
    return { message: "Note archived successfully" };
  } catch (e) {
    console.error(e);
    return { message: "Failed to archive note" };
  }
}

export async function restoreNote(noteId: string, userid: string) {
  try {
    const noteRef = doc(db, "users", userid, "notes", noteId);
    await setDoc(
      noteRef,
      {
        isArchived: false,
      },
      { merge: true }
    );
    return { message: "Note restored successfully" };
  } catch (e) {
    console.error(e);
    return { message: "Failed to restore note" };
  }
}

export async function deleteNote(noteId: string, userid: string) {
  try {
    const noteRef = doc(db, "users", userid, "notes", noteId);
    await deleteDoc(noteRef);
    return { message: "Note deleted successfully" };
  } catch (e) {
    console.error(e);
    return { message: "Failed to delete note" };
  }
}

export async function searchNotes({
  searchWord,
  userid,
}: {
  searchWord: string;
  userid: string;
}) {
  const notes = await getNotes(userid);
  return notes.filter((note) => {
    return (
      note.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      note.content.toLowerCase().includes(searchWord.toLowerCase()) ||
      note.tags.some((tag) =>
        tag.toLowerCase().includes(searchWord.toLowerCase())
      )
    );
  });
}
