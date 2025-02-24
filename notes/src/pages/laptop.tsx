import SidebarAllNotes from "@/components/SidebarAllNotes";
import Sidebar from "@/components/Sidebar";
import NoteView from "@/components/NoteView";
import { Suspense, useState } from "react";
import { Note } from "@/assets/types";
import SearchBar from "@/components/SearchBar";
import IconComponent from "@/components/IconComponent";
import Setting from "@/assets/svgs/icon-settings.svg";
import Settingbar from "@/components/Settingbar";
import ColorTheme from "@/components/ColorTheme";
import FontTheme from "@/components/FontTheme";

export default function Laptop({
  tags,
  notes,
  currentNote,
  userid,
  isunsaved,
  currentRange,
  isSetting,
  setIsSetting,
  setCurrentRange,
  setFilter,
  setCurrentNote,
  setUnsaved,
}: {
  tags: Promise<string[]>;
  notes: Promise<Note[]>;
  currentNote: Note | null;
  userid: string;
  isunsaved: boolean;
  currentRange: string;
  isSetting: boolean;
  setIsSetting: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentRange: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentNote: React.Dispatch<React.SetStateAction<Note | null>>;
  setUnsaved: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleSettings = () => {
    setIsSetting(true);
    setCurrentRange("Settings");
  };
  const [mode, setMode] = useState("color");
  return (
    <div className="lg:flex flex-row gap-2 hidden w-screen bg-white dark:bg-neutral_800 dark:text-white">
      <Suspense
        fallback={
          <div className=" w-[272px] items-start border-r border-gray-200">
            Loading...
          </div>
        }
      >
        <Sidebar
          tags={tags}
          setFilter={setFilter}
          setCurrentrange={setCurrentRange}
          setIsSetting={setIsSetting}
        />
      </Suspense>
      <div className="flex-grow flex flex-col">
        <section className="w-full px-8 py-4 border-b border-gray-200 flex flex-row justify-between items-center">
          <h1>{currentRange}</h1>
          <div className="w-fit flex flex-row gap-3 items-center">
            <SearchBar
              setCurrentRange={setCurrentRange}
              setIsSetting={setIsSetting}
            />
            <div className="w-6 h-6 cursor-pointer" onClick={handleSettings}>
              <IconComponent Icon={Setting} />
            </div>
          </div>
        </section>
        {!isSetting ? (
          <div className="grid grid-cols-12 flex-grow">
            <section className="col-start-1 col-end-4 border-r-[1px] h-full">
              <Suspense fallback={<div>Loading...</div>}>
                <SidebarAllNotes
                  notes={notes}
                  filter={currentRange}
                  setCurrentNote={setCurrentNote}
                  setUnsaved={setUnsaved}
                />
              </Suspense>
            </section>
            <article className="col-start-4 col-end-13">
              <Suspense>
                <NoteView
                  note={currentNote}
                  userid={userid}
                  unsaved={isunsaved}
                />
              </Suspense>
            </article>
          </div>
        ) : (
          <div className="grid grid-cols-12 flex-grow">
            <Settingbar setMode={setMode} />
            {mode === "color" && <ColorTheme />}
            {mode === "font" && <FontTheme />}
          </div>
        )}
      </div>
    </div>
  );
}
