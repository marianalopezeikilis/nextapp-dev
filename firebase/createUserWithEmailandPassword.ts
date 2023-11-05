import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./clientApp";

export default async function createUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
}
