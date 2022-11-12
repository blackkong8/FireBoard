<template>
    <article class="post">
        <header>
            <h1 class="title">{{ post.title }}</h1>
            <a>{{ post.displayname }}</a>
        </header>
        <main>
            {{ post.content }}
        </main>
        <footer>
            {{ post.timestamp.toDate() }}
        </footer>
    </article>
</template>

<script lang="ts">
export default {
    props: [
        "post"
    ]
}
</script>

<style scoped>
article {
    background-color: white;

    border-radius: 10px;
    padding: 7px;
    margin: 10px 0;
}

header {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.title {
    margin-right: auto;
}

a {
    font-size: 14px;
    margin-left: auto;
    color: gray;
}

main {
    margin: 10px auto;
}

footer {
    color: grey;
    font-size: 12px;
}
</style>