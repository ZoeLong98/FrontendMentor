import { useEffect, useState } from "react";
import { CartItem } from "@/types";
import Image from "next/image";
import Amount from "./Amount";
import Link from "next/link";
import { Product } from "@/types";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAmountChange = (id: number) => (newAmount: number) => {
    const cart = localStorage.getItem("audiophileCart");
    if (cart) {
      const items = JSON.parse(cart);

      const itemIndex = items.findIndex((item: Product) => item.id === id);
      if (itemIndex !== -1) {
        items[itemIndex].amount = newAmount;
        localStorage.setItem("audiophileCart", JSON.stringify(items));
      }
    }
  };

  const removeAll = () => {
    localStorage.removeItem("audiophileCart");
    setCartItems([]);
    setTotal(0);
  };

  useEffect(() => {
    const cart = localStorage.getItem("audiophileCart");
    if (cart) {
      const items = JSON.parse(cart);
      setCartItems(items);
      let total = 0;
      items.forEach((cartItem: CartItem) => {
        console.log(cartItem.price);
        total += cartItem.price * cartItem.amount;
      });
      setTotal(total);
    }
  }, []);
  return (
    <div className="z-30 bg-black fixed bg-opacity-50 w-full h-screen top-0 right-0">
      <div className="bg-white w-96 px-8 pb-8 fixed top-28 right-0 rounded-lg">
        <div className="flex justify-between items-center">
          <h2>CART ({cartItems.length})</h2>
          <p className="cursor-pointer" onClick={removeAll}>
            Remove all
          </p>
        </div>

        {cartItems.map((cartItem: CartItem) => (
          <div className="flex justify-between mb-6 " key={cartItem.id}>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={cartItem.image}
                alt={cartItem.name}
                width={50}
                height={50}
              />
              <div className="flex-1 ">
                <div>
                  {cartItem.name.replace(/speaker|headphones|earphones/gi, "")}
                </div>
                <p>$ {cartItem.price}</p>
              </div>
            </div>
            <Amount
              a={cartItem.amount}
              onAmountChange={handleAmountChange(cartItem.id)}
            />
          </div>
        ))}
        <div className="flex justify-between my-3">
          <p>TOTAL</p>
          <div className="font-bold text-lg">$ {total}</div>
        </div>
        <Link href={"/checkout"}>
          <button className="bg-primary text-white w-full py-3 rounded-lg">
            CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  );
}
