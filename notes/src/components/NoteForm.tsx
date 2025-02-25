import { useActionState, useEffect, useState } from "react";
import { updateNote, createNote } from "@/actions/notes";
import { FormState_Simple } from "@/assets/types";
import { Note } from "@/assets/types";
import Label from "./Label";
import tagIcon from "@/assets/svgs/icon-tag.svg";
import clock from "@/assets/svgs/icon-clock.svg";

export default function NoteForm({
  note,
  userid,
}: {
  note: Note | null;
  userid: string;
}) {
  const [title, setTitle] = useState(note?.title || "");
  const [tags, setTags] = useState(note?.tags.join(", ") || "");
  const [lastEdited, setLastEdited] = useState(note?.lastEdited || "");
  const [content, setContent] = useState(note?.content || "");
  const initialState: FormState_Simple = {
    message: "",
  };

  const [state, action, isPending] = useActionState(
    note?.id && note.id !== "unsavednote" ? updateNote : createNote,
    initialState
  );

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setTags(note.tags.join(", "));
      setLastEdited(note.lastEdited);
      setContent(note.content);
    } else {
      setTitle("");
      setTags("");
      setLastEdited("");
      setContent("");
    }
  }, [note]);

  useEffect(() => {
    if (state.message) {
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  }, [state.message]);

  return (
    <form
      id="NoteForm"
      action={action}
      className="flex flex-col px-6 py-5 h-fit flex-grow relative"
    >
      <input name="userid" type="hidden" value={userid} />
      {note && <input name="id" type="hidden" value={note.id} />}
      <input
        type="text"
        name="title"
        className="mb-4 border-none text-2xl leading-[120%] font-bold tracking-[-0.5px] p-0 dark:bg-neutral_800"
        value={title}
        placeholder="Enter a title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <Label
        label="Tags"
        content={tags}
        icon={tagIcon}
        placeholder="Add tags seperatedby commas (e.g. Work, Planning)"
      />
      <Label
        label="Last Edited"
        content={lastEdited}
        icon={clock}
        placeholder="Not yet saved"
      />
      <hr />
      <textarea
        className="overflow-y-auto w-full h-[55vh] text-sm tracking-[-0.1px] leading-[130%] font-normal text-neutral_600 flex-grow dark:text-white dark:bg-neutral_800"
        value={content}
        name="content"
        onChange={(e) => setContent(e.target.value)}
        rows={80}
        placeholder="Start typing your note here..."
      />
      <div className="mt-4 absolute bottom-8 ">
        {isPending && <p className="text-blue-500">Saving...</p>}
        {state.message && <p className="text-green-500">{state.message}</p>}
      </div>
    </form>
  );
}
