import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="text-white flex flex-col justify-center items-center relative mt-16">
      <picture className="w-full">
        <source
          srcSet="/home/mobile/image-header.jpg"
          media="(max-width: 640px)" // sm: max-width 640px
        />
        <source
          srcSet="/home/tablet/image-header.jpg"
          media="(max-width: 768px)" // md: max-width 768px
        />
        <Image
          src="/home/desktop/image-hero.jpg"
          alt="header"
          layout="responsive"
          width={1920}
          height={1080}
          className="w-full"
        />
      </picture>
      <div className="absolute md:max-w-componentMax w-full mx-auto flex flex-col items-center md:items-start">
        <div className="max-w-sm px-5 md:ml-16 flex flex-col text-center items-center md:items-start md:text-left">
          <div className="newProduct text-gray-600">NEW PRODUCT</div>
          <div className="title text-4xl sm:text-6xl">
            XX99 Mark II HEADPHONES
          </div>
          <p className="description">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="/detail/xx99-mark-two-headphones">
            <button className="yellow-button">SEE PRODUCT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
