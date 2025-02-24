import { use } from "react";
import NoteOverview from "@/components/NoteOverview";
import { Note } from "@/assets/types";

export default function NoteList({
  notes,
  setCurrentNote,
  setUnsaved,
  filter,
}: {
  notes: Promise<Note[]>;
  setCurrentNote: React.Dispatch<React.SetStateAction<Note | null>>;
  setUnsaved: React.Dispatch<React.SetStateAction<boolean>>;
  filter: string;
}) {
  const Notes = use(notes);
  const allNotes = Notes.filter((note) => {
    if (filter === "All Notes") {
      return true;
    } else if (filter === "Archive Notes") {
      return note.isArchived;
    } else
      return (
        note.title.toLowerCase().includes(filter.toLowerCase()) ||
        note.content.toLowerCase().includes(filter.toLowerCase()) ||
        note.tags.some((tag) =>
          tag.toLowerCase().includes(filter.toLowerCase())
        )
      );
  });
  const handleClickedNote = (note: Note) => {
    setCurrentNote(note);
    setUnsaved(false);
    console.log(note.title);
  };
  return (
    <>
      {allNotes.map((note, index) => (
        <article key={index} onClick={() => handleClickedNote(note)}>
          {/* <p>{index}</p> */}
          <NoteOverview
            title={note.title}
            tags={note.tags}
            time={note.lastEdited}
          />
        </article>
      ))}
    </>
  );
}
