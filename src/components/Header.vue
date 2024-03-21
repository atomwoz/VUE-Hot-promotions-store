<template>
    <div>
        <RouterLink to="/" exact>Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/nnn">Not found</RouterLink>
        <RouterLink to="/register" class="register">Register</RouterLink>
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

.register {
    background-color: #333;
    color: white;
    border-radius: 900px;
}
</style>
