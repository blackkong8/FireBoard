<template>
    <div>
        <header>
            hi
        </header>
        <main></main>
        <aside></aside>
        <footer></footer>
    </div>
</template>

<style scoped>
div {
    display: grid;
    grid-template-columns: auto 250px;
}

header {
    display: flex;
    flex-direction: row;
    align-items: center;

    grid-column: 1 / -1;
}
</style>