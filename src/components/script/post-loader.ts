import {
    getFirestore,
    collection,
    orderBy,
    limit,
    query,
    where,
    getDocs,
} from "firebase/firestore"
import {
    app
} from "./firebase_init"

const db = getFirestore(app);
var lastArticle_t = new Date();

export async function getPosts(number: number) {
    let result: Object[] = []

    const q = query(
        collection(db, "post"),
        orderBy("timestamp", "desc"),
        where("timestamp", "<", lastArticle_t),
        limit(number)
    );
    const querySnapshot = await getDocs(q);
    await querySnapshot.forEach((doc) => {
        const data = doc.data();
        result.push(data);
    })

    return result;
}