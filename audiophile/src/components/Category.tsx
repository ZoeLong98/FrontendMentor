import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
  category: string;
  picture: string;
}

export default function Category({ category, picture }: CategoryProps) {
  return (
    <div className="bg-warmWhite w-full mt-16 flex flex-col items-center rounded-lg h-40 md:h-52 relative">
      <div className="absolute transform -translate-y-1/3 w-1/3 sm:w-2/3 ">
        <Image
          src={picture}
          alt={category}
          layout="responsive"
          width={50}
          height={50}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col items-center justify-end h-full mb-2">
        <div className="font-medium text-lg tracking-wider">{category}</div>

        <Link
          href={`/${category.toLowerCase()}`}
          className="flex flex-row cursor-pointer items-center gap-2 my-3"
        >
          <div className="text-sm text-gray-500">SHOP</div>
          <div className="w-1 h-1">
            <Image
              src="/shared/desktop/icon-arrow-right.svg"
              width={5}
              height={5}
              alt="Arrow right"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
