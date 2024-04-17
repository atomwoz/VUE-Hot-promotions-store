import { createStore } from 'vuex'

import promotions from './promotions'
import products from './products'
import userinfo from './user'

const modules = {
  promotions,
  products,
  userinfo
  // kolejne moduły
}

export default createStore({
  modules
})
