'use strict'

const template = document.querySelector("template");
const main = document.querySelector("main");

export function appendArticle(title, writer, content, footer) {
    const clone = document.importNode(template.content, true);

    clone.querySelector("h1").textContent = title;
    clone.querySelector("a").textContent = '@' + writer;
    clone.querySelector("main").textContent = content;
    clone.querySelector("footer").textContent = footer;

    main.appendChild(clone);
}