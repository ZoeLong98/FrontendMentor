const NoDefinition = () => {
  return (
    <div className="flex flex-col text-center gap-3 mt-24 min-h-screen">
      <div className="text-6xl">🤨</div>
      <h1 className="font-bold text-2xl dark:text-white">
        No Definition Found
      </h1>
      <p className="text-custom-medium text-1xl">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default NoDefinition;
