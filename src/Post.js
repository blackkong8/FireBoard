'use strict'

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'
import { app } from './Firebase.js'
import { userInfo } from './AccountManage.js'

const db = getFirestore(app);

const form = document.querySelector("#form");
const submit = form.querySelector("button");

submit.addEventListener("click", (e) => {
    const title = form.querySelector("h1");
    const content = form.querySelector("main");

    if (title.textContent && content.textContent && loginInfo) {
        submit.disabled = true;

        addDoc(collection(db, "post"), {
            title: title.textContent,
            content: content.textContent,
            timestamp: serverTimestamp(),
            displayname: userInfo.displayName,
            uid: userInfo.uid,
        }).then((docRef) => {
            console.log(docRef)
            title.textContent = '';
            content.textContent = '';
        }).catch((e) => {
            console.log(e)
        }).finally(() => {
            submit.disabled = false;
        })
    }
})