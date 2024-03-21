<template>
    <div>
        <Header></Header>
        <h2>{{ promotion.header }}</h2>
        <h3>{{ promotion.description }}</h3>
        <p>{{ promotion.longDescription }}</p>
        <ProductTile v-for="product in promotion.items" :key="product" :productID="product" />
        <Footer></Footer>
    </div>
</template>

<script>
import ProductTile from '@/components/ProductTile.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'PromotionView',
    components: {
        ProductTile, Header, Footer
    },
    data() {
        return {

        }
    },
    created() {
        this.$store.dispatch("FETCH_PROMOTIONS");
    },
    computed: {
        promotion() {
            return this.$store.getters.GET_PROMOTION_BY_ID(this.$route.params.id);
        }
    }

}
</script>

<style scoped></style>