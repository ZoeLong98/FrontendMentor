import IconComponent from "./IconComponent";
import ArchiveIcon from "@/assets/svgs/icon-archive.svg";
import { Note } from "@/assets/types";
import { archiveNote } from "@/actions/notes";

export default function ArchivePopup({
  setShowArchivePopup,
  note,
  userid,
}: {
  setShowArchivePopup: (show: boolean) => void;
  note: Note | null;
  userid: string;
}) {
  const handleArchive = async () => {
    if (note) {
      await archiveNote(note.id, userid);
    }
    setShowArchivePopup(false);
    window.location.reload();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ">
      <div className="max-w-[440px] min-w-[343px] flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral_700 rounded-lg">
        <section className="flex flex-row p-6 gap-4 border-b-[1px]">
          <div className="!h-10 !w-20 bg-neutral-100 dark:bg-neutral_600 flex items-center justify-center rounded-lg">
            <div className="h-6 w-6">
              <IconComponent Icon={ArchiveIcon} />
            </div>
          </div>
          <div>
            <h3 className="mb-[6px]">Archive Note</h3>
            <h5 className="text-neutral_700 dark:text-neutral_200">
              Are you sure you want to archive this note? You can find it in the
              Archived Notes section and restore it anytime.
            </h5>
          </div>
        </section>
        <section className="flex flex-row justify-end gap-3 px-5 py-4">
          <button
            className="bg-neutral-100 dark:bg-neutral_500 rounded-lg px-4 py-2"
            onClick={() => setShowArchivePopup(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white rounded-lg px-4 py-2"
            onClick={handleArchive}
          >
            Archive Note
          </button>
        </section>
      </div>
    </div>
  );
}
