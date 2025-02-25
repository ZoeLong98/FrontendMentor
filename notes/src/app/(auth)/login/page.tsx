"use client";
import Image from "next/image";
import { useActionState, startTransition } from "react";
import Link from "next/link";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import GoogleLogIn from "@/components/GoogleLogin";
import { login } from "@/actions/auth-actions";
import { FormState } from "@/assets/types";
import ShowMessage from "@/components/ShowMessage";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const { user } = useAuth();
  const initialState: FormState = {
    message: "",
    errors: {},
  };
  const [formState, formAction] = useActionState(login, initialState);
  const handleDefaultlog = async () => {
    const defaultUser = new FormData();
    defaultUser.append("email", "test1@test1.com");
    defaultUser.append("password", "11111111");
    startTransition(() => {
      formAction(defaultUser);
    });
  };

  if (user != null) {
    redirect("/");
  } else {
    console.log(user);
    return (
      <div className="col-start-1 col-end-9 lg:col-start-4 lg:col-end-10 sm:col-start-2 sm:col-end-8  bg-white p-12 border border-neutral_200 rounded-xl my-auto h-fit">
        <form action={formAction} className="flex flex-col gap-4 items-center ">
          <Image src={"/logo.svg"} width={95} height={28} alt="logo" />
          <section className="flex flex-col gap-2 text-center">
            <h1>Welcome to Note</h1>
            <h5 className="text-neutral_500">
              Please log in to continue or{" "}
              <span
                className="underline cursor-pointer text-green-400"
                onClick={handleDefaultlog}
              >
                log in as a default user
              </span>
            </h5>
          </section>

          <section className="w-full mt-5 flex flex-col gap-4">
            <EmailInput />
            <div className="relative">
              <Link
                href="/forgetPassword"
                className="text-xs text-neutral_600 absolute right-0 underline"
              >
                Forget
              </Link>
              <PasswordInput title="Password" name="password" />
            </div>
            {ShowMessage(formState, "/")}

            <button type="submit" className="primary-button w-full">
              Login
            </button>
          </section>
        </form>
        <hr />
        <GoogleLogIn />
        <hr />
        <h5 className="text-neutral_600 text-center">
          No account yet? <Link href="/signup">Sign Up</Link>
        </h5>
      </div>
    );
  }
}
