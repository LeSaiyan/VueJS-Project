import APIConfig from "../configs/api.configs";

export default {
  methods: {
    getLatestMovies() {
      return fetch(
        APIConfig.apiUrl +
          "/3/movie/upcoming?api_key=" +
          APIConfig.apiKey +
          "&language=en-US"
      ).then((res) => res.json());
    },

    getProduct(id) {
      return fetch(APIConfig.apiUrl + "/" + id).then((res) => res.json());
    },

    // addToCart(itemId, itemTitle, itemPrice) {
    //   let card = JSON.parse(localStorage.getItem("shopCart")) || [];
    //   let productObject = {
    //     id: itemId,
    //     title: itemTitle,
    //     price: itemPrice,
    //     qty: 1,
    //   };

    //   let indexOfExistingProduct = card.findIndex(
    //     (el) => el.id === productObject.id
    //   );
    //   if (indexOfExistingProduct !== -1) {
    //     card[indexOfExistingProduct].qty += 1;
    //   } else {
    //     card.push(productObject);
    //   }
    //   localStorage.setItem("shopCart", JSON.stringify(card));
    // },
    // removeItemCart(id) {
    //   let card = JSON.parse(localStorage.getItem("shopCart")) || [];
    //   card.forEach((element) => {
    //     if (element.id == id) {
    //       if (element.qty > 1) {
    //         element.qty = element.qty - 1;
    //         localStorage.setItem("shopCart", JSON.stringify(card));
    //       } else if (element.qty == 1) {
    //         let indexOfExistingProduct = card.findIndex(
    //           (element) => element.id === id
    //         );
    //         card.splice(indexOfExistingProduct, 1);
    //         localStorage.setItem("shopCart", JSON.stringify(card));
    //       }
    //     }
    //   });
    // },
    clearCart() {
      localStorage.removeItem("shopCart");
    },
    getCart(id) {
      let card = JSON.parse(localStorage.getItem("shopCart")) || [];
      card.forEach((element) => {
        if (card.id === element.id) {
          return element;
        }
      });
    },
    getCartCount() {
      let totalQty = 0;
      let card = JSON.parse(localStorage.getItem("shopCart")) || [];
      card.forEach((el) => {
        totalQty += el.qty;
      });
      return totalQty;
    },
  },
};
