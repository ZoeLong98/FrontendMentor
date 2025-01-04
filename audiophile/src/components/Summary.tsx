import { useEffect, useState } from "react";
import Image from "next/image";
import { CartItem } from "@/types";

interface SummaryProps {
  isValid: boolean;
}

export default function Summary({ isValid }: SummaryProps) {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const continueAndPay = () => {
    if (isValid) {
      localStorage.removeItem("audiophileCart");
      alert("Thank you for shopping with us!");
    } else {
      alert("Please fill in the form");
    }
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
    <div className="flex flex-col mt-6 w-full bg-white rounded-lg px-8">
      <div className="bg-white subtitle">SUMMARY</div>
      {cartItems.map((cartItem: CartItem) => (
        <div className="flex justify-between mb-6" key={cartItem.id}>
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
              <div className="description">$ {cartItem.price}</div>
            </div>
          </div>
          <div className="text-gray-500">x{cartItem.amount}</div>
        </div>
      ))}
      <div className="flex justify-between ">
        <div className="description">TOTAL</div>
        <div className="font-bold text-lg">$ {total}</div>
      </div>
      <div className="flex justify-between">
        <div className="description">SHIPPING</div>
        <div className="font-bold text-lg">$ {total > 0 ? 50 : 0}</div>
      </div>
      <div className="flex justify-between">
        <div className="description">VAT (INCLUDED)</div>
        <div className="font-bold text-lg">$ {Math.round(0.2 * total)}</div>
      </div>
      <div className="flex justify-between my-3">
        <div className="description">GRAND TOTAL</div>
        <div className="font-bold text-lg text-primary">
          $ {total > 0 ? total + 50 : 0}
        </div>
      </div>
      <button
        className="bg-primary text-white py-3 my-6"
        onClick={continueAndPay}
      >
        CONTINUE & PAY
      </button>
    </div>
  );
}
