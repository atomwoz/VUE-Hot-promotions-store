<template>
    <div>
        <Header></Header>
        <h1>404 Not Found</h1>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'NotFoundView',
    components: {
        Header, Footer
    },
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
    }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>