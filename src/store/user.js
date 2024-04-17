
const userinfo = {
    //state
    state() {
        return {
            username: ''
        }
    },

    //mutations czyli setters
    mutations: {
        SET_USERNAME(state, newUsername) {
            state.username = newUsername
        },
        LOGOUT(state) {
            state.username = ''
        }
    },

    //getters
    getters: {
        GET_USERNAME(state) {
            return state.username
        },
        LOGGED_IN(state) {
            return state.username !== ''
        }
    },

    actions: {
        CHECK_LOGIN({ state, commit }) {
            fetch('http://localhost:3000/check_login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: "no-cors",
                credentials: "include"
            })

                .then(response => response.json())
                .then(response => {
                    this.loginStatus = response.status;
                    this.loginError = response.message;
                    if (this.loginStatus == 'success') {
                        commit('SET_USERNAME', response.username);
                    }

                })
                .catch(error => {

                });
        },
        LOGOUT({ commit }) {
            fetch('http://localhost:3000/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: "no-cors",
                credentials: "include"
            })
                .then(response => response.json())
                .then(response => {
                    commit('LOGOUT');
                })
                .catch(error => {

                });
        }
    }
}

export default userinfo
