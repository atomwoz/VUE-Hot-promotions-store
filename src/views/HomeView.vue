<template>
    <div>
        <Header></Header>
        <div v-if="!promotionsList.length" class="loader">
            <Loader />
        </div>
        <div v-if="promotionsList.length">
            <RouterLink v-for="promotion in promotionsList" :to="`/promotion/${promotion.id}`" :key="promotion.id">
                <PromotionTile v-bind:promotion="promotion" />
            </RouterLink>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import PromotionTile from "@/components/PromotionTile.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";
export default {
    components: {
        PromotionTile, Header, Footer, Loader
    },
    data() {
        return {
            promotions: []
        }
    },
    created() {
        this.$store.dispatch("FETCH_PROMOTIONS");
    },
    computed: {
        promotionsList() {
            return this.$store.getters.GET_PROMOTIONS_LIST;
        }
    }

}
</script>

<style scoped>
div {
    width: 100%;
    height: auto;
}

.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f4f4f4;
    z-index: 100;
}
</style>
