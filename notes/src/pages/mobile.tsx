import IconComponent from "@/components/IconComponent";
import NavBar from "@/components/navBar";
import NoteList from "@/components/NoteList";
import NoteForm from "@/components/NoteView_Mobile";
import Tags from "@/components/Tags";
import logo from "@/assets/svgs/logo.svg";
import { Note } from "@/assets/types";
import UnSaved from "@/components/unSaved";
import SearchBar from "@/components/SearchBar";
import ArrowLeft from "@/assets/svgs/icon-arrow-left.svg";
import { useState } from "react";
import Settingbar from "@/components/Settingbar";
import ColorTheme from "@/components/ColorTheme";
import Arrow_left from "@/assets/svgs/icon-arrow-left.svg";

export default function Mobile({
  tags,
  notes,
  currentNote,
  user,
  isunsaved,
  activeSection,
  currentRange,
  filter,
  setIsSetting,
  setCurrentRange,
  setFilter,
  setCurrentNote,
  setUnsaved,
  setActiveSection,
}: {
  tags: Promise<string[]>;
  notes: Promise<Note[]>;
  currentNote: Note | null;
  user: { uid: string };
  isunsaved: boolean;
  activeSection: string;
  currentRange: string;
  filter: string | null;
  setIsSetting: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentRange: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentNote: React.Dispatch<React.SetStateAction<Note | null>>;
  setUnsaved: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}) {
  console.log(filter);
  const [preSection, setPreSection] = useState("home");
  const [mode, setMode] = useState("settings");
  const handlepreSection = (preSection: string) => {
    setActiveSection("note");
    setPreSection(preSection);
  };
  return (
    <div className="dark:bg-neutral_800 dark:text-white">
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="w-screen pb-16 pt-12 lg:hidden h-screen overflow-y-scroll">
        <div className="h-16 w-screen py-4 px-8 fixed top-0 bg-white dark:bg-neutral_800 dark:text-white z-10">
          <IconComponent Icon={logo} size="100%" />
        </div>

        {activeSection === "home" ? (
          <div className="px-8 py-6">
            <h1 className="pb-4">All Notes</h1>
            <div onClick={() => handlepreSection("home")}>
              <UnSaved
                setCurrentNote={setCurrentNote}
                setUnsaved={setUnsaved}
              />
              <NoteList
                notes={notes}
                setCurrentNote={setCurrentNote}
                setUnsaved={setUnsaved}
                filter="All Notes"
              />
            </div>
          </div>
        ) : null}
        {activeSection === "note" ? (
          <NoteForm
            note={currentNote}
            userid={user.uid}
            unsaved={isunsaved}
            presection={preSection}
            setActiveSection={setActiveSection}
          />
        ) : null}
        {activeSection === "search" ? (
          <div className="px-8 py-6">
            <h1 className="pb-4">{currentRange}</h1>
            <SearchBar
              setCurrentRange={setCurrentRange}
              setIsSetting={setIsSetting}
            />
            <h5 className="py-4">
              All notes matching &quot;{currentRange}&quot; are displayed below.
            </h5>
            <div onClick={() => handlepreSection("search")}>
              <NoteList
                notes={notes}
                setCurrentNote={setCurrentNote}
                setUnsaved={setUnsaved}
                filter={currentRange}
              />
            </div>
          </div>
        ) : null}
        {activeSection === "archive" ? (
          <div className="px-8 py-6">
            <h1 className="pb-4">Archive Notes</h1>
            <div onClick={() => handlepreSection("archive")}>
              <NoteList
                notes={notes}
                setCurrentNote={setCurrentNote}
                setUnsaved={setUnsaved}
                filter="Archive Notes"
              />
            </div>
          </div>
        ) : null}
        {activeSection === "tags" ? (
          <div className="px-8 py-6">
            {filter !== "All Notes" &&
            filter !== "Archive Notes" &&
            filter !== "" ? (
              <div className="flex flex-col gap-4">
                <div
                  className="flex flex-row gap-2 items-center cursor-pointer"
                  onClick={() => setFilter("")}
                >
                  <div className="w-6 h-6">
                    <IconComponent Icon={ArrowLeft} size="100%" />
                  </div>
                  <h4>All Tags</h4>
                </div>

                <h1>
                  <span className="dark:text-neutral_400">Notes Tagged:</span>
                  {filter}
                </h1>
                <h5>All notes with the ”{filter}” tag are shown here.</h5>
                <div onClick={() => handlepreSection("tags")}>
                  <NoteList
                    notes={notes}
                    setCurrentNote={setCurrentNote}
                    setUnsaved={setUnsaved}
                    filter={filter as string}
                  />
                </div>
              </div>
            ) : (
              <>
                <h1 className="pb-4">Tags</h1>
                <Tags
                  tags={tags}
                  setFilter={setFilter}
                  setCurrentrange={setCurrentRange}
                />
              </>
            )}
          </div>
        ) : null}
        {activeSection === "settings" ? (
          <div className="px-8 py-6 flex flex-col gap-4">
            {mode === "settings" && (
              <>
                <h1>Settings</h1>
                <Settingbar setMode={setMode} />
              </>
            )}
            {mode === "color" && (
              <>
                <div
                  className="flex flex-row gap-2 items-center cursor-pointer"
                  onClick={() => setMode("settings")}
                >
                  <div className="w-6 h-6">
                    <IconComponent Icon={Arrow_left} />
                  </div>
                  <h5>Settings</h5>
                </div>
                <ColorTheme />
              </>
            )}
            {mode === "font" && (
              <>
                <div
                  className="flex flex-row gap-2 items-center cursor-pointer"
                  onClick={() => setMode("settings")}
                >
                  <div className="w-6 h-6">
                    <IconComponent Icon={Arrow_left} />
                  </div>
                  <h5>Settings</h5>
                </div>
                <ColorTheme />
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
