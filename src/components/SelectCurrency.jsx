import { Grid, MenuItem, TextField } from '@mui/material';
import { observer } from 'mobx-react';

const SelectCurrency = observer(({ label, defaultValue, onChange }) => {
    const currencies = [
        {
            value: 'USD',
            label: 'Доллар США',
        },
        {
            value: 'EUR',
            label: 'ЕВРО',
        },
        {
            value: 'RUB',
            label: 'Российский рубль',
        },
        {
            value: 'GBP',
            label: 'Фунт стерлингов',
        },
    ];

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <Grid item xs={12} md>
            <TextField
                id="outlined-select-currency"
                select
                label={label}
                value={defaultValue}
                onChange={handleChange}
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value} {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Grid>
    );
});

export default SelectCurrency;
