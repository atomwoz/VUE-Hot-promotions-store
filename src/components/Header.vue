<template>
    <div>
        <RouterLink to="/" exact>Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/nnn">Not found</RouterLink>
        <span v-if="loggedIn"> {{ username }} <button @click="logout">Logout</button></span>

        <RouterLink v-if="!loggedIn" to="/login" class="register">Login</RouterLink>
        <RouterLink v-if="!loggedIn" to="/register" class="register">Register</RouterLink>


    </div>
</template>

<script>
export default {
    data() {
        return {
            loginSuccess: false,
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('LOGOUT');
        }
    },
    computed: {
        loggedIn() {
            return this.$store.getters.LOGGED_IN;
        },
        username() {
            return this.$store.getters.GET_USERNAME;
        }
    },
    mounted() {
        this.$store.dispatch('CHECK_LOGIN');
    }
}
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
