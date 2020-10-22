export default {
  state: {
    movies: [],
  },
  mutations: {
    getNewMovies() {},
    addToCart(state, product) {
      let card = state.shopCart;
      //   let card = JSON.parse(localStorage.getItem("shopCart")) || [];
      let productObject = {
        id: product.id,
        title: product.title,
        price: product.price,
        qty: 1,
      };

      let indexOfExistingProduct = card.findIndex(
        (el) => el.id === productObject.id
      );
      if (indexOfExistingProduct !== -1) {
        card[indexOfExistingProduct].qty += 1;
      } else {
        card.push(productObject);
      }
      state.shopCart = card;
    },
    removeItemCart(state, id) {
      let card = state.shopCart;
      card.forEach((element) => {
        if (element.id == id) {
          if (element.qty > 1) {
            element.qty = element.qty - 1;
            localStorage.setItem("shopCart", JSON.stringify(card));
          } else if (element.qty == 1) {
            let indexOfExistingProduct = card.findIndex(
              (element) => element.id === id
            );
            card.splice(indexOfExistingProduct, 1);
            state.shopCart = card;
          }
        }
      });
    },
  },
};
