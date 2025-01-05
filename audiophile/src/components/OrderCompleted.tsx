import Image from "next/image";
import Link from "next/link";
import { CartItem } from "@/types";
interface OrderCompletedProps {
  cartItems: CartItem[]; // Replace 'any' with the appropriate type if known
  total: number;
}

export default function OrderCompleted({
  cartItems,
  total,
}: OrderCompletedProps) {
  return (
    <div className="fixed z-30 w-screen h-screen top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg sm:w-[540px]">
        <Image
          src="/checkout/icon-order-confirmation.svg"
          alt="check"
          width={50}
          height={50}
        />

        <h1 className="text-3xl sm:text-4xl font-medium mt-4">
          Thank you <br />
          for your order
        </h1>
        <p className="text-gray-500 font-thin mt-4">
          You will receive an email confirmation shortly.
        </p>
        <div className="w-full flex flex-col sm:flex-row rounded-lg mt-3">
          <div className="bg-warmWhite p-5 sm:w-3/5">
            <div className="flex justify-between mb-3">
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src={cartItems[0].image}
                  alt={cartItems[0].name}
                  width={50}
                  height={50}
                />
                <div className="flex-1 ">
                  <div>
                    {cartItems[0].name.replace(
                      /speaker|headphones|earphones/gi,
                      ""
                    )}
                  </div>
                  <div className="description">$ {cartItems[0].price}</div>
                </div>
              </div>
              <div className="text-gray-500">x{cartItems[0].amount}</div>
            </div>

            {cartItems.length > 1 && (
              <>
                <div className="border-t-[2px]"></div>
                <div className="w-full text-center description mt-2">
                  And {cartItems.length - 1} other item(s)
                </div>
              </>
            )}
          </div>
          <div className="bg-black p-5 sm:w-2/5">
            <div className="text-gray-400 font-thin text-[15px] ">
              GRAND TOTAL
            </div>
            <div className="text-white text-[18px] font-bold mt-3">
              $ {total}
            </div>
          </div>
        </div>
        <Link href={"/"}>
          <button className="w-full bg-primary text-center py-2 text-white mt-5">
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
}
