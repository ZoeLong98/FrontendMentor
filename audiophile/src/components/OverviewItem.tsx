import Image from "next/image";
import { useRouter } from "next/navigation";

interface OverviewItemProps {
  id: number;
  slug: string;
  order: "left" | "right";
  picture: { desktop: string; mobile: string; tablet: string };
  title: string;
  description: string;
  new: boolean;
}

export default function OverviewItem({
  id,
  slug,
  order,
  picture,
  title,
  description,
  new: isNew,
}: OverviewItemProps) {
  const router = useRouter();

  const GoDetail = (): void => {
    router.push(`/detail/${slug}`);
  };

  return (
    <div
      id={id.toString()}
      className={`flex flex-col w-full items-center justify-start sm:flex-row sm:gap-8 my-4 mb-16 md:my-5 ${
        order === "right" ? "sm:flex-row-reverse" : ""
      }`}
    >
      <div className="relative w-full md:w-1/2 ">
        <picture>
          <source
            srcSet={picture.tablet}
            media="(max-width: 640px)" // sm: max-width 640px
          />
          <source
            srcSet={picture.mobile}
            media="(max-width: 768px)" // md: max-width 768px
          />
          <Image
            src={picture.desktop}
            alt={title}
            layout="responsive"
            width={500}
            height={500}
            objectFit="contain"
            className="rounded-lg w-full "
          />
        </picture>
      </div>
      <div
        className={`text-black w-full max-w-md flex flex-col my-3 sm:my-6 sm:mr-auto text-center sm:text-left md:w-1/2 ${
          order === "right" ? "mr-8" : "ml-8"
        }`}
      >
        {isNew && <div className="newProduct text-primary">NEW PRODUCT</div>}
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="yellow-button" onClick={GoDetail}>
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
