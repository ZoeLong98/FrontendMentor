"use client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase.config";
import { FormState } from "@/assets/types";

export async function signup(prevState: FormState, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const state = { message: "", errors: { email: "", password: "" } };
  if (email === null || !email.includes("@")) {
    state.errors.email = "Please enter a valid email address";
  }

  if (!password || password.length < 6) {
    state.errors.password =
      "Password length does not exist or is less than 6 characters";
  }

  if (state.errors.email !== "" || state.errors.password !== "") {
    return state;
  } else {
    try {
      console.log("Creating account...");
      await createUserWithEmailAndPassword(auth, email, password);
      state.message = "Account created successfully!";
      console.log("Account created successfully");
      return state;
      // Redirect to a protected route or perform other actions
    } catch (error) {
      state.errors.email = `Error signing up: ${error}`;
      return state;
    }
  }
}

export async function signupWithGoogle() {
  await signInWithPopup(auth, new GoogleAuthProvider());
}

export async function login(prevState: FormState, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const state = { message: "", errors: { error: "" } };
  try {
    await signInWithEmailAndPassword(auth, email, password);
    state.message = "Logged in successfully!";
    return state;
  } catch (error) {
    state.errors.error = `Error logging in: ${error}`;
    return state;
  }
}

export async function logout() {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Error signing out", error);
  }
}
