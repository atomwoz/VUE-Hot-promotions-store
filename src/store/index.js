import { createStore } from 'vuex'

import promotions from './promotions'
import products from './products'

const modules = {
  promotions,
  products
  // kolejne moduły
}

export default createStore({
  modules
})
