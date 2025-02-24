"use client";
import Image from "next/image";
import { useActionState } from "react";
import { signup } from "@/actions/auth-actions";
import PasswordInput from "@/components/PasswordInput";

export default function SignupForm() {
  const initialState: { message: string; errors: { [key: string]: string } } = {
    message: "",
    errors: {},
  };
  const [formState = initialState, formAction] = useActionState(
    signup,
    initialState
  );
  return (
    <div className="lg:col-start-4 lg:col-end-10 sm:col-start-2 sm:col-end-8 col-start-1 col-end-9 bg-white p-12 border border-neutral_200 rounded-xl">
      <form action={formAction} className="flex flex-col gap-4 items-center ">
        <Image src={"/images/logo.svg"} width={95} height={28} alt="logo" />
        <section className="flex flex-col gap-2 text-center">
          <h1>Reset Your Account</h1>
          <h5 className="text-neutral_500">
            Choose a new password to secure your account.
          </h5>
        </section>

        <section className="w-full mt-5 flex flex-col gap-4">
          <PasswordInput title="New Password" name="newpassword" />
          <div className="text-neutral_600 flex flex-row gap-2 mt-[-0.5rem]">
            <Image
              src={"/images/icon-info.svg"}
              width={16}
              height={16}
              alt="requirement"
              className=""
            />
            <span className="text-xs leading-[140%]">
              At least 8 characters
            </span>
          </div>
          <PasswordInput
            title="Confirm New Password"
            name="confirmedpassword"
          />
          {formState.message && (
            <p className="text-xs leading-[140%] text-green_500">
              {formState.message}
            </p>
          )}
          {formState.errors && (
            <ul>
              {Object.keys(formState.errors).map((error) => (
                <li
                  key={error}
                  className="text-xs leading-[140%] text-red_500 "
                >
                  {formState.errors[error]}
                </li>
              ))}
            </ul>
          )}
          <button type="submit" className="primary-button w-full">
            Reset Password
          </button>
        </section>
      </form>
    </div>
  );
}
