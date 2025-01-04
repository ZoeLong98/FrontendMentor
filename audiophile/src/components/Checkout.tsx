import { useState, useEffect } from "react";

export default function Checkout({
  onFormValid,
}: {
  onFormValid: (isValid: boolean) => void;
}) {
  const [paymentMethod, setPaymentMethod] = useState("emoney");
  const [isFormValid, setIsFormValid] = useState(false);
  const handleFormChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const requiredFields = form.querySelectorAll("[required]");
    const allFilled = Array.from(requiredFields).every(
      (field: any) => field.value.trim() !== ""
    );
    setIsFormValid(allFilled);
  };
  useEffect(() => {
    const form = document.querySelector("form");
    if (form) {
      const requiredFields = form.querySelectorAll("[required]");
      const allFilled = Array.from(requiredFields).every(
        (field: any) => field.value.trim() !== ""
      );
      setIsFormValid(allFilled);
    }
  }, [paymentMethod]);
  useEffect(() => {
    onFormValid(isFormValid);
  }, [isFormValid, onFormValid]);

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="w-full bg-white mt-6 px-8 py-1 rounded-lg">
      <div className="subtitle">CHECKOUT</div>
      <form action="submit" onChange={handleFormChange}>
        <div className="sm:mb-8">
          <div className="text-primary text-sm my-3">BILLING DETAILS</div>
          <div className="flex flex-row w-full gap-3 mb-3">
            <label className="flex flex-col gap-2 sm:w-1/2">
              Name
              <input
                type="text"
                id="name"
                className="w-full border rounded-lg p-3"
                placeholder="Alexei Ward"
                required
              />
            </label>
            <label className="flex flex-col gap-2 sm:w-1/2">
              Email Address
              <input
                type="email"
                id="emailAddress"
                className="w-full border rounded-lg p-3"
                placeholder="alexeiward@mail.com"
                required
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 sm:w-1/2 pr-2">
            Phone Number
            <input
              type="text"
              id="phoneNumber"
              className="w-full border rounded-lg p-3"
              placeholder="+1 202-555-0136"
              required
            />
          </label>
        </div>
        <div className="sm:mb-8">
          <div className="text-primary text-sm my-3">SHIPPING INFO</div>
          <label className="flex flex-col gap-2 mb-3">
            Your Address
            <input
              type="text"
              id="address"
              className="w-full border rounded-lg p-3"
              placeholder="1137 Williams Avenue"
              required
            />
          </label>
          <div className="flex flex-row w-full gap-3 mb-3">
            <label className="flex flex-col gap-2 sm:w-1/2">
              ZIP Code
              <input
                type="text"
                id="zipcode"
                className="w-full border rounded-lg p-3"
                placeholder="10001"
                required
              />
            </label>
            <label className="flex flex-col gap-2 sm:w-1/2">
              City
              <input
                type="text"
                id="city"
                className="w-full border rounded-lg p-3"
                placeholder="New York"
                required
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 sm:w-1/2 pr-2">
            Country
            <input
              type="text"
              id="country"
              className="w-full border rounded-lg p-3"
              placeholder="United States"
              required
            />
          </label>
        </div>
        <div className="sm:mb-8">
          <div className="text-primary text-sm my-3">PAYMENT DETAILS</div>
          <div className="flex flex-row justify-between mb-3">
            <div>Payment Method</div>
            <div className="flex flex-col gap-3 w-1/2">
              <label className="border p-3 rounded-lg">
                <input
                  type="radio"
                  name="method"
                  value="emoney"
                  onChange={handlePaymentMethodChange}
                  defaultChecked
                />
                e-Money
              </label>
              <label className="border p-3 rounded-lg">
                <input
                  type="radio"
                  name="method"
                  value="cash"
                  onChange={handlePaymentMethodChange}
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          <div className="flex flex-row w-full gap-3">
            <label className="flex flex-col gap-2 sm:w-1/2">
              e-Money Number
              <input
                type="text"
                id="emoneyNumber"
                className="w-full border rounded-lg p-3"
                placeholder="238521993"
                required={paymentMethod === "emoney"}
              />
            </label>
            <label className="flex flex-col gap-2 sm:w-1/2">
              e-Money PIN
              <input
                type="text"
                id="emoneyPin"
                className="w-full border rounded-lg p-3"
                placeholder="6891"
                required={paymentMethod === "emoney"}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
