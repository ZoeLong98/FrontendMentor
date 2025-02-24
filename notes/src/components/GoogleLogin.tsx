import Image from "next/image";
import { signupWithGoogle } from "@/actions/auth-actions";

export default function GoogleLogIn() {
  return (
    <section className="flex flex-col text-center w-full mt-6 gap-4">
      <h5 className="text-neutral_600">Or log in with</h5>
      <button
        className="border-button flex flex-row items-center justify-center gap-2"
        onClick={signupWithGoogle}
      >
        <Image src={"/icon-google.svg"} width={24} height={24} alt="google" />
        Google
      </button>
    </section>
  );
}
