import Image from "next/image";
import Header from "../components/Header";
import ThreeCategory from "@/components/ThreeCategory";
import End from "@/components/End";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full mx-0">
      <Header />
      <div className="max-w-componentMax px-6 my-12 mx-auto">
        {/* Category Part */}
        <ThreeCategory />
        {/* Star Item */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-12 bg-primary rounded-sm h-fit lg:h-500 ">
          <div className="relative h-60 mt-12 md:h-4/5 self-end ">
            <Image
              src={"/home/desktop/image-speaker-zx9.png"}
              alt="speakerA"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
          <div className="self-center text-white max-w-sm flex flex-col mx-auto my-12 text-center items-center md:items-start md:text-left">
            <h1 className="text-6xl">ZX9 SPEAKER</h1>
            <p className=" !text-white">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link href={"/detail/zx9-speaker"}>
              <button className="black-button">SEE PRODUCT</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start relative h-80 mt-6 justify-center px-8">
          <Image
            src={"/home/desktop/image-speaker-zx7.jpg"}
            alt="speakerB"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="z-10 flex flex-col ">
            <h1>ZX7 SPEAKER</h1>
            <Link href={"/detail/zx7-speaker"}>
              <div className="simple-button">SEE PRODUCT</div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full gap-5 sm:flex-row mt-6">
          <div className="sm:w-1/2">
            <picture>
              <source
                srcSet="/home/mobile/image-earphones-yx1.jpg"
                media="(max-width: 640px)" // sm: max-width 640px
              />
              <source
                srcSet="/home/tablet/image-earphones-yx1.jpg"
                media="(max-width: 768px)" // md: max-width 768px
              />
              <Image
                src={"/home/desktop/image-earphones-yx1.jpg"}
                alt="earphone"
                layout="responsive"
                width={200}
                height={320}
                className="rounded-md"
              />
            </picture>
          </div>
          <div className="bg-warmWhite sm:w-1/2 rounded-lg p-8">
            <div className="z-10 flex flex-col justify-center h-full">
              <h1>YX1 EARPHONES</h1>
              <Link href={"/detail/yx1-earphones"}>
                <div className="simple-button">SEE PRODUCT</div>
              </Link>
            </div>
          </div>
        </div>
        {/* end */}
        <End />
      </div>
    </div>
  );
}
