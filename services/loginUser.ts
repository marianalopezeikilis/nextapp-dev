import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/clientApp"

export default async function signIn(email: string, password: string) {
    try {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                //return user
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                //return [errorCode, errorMessage]
            });
    } catch (error: any) {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;

        //return [errorCode, errorMessage]
    }


}


