<template>
    <div>
        <RouterLink to="/" exact>Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/nnn">Not found</RouterLink>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
div {
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #f4f4f4;
}
</style>
