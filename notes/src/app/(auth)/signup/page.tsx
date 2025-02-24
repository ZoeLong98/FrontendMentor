"use client";
import Image from "next/image";
import { useActionState } from "react";
import { signup } from "@/actions/auth-actions";
import Link from "next/link";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import GoogleLogIn from "@/components/GoogleLogin";
import { FormState } from "@/assets/types";
import ShowMessage from "@/components/ShowMessage";

export default function SignupForm() {
  const initialState: FormState = {
    message: "",
    errors: {},
  };
  const [formState, formAction] = useActionState(signup, initialState);

  return (
    <div className="lg:col-start-4 lg:col-end-10 sm:col-start-2 sm:col-end-8 col-start-1 col-end-9 bg-white p-12 border border-neutral_200 rounded-xl h-fit my-auto">
      <form action={formAction} className="flex flex-col gap-4 items-center ">
        <Image src={"/logo.svg"} width={95} height={28} alt="logo" />
        <section className="flex flex-col gap-2 text-center">
          <h1>Create Your Account</h1>
          <h5 className="text-neutral_500">
            Sign up to start organizing your notes and boost your productivity.
          </h5>
        </section>

        <section className="w-full mt-5 flex flex-col gap-4">
          <EmailInput />
          <PasswordInput title="Password" name="password" />
          <div className="text-neutral_600 flex flex-row gap-2 my-[-0.5rem]">
            <Image
              src={"/icon-info.svg"}
              width={16}
              height={16}
              alt="requirement"
              className=""
            />
            <span className="text-xs leading-[140%]">
              At least 8 characters
            </span>
          </div>
          {ShowMessage(formState, "/")}
          <button type="submit" className="primary-button w-full">
            Sign Up
          </button>
        </section>
      </form>
      <hr />
      <GoogleLogIn />
      <hr />
      <h5 className="text-neutral_600 text-center">
        Already have an account? <Link href="/login">Log in</Link>
      </h5>
    </div>
  );
}
