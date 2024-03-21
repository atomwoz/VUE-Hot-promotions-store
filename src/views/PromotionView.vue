<template>
    <div>
        <Header></Header>
        <div class="app">
            <div class="header">
                <h2>{{ promotion.header }}</h2>
                <h3>{{ promotion.description }}</h3>
                <p>{{ promotion.longDescription }}</p>
            </div>
            <div class="products">
                <ProductTile class="product-tile" v-for="product in promotion.items" :key="product"
                    :productID="product" />
            </div>
        </div>
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

<style scoped>
* {
    box-sizing: border-box;
    overflow: hidden;
}

.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100vw;
}

.header {
    text-align: center;
    margin-bottom: 20px;
    width: 500px;
}

.products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}


.product-tile {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
}

.product-tile h4 {
    margin-top: 0;
    margin-bottom: 10px;
}

.product-tile p {
    margin-top: 0;
    margin-bottom: 20px;
}

.product-tile button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}

.product-tile button:hover {
    background-color: #0056b3;
}

.product-tile button:focus {
    outline: none;
}
</style>