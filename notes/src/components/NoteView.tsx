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
import SubmitForm from "@/components/ButtonForm";

function ButtonForm({
  handler,
  Icon,
  text,
}: {
  handler: () => void;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
}) {
  return (
    <button
      onClick={handler}
      className="border-button flex flex-row gap-2 items-center dark:text-white"
    >
      <div className="h-6 w-6">
        <IconComponent Icon={Icon} />
      </div>
      {text}
    </button>
  );
}

export default function NoteView({
  note,
  userid,
  unsaved = false,
}: {
  note: Note | null;
  userid: string;
  unsaved: boolean;
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
    <div className="flex flex-row pr-4 w-full">
      <div className="flex-grow px-4">
        <NoteForm note={note} userid={userid} />
        {note && <SubmitForm tag={note.id} />}
      </div>
      {!unsaved && (
        <section className="flex flex-col gap-3 w-1/3 pl-4 pt-5 border-l-[1px]">
          {note.isArchived ? (
            <ButtonForm
              handler={handleRestore}
              Icon={RestoreIcon}
              text="Restore Note"
            />
          ) : (
            <ButtonForm
              handler={handleArchive}
              Icon={ArchiveIcon}
              text="Archive Note"
            />
          )}
          <ButtonForm
            handler={handleDelete}
            Icon={DeleteIcon}
            text="Delete Note"
          />
        </section>
      )}
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
