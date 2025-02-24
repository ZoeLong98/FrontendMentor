"use client";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { getTags } from "@/actions/notes";
import { useEffect, useState } from "react";
import { Note } from "@/assets/types";
import { getNotes } from "@/actions/notes";
import Laptop from "@/pages/laptop";
import Mobile from "@/pages/mobile";

export default function Home() {
  const [currentRange, setCurrentRange] = useState<string>("All Notes");
  const [tags, setTags] = useState<Promise<string[]>>(Promise.resolve([]));
  const [notes, setNotes] = useState<Promise<Note[]>>(Promise.resolve([]));
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [filter, setFilter] = useState<string | null>("All Notes");
  const [isunsaved, setUnsaved] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isSetting, setIsSetting] = useState(false);
  const { user } = useAuth();
  console.log(currentNote);
  useEffect(() => {
    if (user && user.uid) {
      const notes = getNotes(user.uid);
      const tags = getTags(user.uid);
      setTags(tags);
      setNotes(notes);
    }
  }, [user]);

  if (user != null) {
    return (
      <div className="w-screen">
        <Mobile
          tags={tags}
          notes={notes}
          currentNote={currentNote}
          user={user}
          isunsaved={isunsaved}
          currentRange={currentRange}
          filter={filter}
          setIsSetting={setIsSetting}
          setCurrentRange={setCurrentRange}
          setFilter={setFilter}
          setCurrentNote={setCurrentNote}
          setUnsaved={setUnsaved}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <Laptop
          tags={tags}
          notes={notes}
          currentNote={currentNote}
          userid={user.uid}
          isunsaved={isunsaved}
          currentRange={currentRange}
          isSetting={isSetting}
          setIsSetting={setIsSetting}
          setCurrentRange={setCurrentRange}
          setFilter={setFilter}
          setCurrentNote={setCurrentNote}
          setUnsaved={setUnsaved}
        />
      </div>
    );
  } else {
    redirect("/login");
  }
}
