<template>
    <div>
        <h2>{{ product.name }}</h2>
        <h3>{{ product.shortDescription }}</h3>
        <p>{{ product.price }}</p>
    </div>
</template>

<script>
    export default {
        name: 'ProductTile',
        props: { productID: String },
        created() {
            this.$store.dispatch("FETCH_PRODUCTS");
        },
        computed: {
            product() {
                return this.$store.getters.GET_PRODUCT_BY_ID(this.productID);
            }
        }
    }
</script>

<style scoped>

</style>