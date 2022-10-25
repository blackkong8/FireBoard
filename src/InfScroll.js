'use strict'


import {
    getFirestore,
    collection,
    orderBy,
    limit,
    query,
    where,
    getDocs,
} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'
import { appendArticle } from './ArticleManage.js'
import { app } from './Firebase.js'

const db = getFirestore(app);

var lastArticle_t = new Date();

async function loader() {
    const q = query(
        collection(db, "post"),
        orderBy("timestamp", "desc"),
        where("timestamp", "<", lastArticle_t),
        limit(10)
    );

    const querySnapshot = await getDocs(q);
    await querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data();

        console.log(doc.id, " => ", data);

        appendArticle(data.title, data.displayname, data.content, data.timestamp.toDate());

        lastArticle_t = data.timestamp;

        if (doc.id === "firstPost") {
            io.disconnect();
        }
    });
}

const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
            await loader();
        }
    })
});

io.observe(document.querySelector("body>footer"));