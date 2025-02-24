import { Note } from "@/assets/types";
import React from "react";
import NoteList from "@/components/NoteList";
import UnSaved from "@/components/unSaved";

export default function SidebarAllNotes({
  notes,
  filter,
  setCurrentNote,
  setUnsaved,
}: {
  notes: Promise<Note[]>;
  filter: string;
  setCurrentNote: React.Dispatch<React.SetStateAction<Note | null>>;
  setUnsaved: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  console.log(filter);
  return (
    <div className="flex flex-row flex-grow overflow-y-auto pr-4 w-full max-h-screen">
      <section className="flex flex-col gap-2 py-5 px-3 box-border  w-full">
        <UnSaved setCurrentNote={setCurrentNote} setUnsaved={setUnsaved} />
        <NoteList
          notes={notes}
          setCurrentNote={setCurrentNote}
          setUnsaved={setUnsaved}
          filter={filter}
        />
      </section>
    </div>
  );
}
