"use client";
import Summary from "@/components/Summary";
import Checkout from "@/components/Checkout";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function MyCart() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormValid = (isValid: boolean) => {
    setIsFormValid(isValid);
  };
  return (
    <div className="flex md:flex-row gap-8 mt-12 w-full bg-warmWhite min-h-screen justify-center">
      <div className="max-w-componentMax w-full flex flex-col my-16 mx-5">
        <div className="text-gray-600 w-full cursor-pointer" onClick={goBack}>
          Go Back
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-3/5">
            <Checkout onFormValid={handleFormValid} />
          </div>
          <div className="w-full md:w-2/5">
            <Summary isValid={isFormValid} />
          </div>
        </div>
      </div>
    </div>
  );
}
