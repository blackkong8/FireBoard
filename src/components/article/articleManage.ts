import { app } from "../script/firebase_init"

import {
    getFirestore,
    collection,
    orderBy,
    limit,
    query,
    where,
    getDocs,
} from "firebase/firestore"

const db = getFirestore(app);
let lastArticle_t = new Date();

const getArticle = async (number: number = 10) => {
    let result: Object[] = [];
    const q = query(
        collection(db, "post"),
        orderBy("timestamp", "desc"),
        where("timestamp", "<", lastArticle_t),
        limit(number)
    );
    const querySnapshot = await getDocs(q);
    await querySnapshot.forEach((doc) => {
        const data = doc.data();
        lastArticle_t = data.timestamp;
        result.push(data);
    })
    return result;
}

export { getArticle }