<template>
    <article>
        <header>
            <h1 contenteditable="true" placeholder="Title" aria-required="true"></h1>
        </header>
        <main contenteditable="true" placeholder="Content"></main>
        <footer>
        </footer>
        <button>Post</button>
    </article>
</template>

<script lang="ts">

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

h1 {
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

[contenteditable="true"]:empty:before {
    content: attr(placeholder);
    color: #d1d5db;
}

[contenteditable="true"]:focus {
    outline: none;
}
</style>