import { Note } from "@/assets/types";
import NoteForm from "@/components/NoteForm";
import DeletePopup from "./deletePopup";
import ArchivePopup from "./archivePopup";
import { useState } from "react";
import IconComponent from "./IconComponent";
import ArchiveIcon from "@/assets/svgs/icon-archive.svg";
import DeleteIcon from "@/assets/svgs/icon-delete.svg";
import RestoreIcon from "@/assets/svgs/icon-restore.svg";
import { restoreNote } from "@/actions/notes";
import SubmitForm from "@/components/ButtonFile_Mobile";
import Arrow_left from "@/assets/svgs/icon-arrow-left.svg";

function ButtonForm({
  handler,
  Icon,
}: {
  handler: () => void;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <button
      onClick={handler}
      className="flex flex-row gap-2 items-center dark:text-white"
    >
      <div className="h-6 w-6">
        <IconComponent Icon={Icon} />
      </div>
    </button>
  );
}

export default function NoteView({
  note,
  userid,
  unsaved = false,
  presection,
  setActiveSection,
}: {
  note: Note | null;
  userid: string;
  unsaved: boolean;
  presection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showArchivePopup, setShowArchivePopup] = useState(false);

  if (!note) return <div>No Note</div>;
  const handleArchive = async () => {
    setShowArchivePopup(true);
  };
  const handleDelete = async () => {
    setShowDeletePopup(true);
  };
  const handleRestore = async () => {
    await restoreNote(note.id, userid);
    window.location.reload();
  };
  return (
    <div className="flex flex-row h-screen overflow-y-auto pr-4 w-full">
      <div className="flex-grow px-4 mt-6">
        <div className="flex flex-row gap-4 pb-4 border-b-[1px] justify-between">
          <div
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => setActiveSection(presection)}
          >
            <div className="w-6 h-6">
              <IconComponent Icon={Arrow_left} />
            </div>
            <h5>Go Back</h5>
          </div>
          {!unsaved && (
            <section className="flex flex-row gap-4">
              {note.isArchived ? (
                <ButtonForm handler={handleRestore} Icon={RestoreIcon} />
              ) : (
                <ButtonForm handler={handleArchive} Icon={ArchiveIcon} />
              )}
              <ButtonForm handler={handleDelete} Icon={DeleteIcon} />
              {note && <SubmitForm tag={note.id} />}
            </section>
          )}
          {unsaved && note && <SubmitForm tag={note.id} />}
        </div>

        <NoteForm note={note} userid={userid} />
      </div>

      {showDeletePopup && (
        <DeletePopup
          setShowDeletePopup={setShowDeletePopup}
          note={note}
          userid={userid}
        />
      )}
      {showArchivePopup && (
        <ArchivePopup
          setShowArchivePopup={setShowArchivePopup}
          note={note}
          userid={userid}
        />
      )}
    </div>
  );
}
