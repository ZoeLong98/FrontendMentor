import IconComponent from "./IconComponent";
import HidePassword from "@/assets/svgs/icon-hide-password.svg";
import ShowPassword from "@/assets/svgs/icon-show-password.svg";
import { useState } from "react";

export default function PasswordInput({
  title,
  name,
}: {
  title: string;
  name: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section>
      <label htmlFor={name}>
        <h5>{title}</h5>
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id="password"
          className="w-full mt-1"
        />
        <div
          className="w-6 h-6 absolute right-3 top-4 stro"
          onClick={() => setShowPassword(!showPassword)}
        >
          <IconComponent
            Icon={showPassword ? HidePassword : ShowPassword}
            size="100%"
          />
        </div>
      </div>
    </section>
  );
}
