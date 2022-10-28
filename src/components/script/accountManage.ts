import {
    getAuth,
    signOut,
    setPersistence,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    browserLocalPersistence,
} from "firebase/auth";
import { app } from './firebase_init'

export let userInfo: any = null;

export const auth = getAuth(app);

const google = {
    login: () => {

        setPersistence(auth, browserLocalPersistence)
            .then(async () => {
                const provider = new GoogleAuthProvider();

                await signInWithPopup(auth, provider)
                    .then((result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        const credential: any = GoogleAuthProvider.credentialFromResult(result);
                        const token = credential.accessToken;
                        // The signed-in user info.
                        const user = result.user;
                        // ...
                        console.log({ credential, token, user });
                    }).catch((error) => {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // The email of the user's account used.
                        const email = error.customData.email;
                        // The AuthCredential type that was used.
                        const credential = GoogleAuthProvider.credentialFromError(error);
                        // ...
                        console.log({ errorCode, errorMessage, email, credential });
                    });
            })
    },
    logout: () => {
        return signOut(auth).then((e) => {
            console.log(e);
        }).catch((error) => {
            console.log(error);
        });
    }
}

export async function UpdateAccount() {
    if (userInfo == null) {
        await google.login();
        return true
    } else {
        await google.logout();
        return false
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        userInfo = user;
    } else {
        userInfo = null;
    }
});