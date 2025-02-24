export default function SubmitForm({ tag }: { tag: string }) {
  if (tag === "unsavednote") {
    const handleUnsaved = () => {
      localStorage.removeItem("unsavedNote");
      window.location.reload();
    };
    return (
      <section className="flex flex-row gap-3 border-t-[1px] pt-3">
        <button
          type="submit"
          form="NoteForm"
          className="primary-button"
          onClick={handleUnsaved}
        >
          Create Note
        </button>
        <button
          type="reset"
          form="NoteForm"
          className="secondary-button"
          onClick={handleUnsaved}
        >
          Cancel
        </button>
      </section>
    );
  }
  return (
    <section className="flex flex-row gap-3 border-t-[1px] pt-3">
      <button type="submit" form="NoteForm" className="primary-button">
        Save Note
      </button>
      <button type="reset" form="NoteForm" className="secondary-button">
        Cancel
      </button>
    </section>
  );
}
