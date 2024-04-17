<template>
    <div class="login">
        <Header></Header>

        <div class="form">
            <div v-if="loginStatus == ''">
                <h1>Login</h1>
                <div class="inner-form">
                    <label for="username">Username:</label>
                    <input type="text" id="username" v-model="username" required>

                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password" required>

                    <button @click="loginUser">Login</button>
                </div>
            </div>
            <div class="login-success" v-if="loginStatus == 'success'">
                <h1>Login Successful</h1>
                <p>Welcome, {{ username }}!</p>
            </div>
            <div class="login-error" v-if="loginStatus == 'error'">
                <h1>Login Error</h1>
                <p class="error">{{ loginError }}</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    data() {
        return {
            username: '',
            password: '',
            loginStatus: '',
            loginError: ''
        }
    },
    methods: {
        loginUser() {
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: "no-cors",
                credentials: "include",
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            })

                .then(response => response.json())
                .then(response => {
                    this.loginStatus = response.status;
                    this.loginError = response.message;
                    if (this.loginStatus == 'success') {
                        this.$store.commit('SET_USERNAME', this.username);
                    }

                })
                .catch(error => {
                    this.loginStatus = 'error';
                    this.loginError = error;
                });
        }
    },
    components: {
        Header,
        Footer
    },
    computed: {
        validForm() {
            return this.username.length > 0 && this.password.length > 0;
        }
    }
}
</script>

<style lang="css" scoped>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.inner-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    margin: 10px 0;
}

input {
    margin: 10px 0;
    font-size: 15px;
    padding: 5px;
    width: 200px;
}

button {
    margin: 10px 0;
}

.form {
    margin: 200px;
}

.error {
    color: red;
    text-decoration: underline;
}
</style>