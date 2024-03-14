import { getProducts } from '@/api'

const products = {
    // state
    state() {
        return {
            productList: [],
            productsLoading: false,
            productsError: null
        }
    },

    // mutations (setters)
    mutations: {
        SET_PRODUCT_LIST(state, newProducts) {
            state.productList = newProducts
        },
        SET_PRODUCTS_LOADING(state, newLoading) {
            state.productsLoading = newLoading
        },
        SET_PRODUCTS_ERROR(state, newError) {
            state.productsError = newError
        }
    },

    // getters
    getters: {
        GET_PRODUCT_LIST(state) {
            return state.productList
        },
        GET_PRODUCT_BY_ID: (state) => (id) => {
            return state.productList.find(product => product.id === id)
        }
    },

    // actions
    actions: {
        FETCH_PRODUCTS({ state, commit }) {
            commit('SET_PRODUCTS_LOADING', true)

            getProducts()
                .then((data) => {
                    commit('SET_PRODUCT_LIST', data)
                })
                .catch((error) => {
                    commit('SET_PRODUCTS_ERROR', 'server error!!!')
                })
                .finally(() => {
                    commit('SET_PRODUCTS_LOADING', false)
                })
        }
    }
}

export default products
