import { useEffect, useState } from "react";
import Image from "next/image";
import { CartItem } from "@/types";
import OrderCompleted from "./OrderCompleted";
interface SummaryProps {
  isValid: boolean;
}

export default function Summary({ isValid }: SummaryProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  const continueAndPay = () => {
    if (isValid && cartItems.length > 0) {
      localStorage.removeItem("audiophileCart");
      setIsOrderCompleted(true);
    } else {
      alert("Please fill in the form or add items to the cart");
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
    <>
      {" "}
      <div className="flex flex-col mt-6 w-full bg-white rounded-lg px-8">
        <h2>SUMMARY</h2>
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
                <p>$ {cartItem.price}</p>
              </div>
            </div>
            <div className="text-gray-500">x{cartItem.amount}</div>
          </div>
        ))}
        <div className="flex justify-between ">
          <p>TOTAL</p>
          <div className="font-bold text-lg">$ {total}</div>
        </div>
        <div className="flex justify-between">
          <p>SHIPPING</p>
          <div className="font-bold text-lg">$ {total > 0 ? 50 : 0}</div>
        </div>
        <div className="flex justify-between">
          <p>VAT (INCLUDED)</p>
          <div className="font-bold text-lg">$ {Math.round(0.2 * total)}</div>
        </div>
        <div className="flex justify-between my-3">
          <p>GRAND TOTAL</p>
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
      {isOrderCompleted && (
        <OrderCompleted cartItems={cartItems} total={total} />
      )}
    </>
  );
}
