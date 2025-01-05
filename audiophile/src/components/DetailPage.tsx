import Image from "next/image";
import { DetailPageProps } from "../types";
import Amount from "./Amount";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { CartItem } from "../types";

export default function DetailPage({ item }: DetailPageProps) {
  const router = useRouter();
  const [amount, setAmount] = useState(1);

  const goBack = () => {
    router.back();
  };
  const handleAmountChange = (newAmount: number) => {
    setAmount(newAmount);
  };
  const addToCart = () => {
    const cart = localStorage.getItem("audiophileCart");
    const cartItems = cart ? JSON.parse(cart) : [];

    const existingItemIndex = cartItems.findIndex(
      (cartItem: CartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // Update the existing item's amount
      cartItems[existingItemIndex].amount += amount;
    } else {
      // Add new item to the cart
      cartItems.push({
        id: item.id,
        name: item.name,
        price: item.price,
        amount: amount,
        image: item.image.mobile,
      });
    }

    localStorage.setItem("audiophileCart", JSON.stringify(cartItems));
    console.log("add to cart");
  };
  return (
    <div className="my-14">
      <div className="description cursor-pointer" onClick={goBack}>
        Go Back
      </div>
      <div
        className={`flex flex-col w-full items-start sm:items-center justify-start sm:flex-row sm:gap-8 my-4 md:my-5
      }`}
      >
        <div className="relative w-full md:w-1/2 ">
          <picture>
            <source
              srcSet={item.image.mobile}
              media="(max-width: 640px)" // sm: max-width 640px
            />
            <source
              srcSet={item.image.tablet}
              media="(max-width: 768px)" // md: max-width 768px
            />
            <Image
              src={item.image.desktop}
              alt={item.name}
              layout="responsive"
              objectFit="cover"
              width={500}
              height={500}
              className="rounded-lg w-full "
            />
          </picture>
        </div>
        <div className="text-black w-full max-w-md flex flex-col my-3 sm:my-6 text-left md:w-1/2">
          {item.new && (
            <div className="newProduct text-golden">NEW PRODUCT</div>
          )}
          <div className="title">{item.name}</div>
          <p className="description">{item.description}</p>
          <div className="price mt-5">${item.price}</div>
          <div className="flex justify-start items-center  gap-6 mt-5">
            <Amount a={amount} onAmountChange={handleAmountChange} />
            <button className="yellow-button !m-0" onClick={addToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-12 w-full">
        <div className="md:w-3/5">
          <div className="subtitle !mt-0">FEATURES</div>
          <div className="description">{item.features}</div>
        </div>
        <div className="md:ml-12 w-full md:w-2/5 flex flex-col sm:flex-row md:flex-col">
          <div className="subtitle !mt-0 sm:w-1/2 md:w-full">IN THE BOX</div>
          <div>
            {item.includes.map((item, index) => (
              <div className="mb-2" key={index}>
                <span className="text-primary mr-6">{item.quantity}x</span>
                <span className="description">{item.item} </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* three photos */}
      <div className="flex flex-col sm:flex-row gap-5 my-16 w-full max-w-componentMax">
        <div className="h-500 sm:h-auto sm:w-2/5 flex flex-col gap-5">
          <div className="relative flex-1">
            <Image
              src={item.gallery.first.desktop}
              alt="first"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
          <div className="relative flex-1">
            <Image
              src={item.gallery.second.desktop}
              alt="second"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
        <div className="sm:w-3/5 relative">
          <Image
            src={item.gallery.third.desktop}
            alt="third"
            layout="responsive"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
      </div>

      {/* you may also like */}
      <div className="flex flex-col gap-5 mt-8 w-full items-center">
        <div className="subtitle">YOU MAY ALSO LIKE</div>
        <div className="flex flex-col sm:flex-row gap-5 w-full">
          {item.others.map((item, index) => (
            <div
              className="flex flex-col flex-1 gap-2 items-center mb-8 sm:mb-0"
              key={index}
            >
              <div className="relative flex-1">
                <picture>
                  <source
                    srcSet={item.image.mobile}
                    media="(max-width: 640px)"
                  />
                  <source
                    srcSet={item.image.tablet}
                    media="(max-width: 768px)"
                  />
                  <Image
                    src={item.image.desktop}
                    alt="others"
                    layout="responsive"
                    width={200}
                    height={200}
                    objectFit="cover"
                  />
                </picture>
              </div>
              <div className="subtitle !text-lg">{item.name}</div>
              <Link href={`/detail/${item.slug}`}>
                <button className="yellow-button !mt-0">SEE PRODUCT</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
