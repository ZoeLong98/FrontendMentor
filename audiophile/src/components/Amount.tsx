import React from "react";

interface AmountProps {
  a: number;
  onAmountChange: (newAmount: number) => void;
}

const Amount: React.FC<AmountProps> = ({ a, onAmountChange }) => {
  const [amount, setAmount] = React.useState(a);
  const add = () => {
    const newAmount = amount + 1;
    setAmount(newAmount);
    onAmountChange(newAmount);
  };
  const subtract = () => {
    const newAmount = amount > 1 ? amount - 1 : 1;
    setAmount(newAmount);
    onAmountChange(newAmount);
  };
  return (
    <div className="flex justify-center gap-8 w-32 h-12 bg-gray-200 font-manrope p-3">
      <div className="text-gray-500 cursor-pointer" onClick={subtract}>
        -
      </div>
      <div>{amount}</div>
      <div className="text-gray-500 cursor-pointer" onClick={add}>
        +
      </div>
    </div>
  );
};

export default Amount;
