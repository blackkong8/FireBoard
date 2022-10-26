'use strict'

import {
    getAuth,
    signOut,
    setPersistence,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    browserLocalPersistence,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { app } from './Firebase.js'

export let userInfo = null;

const auth = getAuth(app);

const account = document.querySelector("#account");

const google = {
    login: () => {

        setPersistence(auth, browserLocalPersistence)
            .then(async () => {
                const provider = new GoogleAuthProvider();

                await signInWithPopup(auth, provider)
                    .then((result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        const credential = GoogleAuthProvider.credentialFromResult(result);
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

account.addEventListener("click", (e) => {
    e.preventDefault();
    if (userInfo == null) {
        google.login();
    } else {
        google.logout();
    }
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        userInfo = user;
        account.textContent = 'Log Out';
    } else {
        userInfo = null;
        account.textContent = 'Log In';
    }
});