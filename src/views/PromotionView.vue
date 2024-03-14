<template>
    <div>
        <h2>{{ promotion.header }}</h2>
        <h3>{{ promotion.description }}</h3>
        <p>{{ promotion.longDescription }}</p>
        <p v-for="x in promotion.items">{{x}}</p>
        <ProductTile v-for="product in promotion.items" :key="product" :productID="product" />
    </div>
</template>

<script>
import ProductTile from '@/components/ProductTile.vue'
    export default {
        name: 'PromotionView',
        components: {
            ProductTile
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

<style scoped>

</style>