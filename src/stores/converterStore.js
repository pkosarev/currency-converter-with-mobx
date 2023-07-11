import { action, makeAutoObservable, reaction } from "mobx";
import axios from "axios";

const converterStore = makeAutoObservable({
  from: {
    amount: "",
    currency: 'RUB',
  },
  to: {
    amount: "",
    currency: 'USD',
  },
});

reaction(() => converterStore.from.amount, (value) => {
  if (value > 0) {
    convert();
  }
})

const convert = action(() => {
  axios("https://api.freecurrencyapi.com/v1/latest", {
    params: {
      apikey: import.meta.env.VITE_API_KEY,
      base_currency: converterStore.from.currency,
      currencies: converterStore.to.currency
    }
  })
    .then(response => converterStore.to.amount = response.data.data[converterStore.to.currency] * converterStore.from.amount);
})

export default converterStore;