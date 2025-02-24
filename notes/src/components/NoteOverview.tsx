import TagView from "@/components/TagView";

export default function NoteOverview({
  title,
  tags,
  time,
}: {
  title: string;
  tags: string[];
  time: string;
}) {
  console.log(time);
  return (
    <>
      <section className="flex flex-col gap-3 p-2 hover:bg-neutral_100 dark:hover:bg-neutral_600 rounded-md w-full">
        <h3 className="text-neutral_950 dark:text-white">{title}</h3>
        {tags && (
          <div className="flex flex-row gap-1">
            {tags.map(
              (tag) => tag !== "" && <TagView key={tag} tagname={tag} />
            )}
          </div>
        )}
      </section>
    </>
  );
}
