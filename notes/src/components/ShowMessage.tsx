import { FormState } from "@/assets/types";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ShowMessage(
  formState: FormState,
  redirectTo: string,
  delay = 3000
) {
  useEffect(() => {
    if (formState.message && redirectTo) {
      const timer = setTimeout(() => {
        redirect(redirectTo);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [formState]);

  return (
    <>
      {formState.message && (
        <>
          <p className="text-xs  text-green_500">{formState.message}</p>
          <p className="text-xs text-neutral_600">
            will be directed in 3 seconds
          </p>
        </>
      )}
      {formState.errors && (
        <ul>
          {Object.keys(formState.errors).map((error) => (
            <li key={error} className="text-xs leading-[140%] text-red_500 ">
              {formState.errors[error]}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
