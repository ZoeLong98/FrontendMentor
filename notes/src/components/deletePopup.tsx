import IconComponent from "./IconComponent";
import DeleteIcon from "@/assets/svgs/icon-delete.svg";
import { Note } from "@/assets/types";
import { deleteNote } from "@/actions/notes";

export default function DeletePopup({
  setShowDeletePopup,
  note,
  userid,
}: {
  setShowDeletePopup: (show: boolean) => void;
  note: Note | null;
  userid: string;
}) {
  const handleDelete = async () => {
    if (note) {
      await deleteNote(note.id, userid);
    }
    setShowDeletePopup(false);
    window.location.reload();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ">
      <div className="max-w-[440px] min-w-[343px] flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral_700 rounded-lg">
        <section className="flex flex-row p-5 gap-4 border-b-[1px]">
          <div className="!h-10 !w-20 bg-neutral-100 dark:bg-neutral_600 flex items-center justify-center rounded-lg">
            <div className="h-6 w-6">
              <IconComponent Icon={DeleteIcon} />
            </div>
          </div>
          <div>
            <h3 className="mb-[6px]">Delete Note</h3>
            <h5 className="text-neutral-700  dark:text-neutral_200">
              Are you sure you want to permanently delete this note? This action
              cannot be undone.
            </h5>
          </div>
        </section>
        <section className="flex flex-row justify-end gap-3 px-5 py-4">
          <button
            className="bg-neutral-100 dark:bg-neutral_500  rounded-lg px-4 py-2"
            onClick={() => setShowDeletePopup(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white rounded-lg px-4 py-2"
            onClick={handleDelete}
          >
            Delete Note
          </button>
        </section>
      </div>
    </div>
  );
}
