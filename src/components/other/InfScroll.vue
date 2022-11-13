<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default{}
    defineComponent({
        props: [
            "doSomething"
        ],
        setup() {
            const scrollComponent = ref(null)

            const handleScroll = (e: any) => {
                let element: any = scrollComponent.value
                if (element.getBoundingClientRect().bottom < window.innerHeight) {
                    doSomething()
                }
            }
            onMounted(() => {
                window.addEventListener("scroll", handleScroll)
            })
            onUnmounted(() => {
                window.removeEventListener("scroll", handleScroll)
            })

            return {
                scrollComponent
            }
        }
    })
</script>
<template>
    <div ref="scrollComponent">
        <slot></slot>
    </div>
</template>