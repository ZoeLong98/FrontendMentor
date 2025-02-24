export default function SubmitForm({ tag }: { tag: string }) {
  if (tag === "unsavednote") {
    const handleUnsaved = () => {
      localStorage.removeItem("unsavedNote");
      window.location.reload();
    };
    return (
      <section className="flex flex-row gap-4">
        <button
          type="submit"
          form="NoteForm"
          className=""
          onClick={handleUnsaved}
        >
          Create Note
        </button>
        <button
          type="reset"
          form="NoteForm"
          className=""
          onClick={handleUnsaved}
        >
          Cancel
        </button>
      </section>
    );
  }
  return (
    <section className="flex flex-row gap-4">
      <button type="submit" form="NoteForm" className="">
        Save Note
      </button>
      <button type="reset" form="NoteForm" className="">
        Cancel
      </button>
    </section>
  );
}
