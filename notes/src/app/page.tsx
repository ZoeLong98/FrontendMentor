"use client";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { getTags, getNotes } from "@/actions/notes";
import { useEffect, useState } from "react";
import { Note } from "@/assets/types";
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
  const { user, loading } = useAuth(); // 添加 loading 状态
  console.log(currentNote);

  useEffect(() => {
    if (user && user.uid) {
      const notes = getNotes(user.uid);
      const tags = getTags(user.uid);
      setTags(tags);
      setNotes(notes);
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        redirect("/login");
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [loading, user]);

  if (loading) {
    // 显示加载指示器
    return (
      <div className="flex justify-center items-center h-screen w-screen text-5xl text-blue-700">
        Loading...
      </div>
    );
  }

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
  }
}
