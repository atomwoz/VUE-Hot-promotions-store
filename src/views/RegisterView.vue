<template>
    <div class="register">
        <Header></Header>

        <div class="form">
            <div v-if="registerStatus == ''">
                <h1>Register New User</h1>
                <div class="inner-form">
                    <label for="username">Username:</label>
                    <input type="text" id="username" v-model="username" required>
                    <p class="error" v-if="!validUsername">Username is too short (5 chars required)</p>

                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password" required>

                    <label for="password1">Repeat Password:</label>
                    <input type="password" id="password1" v-model="password1" required>
                    <p class="error" v-if="!passwordMatch">Passwords don't match</p>
                    <p class="error" v-if="!validPassword">Password is too short (5 chars required)</p>
                    <button @click="registerUser" :disabled="!validForm">Register</button>
                </div>
            </div>
            <div class="register-success" v-if="registerStatus == 'success'">
                <h1>Registration OK</h1>
            </div>
            <div class="register-error" v-if="registerStatus == 'error'">
                <h1>Registration Error</h1>
                <p class="error">{{ registerError }}</p>
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
            password1: '',
            password: '',
            registerStatus: '',
            registerError: ''
        }
    },
    methods: {
        registerUser() {
            fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            })
                .then(response => response.json())
                .then(response => {
                    this.registerStatus = response.status;
                    this.registerError = response.message;
                })
                .catch(error => {
                    this.registerStatus = 'error';
                    this.registerError = error;
                });
        }
    },
    components: {
        Header,
        Footer
    },
    computed: {
        passwordMatch() {
            return this.password1 === this.password;
        },
        validPassword() {
            return this.password.length > 5;
        },
        validUsername() {
            return this.username.length > 5;
        },
        validForm() {
            return this.validPassword && this.validUsername && this.passwordMatch;
        }
    }
}
</script>

<style lang="css" scoped>
.register {
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