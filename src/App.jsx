import { Container, Grid, Typography } from '@mui/material';
import InputAmount from './components/InputAmount';
import { useStore } from "./stores/store.js";
import { observer } from "mobx-react";

import SelectCurrency from "./components/SelectCurrency.jsx";
import SwitchCurrency from "./components/SwitchCurrency.jsx";

function App() {
  const { converterStore: { from, to } } = useStore();

  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10rem",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative"
  };

  const handleFromCurrencyChange = (value) => {
    from.currency = value;
  };

  const handleToCurrencyChange = (value) => {
    to.currency = value;
  };

  const handleSwitchCurrencies = () => {
    const tempCurrency = from.currency;
    from.currency = to.currency;
    to.currency = tempCurrency;

    const tempAmount = from.amount;
    from.amount = to.amount;
    to.amount = tempAmount;
  };

  return (
      <Container maxWidth="md" sx={boxStyles}>
        <Typography variant='h5' sx={{ marginBottom: "2rem" }}>Конвертер валют</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <SelectCurrency
                label="Из"
                defaultValue={from.currency}
                onChange={handleFromCurrencyChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SwitchCurrency onClick={handleSwitchCurrencies} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SelectCurrency
                label="B"
                defaultValue={to.currency}
                onChange={handleToCurrencyChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputAmount
                label="У меня есть"
                amount={from.amount}
                currency={from.currency}
                onChange={(amount) => (from.amount = amount)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputAmount
                label="Я получу"
                amount={to.amount}
                currency={to.currency}
                onChange={(amount) => (to.amount = amount)}
            />
          </Grid>
        </Grid>
      </Container>
  );
}

export default observer(App);

