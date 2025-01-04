import Image from "next/image";

export default function End() {
  return (
    <div className="flex flex-col w-full gap-5 md:flex-row my-24 ">
      <div className="md:w-1/2 md:order-2">
        <picture>
          <source
            srcSet="/shared/mobile/image-best-gear.jpg"
            media="(max-width: 640px)" // sm: max-width 640px
          />
          <source
            srcSet="/shared/tablet/image-best-gear.jpg"
            media="(max-width: 768px)" // md: max-width 768px
          />
          <Image
            src={"/shared/desktop/image-best-gear.jpg"}
            alt="earphone"
            layout="responsive"
            width={200}
            height={320}
            className="rounded-lg"
          />
        </picture>
      </div>
      <div className="md:w-1/2 rounded-lg p-8 md:order-1">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <div className="font-medium text-3xl sm:text-4xl tracking-wider uppercase mb-8">
            Bringing you the <span className="text-primaryHover">best</span>{" "}
            audio gear
          </div>
          <div className="description">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </div>
        </div>
      </div>
    </div>
  );
}
