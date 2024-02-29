<template>
    <div>
        <Header></Header>
        Homeview
        <RouterLink v-for="promotion in promotionsList" :to="`/promotion/${promotion.id}`" :key="promotion.id">
            <PromotionTile v-bind:promotion="promotion" />
        </RouterLink>
        <Footer></Footer>
    </div>
</template>

<script>
import PromotionTile from "@/components/PromotionTile.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    components: {
        PromotionTile, Header, Footer
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
</style>


