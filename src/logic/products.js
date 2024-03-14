
//Use store to get the list of promotions and products
import store from '@/store/products'
export default getProductsFromPromotion = (promotion) => {
    let items = promotion.items;
    items = items.map((item) => {
        let product = store.getters.GET_PRODUCT_LIST.find((product) => product.id === item.id);
        return {
            ...item,
            ...product
        }
    })
    console.log(items);
    return items;
}