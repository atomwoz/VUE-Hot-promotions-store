<template>
    <div>
        <div v-if="!ready">
            <div class="loader">
                <Loader></Loader>
            </div>

        </div>
        <div v-if="ready">
            <h2>{{ product.name }}</h2>
            <h3>{{ product.shortDescription }}</h3>
            <p>{{ product.price }}</p>
        </div>

    </div>
</template>

<script>
import Loader from './Loader.vue';
export default {
    name: 'ProductTile',
    props: { productID: String },
    components: {
        Loader
    },
    created() {
        this.$store.dispatch("FETCH_PRODUCTS");
    },
    computed: {
        product() {
            return this.$store.getters.GET_PRODUCT_BY_ID(this.productID);
        },
        ready() {
            return this.$store.getters.GET_PRODUCT_BY_ID(this.productID).loading == undefined;
        }
    }
}
</script>

<style scoped>
.loader {
    width: 100px;
    height: 100px;
}
</style>