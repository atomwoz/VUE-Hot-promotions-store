<template>
  <div :style="contStyle" class="promotion">
    <h2>{{ this.promotion.header }}</h2>
    <h3>{{ this.promotion.description }}</h3>
  </div>
</template>

<script>
export default {
  name: 'PromotionTile',
  props: { promotion: Object },
  computed: {
    contStyle() {
      const { image } = this.promotion
      let imageUrl

      try {
        imageUrl = `/src/assets/${image}`
      } catch (e) {
        console.log(e)
      }

      return {
        backgroundImage: `url(${imageUrl})`
      }
    }
  }
}
</script>

<style scoped>
.promotion {
  padding: 10px;
  margin: 10px;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  color: black;
  font-weight: 800;
  background-size: cover;
}
</style>
