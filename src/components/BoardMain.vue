<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, type Ref } from "vue";
import { getArticle } from "./article/articleManage";

import BoardArticle from "./article/BasicArticle.vue";
import ArticleEditor from "./ArticleEditor.vue";

export default
    defineComponent({
        components: { BoardArticle, ArticleEditor },
        setup() {
            const posts: Ref<any> = ref([])
            const scrollComponent = ref(null)
            getArticle().then(data => (posts.value = data))

            const loadMorePosts = () => {
                getArticle().then(data => posts.value.push(...data))
            }
            const handleScroll = (e: any) => {
                let element: any = scrollComponent.value
                if (element.getBoundingClientRect().bottom < window.innerHeight) {
                    loadMorePosts()
                }
            }
            onMounted(() => {
                window.addEventListener("scroll", handleScroll)
            })
            onUnmounted(() => {
                window.removeEventListener("scroll", handleScroll)
            })

            return {
                posts, scrollComponent
            }
        }
    })
</script>
<template>
    <ArticleEditor />
    <div ref="scrollComponent">
        <BoardArticle v-for="post in posts" :post="post" />
    </div>
</template>