import Category from "./Category";

export default function ThreeCategory() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-3 w-full">
      <Category
        category="HEADPHONES"
        picture="/shared/desktop/image-category-thumbnail-headphones.png"
      />
      <Category
        category="SPEAKERS"
        picture="/shared/desktop/image-category-thumbnail-speakers.png"
      />
      <Category
        category="EARPHONES"
        picture="/shared/desktop/image-category-thumbnail-earphones.png"
      />
    </div>
  );
}
