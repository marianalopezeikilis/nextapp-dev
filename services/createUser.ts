import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {initializeApp} from 'firebase/app';

export default async function createUser( email: string, password: string) {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  } catch (error) {
    console.log(error);
   // const errorCode = error.code;
  //  const errorMessage = error.message;
  }
}
