import Link from "next/link";
import Image from "next/image";

export default function NavigationFooter() {
  return (
    <div className="bg-secondary text-white w-full h-full">
      <div className="max-w-componentMax mx-auto p-8">
        <div className="flex flex-col items-center mx-auto sm:items-start sm:relative">
          <div className="flex flex-col gap-2 h-full w-full lg:flex-row lg:justify-between lg:items-center">
            <Image
              src="/shared/desktop/logo.svg"
              alt="logo"
              width={143}
              height={25}
              className="my-5 mx-auto sm:mx-0"
            />
            <div className="flex flex-col sm:flex-row text-center gap-6 text-sm tracking-widest">
              <Link href="/" className="hover:text-primary">
                HOME
              </Link>
              <Link href="/" className="hover:text-primary">
                HEADPHONES
              </Link>
              <Link href="/" className="hover:text-primary">
                SPEAKERS
              </Link>
              <Link href="/" className="hover:text-primary">
                EARPHONES
              </Link>
            </div>
          </div>
          <p className="text-xs my-6 leading-5 text-gray-500 text-center sm:text-left sm:mb-24 lg:w-1/2">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>
          <div className="text-xs my-4 leading-5 text-gray-500 order-1 sm:absolute sm:bottom-0 sm:left-0">
            Copyright 2021. All Rights Reserved
          </div>
          <div className="flex gap-4 order-2 my-4 sm:absolute sm:bottom-0 sm:right-0">
            <Image
              src={"/shared/desktop/icon-facebook.svg"}
              alt="facebook"
              width={18}
              height={18}
              className="cursor-pointer"
            />

            <Image
              src={"/shared/desktop/icon-twitter.svg"}
              alt="twitter"
              width={18}
              height={18}
              className="cursor-pointer"
            />
            <Image
              src={"/shared/desktop/icon-instagram.svg"}
              alt="instagram"
              width={18}
              height={18}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
