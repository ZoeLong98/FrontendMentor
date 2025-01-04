"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ThreeCategory from "./ThreeCategory";
import Cart from "./Cart";

export default function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const showMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCartOpen(false);
  };
  const showCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // md: max-width 768px
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Check the initial width
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="bg-secondary text-white w-full fixed top-0 z-50">
        <div className="flex justify-between items-center p-8 max-w-componentMax mx-auto h-24 sm:relative">
          <Image
            src="/shared/tablet/icon-hamburger.svg"
            alt="menu"
            width={15}
            height={25}
            onClick={showMenu}
            className="md:hidden sm:absolute sm:left-8 cursor-pointer"
          />
          <Image
            src="/shared/desktop/logo.svg"
            alt="logo"
            width={143}
            height={25}
            className="ml-10 md:ml-0"
          />
          <div className="hidden md:flex gap-8 text-sm tracking-widest">
            <Link href="/" className="hover:text-primary">
              HOME
            </Link>
            <Link href="/headphones" className="hover:text-primary">
              HEADPHONES
            </Link>
            <Link href="/speakers" className="hover:text-primary">
              SPEAKERS
            </Link>
            <Link href="/earphones" className="hover:text-primary">
              EARPHONES
            </Link>
          </div>

          <Image
            src="/shared/desktop/icon-cart.svg"
            alt="cart"
            width={24}
            height={24}
            onClick={showCart}
          />
        </div>
        <div className="max-w-componentMax border-t mx-auto border-gray-800 w-full"></div>
      </div>
      {isMenuOpen && (
        <div className="w-full h-screen bg-black bg-opacity-50 fixed top-0 z-30">
          <div className="w-full bg-white p-5 fixed z-40 top-20">
            <ThreeCategory />
          </div>
        </div>
      )}
      {isCartOpen && <Cart />}
    </>
  );
}
