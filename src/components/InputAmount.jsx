import { Grid, InputAdornment, TextField } from '@mui/material';
import { observer } from 'mobx-react';

const InputAmount = observer(({ label, amount, currency, onChange }) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <Grid item xs={12} md>
            <TextField
                value={amount}
                onChange={handleChange}
                label={label}
                fullWidth
                InputProps={{
                    type: "number",
                    startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                }}
            />
        </Grid>
    );
});

export default InputAmount;
