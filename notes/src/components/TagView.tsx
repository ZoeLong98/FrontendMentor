export default function TagView({ tagname }: { tagname: string }) {
  return (
    <div className="px-[0.375rem] py-[0.125rem] bg-neutral-200 rounded dark:bg-neutral-600">
      <h6 className="text-neutral-950 dark:text-white">{tagname}</h6>
    </div>
  );
}
