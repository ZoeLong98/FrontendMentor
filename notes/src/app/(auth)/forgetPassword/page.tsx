"use client";
import Image from "next/image";
import { useActionState } from "react";
import { signup } from "@/actions/auth-actions";
import EmailInput from "@/components/EmailInput";
import Link from "next/link";

export default function SignupForm() {
  const initialState: { message: string; errors: { [key: string]: string } } = {
    message: "",
    errors: {},
  };
  const [formState = initialState, formAction] = useActionState(
    signup,
    initialState
  );
  console.log(formState);
  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 items-center col-start-1 col-end-9 lg:col-start-4 lg:col-end-10 sm:col-start-2 sm:col-end-8  bg-white p-12 border border-neutral_200 rounded-xl h-fit my-auto"
    >
      <Image src={"/logo.svg"} width={95} height={28} alt="logo" />
      <section className="flex flex-col gap-2 text-center">
        <h1>Forgotten your password?</h1>
        <h5 className="text-neutral_500">
          Enter your email below, and we’ll send you a link to reset it.
        </h5>
      </section>

      <section className="w-full mt-5 flex flex-col gap-4">
        <EmailInput />
        <button type="submit" className="primary-button w-full">
          Send Reset Link
        </button>
        <Link href="/login">
          <h5 className="underline">login</h5>
        </Link>
      </section>
    </form>
  );
}
