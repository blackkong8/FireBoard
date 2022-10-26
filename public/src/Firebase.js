'use strict'

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js'

const firebaseConfig = {
    apiKey: "AIzaSyAsU9jFE1N3LZcM8Sx5xF6DfSuo3K2FbWs",
    authDomain: "fireboard-df471.firebaseapp.com",
    projectId: "fireboard-df471",
    storageBucket: "fireboard-df471.appspot.com",
    messagingSenderId: "958479069333",
    appId: "1:958479069333:web:87859ab61ee5bd3b58eb9c",
    measurementId: "G-LPDG89WB3E"
}

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);