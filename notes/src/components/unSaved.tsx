import React, { useEffect, useState } from "react";
import { Note } from "@/assets/types";
import NoteOverview from "@/components/NoteOverview";

export default function UnSaved({
  setCurrentNote,
  setUnsaved,
}: {
  setCurrentNote: React.Dispatch<React.SetStateAction<Note | null>>;
  setUnsaved: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [unsavedNote, setUnsavedNote] = useState<Note | null>(null);

  useEffect(() => {
    const savedNote = localStorage.getItem("unsavedNote");
    if (savedNote) {
      setUnsavedNote(JSON.parse(savedNote));
    }
  }, []);

  const handleCreateNote = () => {
    alert("Create new note");
    const newNote: Note = {
      id: "unsavednote",
      title: "Untitled",
      content: "",
      tags: [],
      lastEdited: new Date().toISOString(),
      isArchived: false,
    };
    setUnsaved(true);
    setUnsavedNote(newNote);
    setCurrentNote(newNote);
  };
  return (
    <>
      <button
        className="primary-button hidden lg:flex w-full justify-center"
        onClick={handleCreateNote}
      >
        + Create New Note
      </button>
      <div
        className="fixed text-3xl bottom-24 right-4 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer lg:hidden"
        onClick={handleCreateNote}
      >
        +
      </div>
      {unsavedNote && (
        <div
          onClick={() => {
            setCurrentNote(unsavedNote);
            setUnsaved(true);
          }}
        >
          <NoteOverview
            title={unsavedNote.title}
            tags={unsavedNote.tags}
            time={unsavedNote.lastEdited}
          />
        </div>
      )}
    </>
  );
}
