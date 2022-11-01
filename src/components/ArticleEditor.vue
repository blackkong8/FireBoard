<template>
    <article ref="editor" class="">
        <header>
            <h1 ref="title" contenteditable="true" placeholder="Title" aria-required="true"></h1>
        </header>
        <main ref="content" contenteditable="true" placeholder="Content"></main>
        <footer ref="footer">
        </footer>
        <button @click="post" ref="submit">Post</button>
    </article>
</template>

<script lang="ts">

import { app } from './script/firebase_init'
import {
    getAuth,
    onAuthStateChanged,
    type User
} from "firebase/auth"
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
} from 'firebase/firestore'
import {
    getStorage, ref
} from 'firebase/storage'

export default {
    data() {
        return {
            db: getFirestore(app),
            storage: getStorage(app),
            isLoggedIn: true,
            userInfo: {} as User,
        }
    },
    methods: {
        post(e: object) {
            const title: HTMLElement = (this.$refs.title as HTMLElement)
            const content: HTMLElement = (this.$refs.content as HTMLElement)

            const submit: HTMLSelectElement = (this.$refs.submit as HTMLSelectElement)

            if (title.textContent && content.textContent && this.isLoggedIn) {
                submit.disabled = true
                addDoc(collection(this.db, "post"), {
                    title: title.textContent,
                    content: content.textContent,
                    timestamp: serverTimestamp(),
                    displayname: this.userInfo.displayName,
                    uid: this.userInfo.uid,
                }).then((docRef) => {
                    console.log(docRef)
                    title.textContent = '';
                    content.textContent = '';
                }).catch((e) => {
                    console.log(e)
                })
                submit.disabled = false;
            }
        },
        upload(){
            
        }
    },
    mounted() {
        const auth = getAuth(app)

        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.userInfo = user
                this.isLoggedIn = true
            } else {
                this.userInfo = {} as User
                this.isLoggedIn = false
            }
        })

        const editor = this.$refs.editor as HTMLElement
        const footer = this.$refs.footer as HTMLElement

        editor.ondrop = (e) => {
            e.preventDefault();

            let files;

            if (e.dataTransfer) {
                files = [...e.dataTransfer.files]

                footer.textContent = files.map(file => file.name).join(' / ')
            }
        }
    }
}

</script>

<style>
article {
    border-radius: 10px;
    padding: 7px;
    margin: 10px 0;
}

header {
    display: flex;
    flex-direction: row;
    align-items: center;
}

article>header>h1 {
    font-size: 1.25em;
    margin: 0;
}

button {
    width: 100%;
    padding: 5px;
    font-size: larger;
    font: bolder;
    border: none;
    border-radius: 10px;
    background-color: #fee050;
    color: white;
}

article>button:disabled {
    background-color: #d1d5db;
}

article>footer {
    padding: 5px 0;
    color: grey;
    font-size: 12px;
}

[contenteditable="true"]:empty:before {
    content: attr(placeholder);
    color: #d1d5db;
}

[contenteditable="true"]:focus {
    outline: none;
}
</style>