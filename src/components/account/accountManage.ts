import { app } from "../script/firebase_init";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

const auth = getAuth(app);

const LogOut = async () => await auth.signOut();
const LogIn = {
    google: async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    }
}

export { auth, LogOut, LogIn }