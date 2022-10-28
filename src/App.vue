<script setup lang="ts">
import BoardHeader from "./components/BoardHeader.vue"
import BoardAside from "./components/BoardAside.vue";
import BoardMain from "./components/BoardMain.vue";
</script>

<template>
    <header class="full-width">
        <BoardHeader />
    </header>
    <hr class="full-width">
    <main>
        <BoardMain />
    </main>
    <aside>
        <BoardAside />
    </aside>
</template>

<style scoped>
.full-width {
    grid-column: 1/ -1;
    width: 100%;
}

header {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>